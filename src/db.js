import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('transactions.db')

export class DB {
    static init(data) {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'CREATE TABLE IF NOT EXISTS bill_transactions (id INTEGER PRIMARY KEY NOT NULL, type TEXT NOT NULL, date TEXT, amount TEXT)',
                    [],
                    resolve,
                    (_, error) => reject(error)
                )
                tx.executeSql(
                    'CREATE TABLE IF NOT EXISTS card_transactions (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, type TEXT, amount TEXT)',
                    [],
                    resolve,
                    (_, error) => reject(error)
                    )
                // tx.executeSql(
                //     'DELETE FROM bill_transactions',
                //     [],
                //     (_, result) => resolve(result.rows._array),
                //     (_, error) => reject(error)
                // )
                tx.executeSql(
                    'SELECT COUNT(*) as [count] FROM bill_transactions',
                    [],
                    (_, result) => {
                        if ( result.rows._array[0].count === 0) {
                            data.bill.transactions.forEach(t => {
                                tx.executeSql(
                                    'INSERT INTO bill_transactions (type, date, amount) VALUES (?,?,?)',
                                    [t.type, t.date, t.amount],
                                    (_, result) => resolve(result.rows._array),
                                    (_, error) => reject(error)
                                )
                            });
                        }
                    },
                    (_, error) => reject(error)
                )
                tx.executeSql(
                    'SELECT COUNT(*) as [count] FROM card_transactions',
                    [],
                    (_, result) => {

                        if ( result.rows._array[0].count === 0) {
                            data.card.transactions.forEach(t => {
                                console.log(t)
                                tx.executeSql(
                                    'INSERT INTO card_transactions (title, type, amount) VALUES (?,?,?)',
                                    [t.title, t.type, t.amount],
                                    (_, result) => resolve(result.rows._array),
                                    (_, error) => reject(error)
                                )
                            });
                        }
                    },
                    (_, error) => reject(error)
                )
                tx.executeSql(
                    'SELECT COUNT(*) as [count] FROM card_transactions',
                    [],
                    (_, result) => console.log(result),
                    (_, error) => reject(error)
                )
            })
          })
    }
    static getTransactions(acc) {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    `SELECT * FROM ${acc}_transactions`, 
                    [],
                    (_, result) => resolve(result.rows._array),
                    (_, error) => reject(error)
                )
            })
        })
    }
}