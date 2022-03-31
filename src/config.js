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
    CARD: '• 1334'
}

export const onlyDigits = (s) => {
    let r = ''
    for (let i = 0; i<s.length; i++) {
        if (!isNaN(s[i]))
            r += s[i]
    }
    return r.replace(/\s/g, '')
}

export const toRoubles = (s) => {
    s = onlyDigits(s)
    let res =  ''
    for (let i = 0; i<s.length; i++) {
        if (i%3 === 0 && i != 0) { res += ' ' }
        res += s[s.length-1-i]
    }
    return res.split('').reverse().join('') + ' ₽'
}

export function toOparationFormat(s) {
    s.replace(/\s/g, '').replace('₽', '').replace(' ','')
    let r = ''
    for (let i = 0; i<s.length; i++) {
        if (s[i] !== ' ' && s[i] !== '₽') {
            r += s[i]
        }
    }
    if (r[0] === '-'){
        return '- ' + toRoubles(r)
    }
    return '+ ' + s
}
export const formatMobileNumber = (text) => {
    let res = '+7 ('
    text = onlyDigits(text)
    if (text[0]) { res += text[0]
        if (text[1]) {res += text[1]
            if (text[2]) {
                res += text[2] + ') '
                if (text[3]) {
                    res += text[3]
                    if (text[4]) {
                        res += text[4]
                        if (text[5]) {
                            res += text[5]+' '
                            if (text[6]) {
                                res += text[6]
                                if (text[7]) {
                                    res += text[7]+' '
                                    if (text[8]) {
                                        res += text[8]
                                        if (text[9]) {
                                            res += text[9]
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    
    return res;
}