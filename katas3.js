const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(param){
    const resultado = document.createTextNode(param)

    const body = document.getElementsByTagName('body')[0]
    const main = document.createElement('main')
    body.appendChild(main)
    
    const paragrafo = document.createElement('p')
    paragrafo.appendChild(resultado)
    main.appendChild(paragrafo)
    
}

function kata1() {
    let newArray = []
    for (let i = 1; i <= 25; i++) {
        newArray.push(i)
    }
    return newArray
}
showResults(kata1())
//---------------------------
function kata2() {
    let newArray = []
    for (let i = 25; i >= 1; i--) {
        newArray.push(i)
    }
    return newArray
}
showResults(kata2())
//---------------------------
function kata3() {
    let newArray = []
    for (let i = -1; i >= -25; i--) {
        newArray.push(i)
    }
    return newArray
}
showResults(kata3())
//---------------------------
function kata4() {
    let newArray = []
    for (let i = -25; i <= -1; i++) {
        newArray.push(i)
    }
    return newArray
}
showResults(kata4())
//---------------------------
function kata5() {
    let newArray = []
    for (let i = 25; i >= -25; i -= 2) {
        newArray.push(i)
    }
    return newArray
}
showResults(kata5())
//---------------------------
function kata6() {
    let newArray = []
    for (let i = 1; i <= 100; i++) {
        if(i % 3 === 0) {
            newArray.push(i)
        }
    }
    return newArray
}
showResults(kata6())
//---------------------------
function kata7() {
    let newArray = []
    for (let i = 1; i <= 100; i++) {
        if(i % 7 === 0) {
            newArray.push(i)
        }
    }
    return newArray
}
showResults(kata7())
//---------------------------
function kata8() {
    let newArray = []
    for (let i = 100; i >= 1; i--) {
        if(i % 3 === 0 || i % 7 === 0) {
            newArray.push(i)
        }
    }
    return newArray
}
showResults(kata8())
//---------------------------
function kata9() {
    let newArray = []
    for (let i = 1; i <= 100; i += 2) {
        if (i % 5 === 0) {
            newArray.push(i)
        }
    }
    return newArray
}
showResults(kata9())
//---------------------------
function kata10() {
    return sampleArray
}
showResults(kata10())
//---------------------------
function kata11() {
    let newArray = []
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 === 0) {
            newArray.push(sampleArray[i])
        }
    }
    return newArray
}
showResults(kata11())
//---------------------------
function kata12() {
    let newArray = []
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 !== 0) {
            newArray.push(sampleArray[i])
        }
    }
    return newArray
}
showResults(kata12())
//---------------------------
function kata13() {
    let newArray = []
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 8 === 0) {
            newArray.push(sampleArray[i])
        }
    }
    return newArray
}
showResults(kata13())
//---------------------------
function kata14() {
    let newArray = []
    for (let i = 0; i < sampleArray.length; i ++) {
        newArray.push(sampleArray[i] * sampleArray[i])
    }
    return newArray
}
showResults(kata14())
//---------------------------
function kata15() {
    let resultado = 0
    for (let i = 0; i <= 20; i++) {
        resultado += i
    }
    return resultado
}
showResults(kata15())
//---------------------------
function kata16() {
    let resultado = 0
    for (let i = 0; i < sampleArray.length; i++) {
        resultado += sampleArray[i]
    }
    return resultado
}
showResults(kata16())
//---------------------------
function kata17() {
    let resultado = sampleArray[0]
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] < resultado ) {
        resultado = sampleArray[i]
        }
    }
    return resultado
}
showResults(kata17())
//---------------------------
function kata18() {
    let resultado = sampleArray[0]
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] > resultado ) {
        resultado = sampleArray[i]
        }
    }
    return resultado
}    
showResults(kata18())
//---------------------------
// /**
//  * Daqui em diante são os bônus, por sua conta e risco
//  */

// function kataBonus1() {
//     // implemente o código do kata bonus 1 aqui
// }

// function kataBonus2() {
//     // implemente o código do kata bonus 2 aqui
// }

// function kataBonus3() {
//     // implemente o código do kata bonus 3 aqui
// }

// function kataBonus4() {
//     // implemente o código do kata bonus 4 aqui
// }

// function kataBonus5() {
//     // implemente o código do kata bonus 5 aqui
// }
