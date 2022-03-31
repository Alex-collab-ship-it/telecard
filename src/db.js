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
                    'DELETE FROM card_transactions',
                    [],
                    resolve,
                    reject
                )
                // tx.executeSql(
                //     'SELECT COUNT(*) as [count] FROM card_transactions',
                //     [],
                //     (_, result) => {
    
                //         if ( result.rows._array[0].count === 0) {
                //             data.card.transactions.forEach(t => {
                //                 tx.executeSql(
                //                     'INSERT INTO card_transactions (title, type, amount) VALUES (?,?,?)',
                //                     [t.title, t.type, t.amount],
                //                     (_, result) => resolve(result.rows._array),
                //                     (_, error) => reject(error)
                //                 )
                //             });
                //         }
                //     },
                //     (_, error) => reject(error)
                // )
            })
        })
    }
    static getTransactions(table) {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    `SELECT * FROM ${table}_transactions ORDER BY id DESC`, 
                    [],
                    (_, result) => {
                        let x = 0;
                        result.rows._array.forEach(item => x += Number(item.amount))
                        resolve( { transactions: result.rows._array, balance: x.toString() })
                    },
                    (_, error) => reject(error)
                )
            })
        })
    }
    static addCard(data){
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    `INSERT INTO card_transactions (title, type, amount) VALUES (?,?,?)`, 
                    [data.title, data.type, data.amount],
                    resolve,
                    (_, error) => reject(error)
                )
            })
        })
    }
    static addBill(data){
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    `INSERT INTO bill_transactions (type, date, amount) VALUES (?,?,?)`, 
                    [data.type, data.date, data.amount],
                    resolve,
                    (_, error) => reject(error)
                )
            })
        })
    }
    static loadBalance(table) {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    `SELECT amount FROM ${table}_transactions`, 
                    [],
                    (_, result) => {
                        let x = 0;
                        result.rows._array.forEach(item => x += Number(item.amount))
                        resolve(x.toString())
                    },
                    (_, error) => reject(error)
                )
            })
        })
    }
}