import { Dimensions } from "react-native"

export const THEME = {
    MAIN_COLOR: '#2c7fe0',
    CARD_COLOR: '#0cafaa',
    MENU_COLOR: '#f4f5f7',
    GRAY_COLOR: '#9697A2', //808aa8
    BORDER_COLOR: '#CCD3EA',
    DRAWER_COLOR: '#003296',
    WIDTH: Dimensions.get('window').width,
    HEIGHT: Dimensions.get('window').height,
    MONEY: '515 000',
    CARD_MONEY: '1 000',
    CARD: '• 1334'
}

export const toRoubles = (s) => {
    s.replace(/\s/g, '').replace('₽', '').replace(' ','')
    let r = ''
    for (let i = 0; i<s.length; i++) {
        if (s[i] !== ' ' && s[i] !== '₽') {
            r += s[i]
        }
    }
    s = r
    console.log('"'+s+'"')
    let res =  ''
    for (let i = 0; i<s.length; i++) {
        if (i%3 === 0 && i != 0) { res += ' ' }
        res += s[s.length-1-i]
    }
    return res.split('').reverse().join('') + ' ₽'
}