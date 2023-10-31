// -----DOM ELEMENTS----//
const pegButtons = document.querySelectorAll('.button')
const firstTry = document.querySelectorAll('.try1')
const secondTry = document.querySelectorAll('.try2')
const thirdTry = document.querySelectorAll('.try3')
const fourthTry = document.querySelectorAll('.try4')
const fifthTry = document.querySelectorAll('.try5')
const sixthTry = document.querySelectorAll('.try6')
const seventhTry = document.querySelectorAll('.try7')
const eightTry = document.querySelectorAll('.try8')
const secretCodeRow = document.querySelectorAll('.solution')
const clearButton = document.querySelector('#delete')
const checkButton = document.querySelector('#check')
const feedBack = document.querySelectorAll('.fb')
// ------constants-------//
const coloredPegs = ['brown', 'gold', 'purple', 'green', 'red', 'blue']
const tries = [firstTry, secondTry, thirdTry, fourthTry, fifthTry, sixthTry, seventhTry, eightTry]

// ------ event listener -------//
pegButtons.forEach((button) => button.addEventListener('click', btnClickHandler))


/// -------functions------


function createCurtain() {
    for (let i = 0; i < 4; i++) {
        let curtain = document.createElement('div')
        curtain.setAttribute('class', 'curtain')
        curtain.style.position= 'absolute'
        curtain.style.height = '85%'
        curtain.style.width = '85%'
        curtain.style.borderRadius = '50%'
        curtain.style.backgroundColor = 'lightgrey'
        curtain.style.zIndex = '1'
        secretCodeRow[i].appendChild(curtain)
    }
}
function secretCodeGen() {
    for (let i = 0; i < 4; i++) {
        const rndmInt = Math.floor(Math.random() * coloredPegs.length)
        secretCode.push(coloredPegs[rndmInt])
        let peg = document.createElement('div')
        peg.style.height = '80%'
        peg.style.width = '80%'
        peg.style.borderRadius = '50%'
        peg.style.backgroundColor = coloredPegs[rndmInt]
        peg.style.position = 'relative'
        secretCodeRow[i].appendChild(peg)

    }
}
function removeCurtain(){
    const curtain = document.querySelectorAll('.curtain')
    curtain.forEach(function (el){
        el.remove()
    })
}
let secretCode = []

let guessCode = []
// -------Button Handler and init-------///
let i = 0;
let a = 0;
let k = 0;
function btnClickHandler(event) {
    
    if (a < tries.length) {
        if(i < tries[a].length) {
            if (tries[a][i].hasChildNodes() === false) {
                let peg = document.createElement('div')
                peg.style.height = '80%'
                peg.style.width = '80%'
                peg.style.borderRadius = '50%'
                peg.style.backgroundColor = event.target.id
                tries[a][i].appendChild(peg)
                guessCode.push(event.target.id)
                i++
            }  

        } else {
            a++
            i = 0
            if (guessCode.join() === secretCode.join()) {
                removeCurtain()
                console.log('You Win')
            } else {
                let notBlack = []
                if (k < 4) {
                    for (let j = 0; j < 4; j++) {
                        if (guessCode[j] === secretCode[j]) {
                            let peg = document.createElement('div')
                            peg.style.height = '60%'
                            peg.style.width = '70%'
                            peg.style.borderRadius = '50%'
                            peg.style.position = 'center'
                            peg.style.backgroundColor ='black'
                            feedBack[k].appendChild(peg)                                           
                        } else {
                            notBlack.push(secretCode[j])
                            console.log("this is notBlack = " + notBlack)                           
                        } 
                    }

                    for (let j = 0; j < 4; j++) {
                        for (let color of notBlack) {
                            if (color === guessCode[j]) {
                                console.log(color, guessCode[j])
                                let peg = document.createElement('div')
                                peg.style.height = '60%'
                                peg.style.width = '70%'
                                peg.style.borderRadius = '50%'
                                peg.style.position = 'center'
                                peg.style.backgroundColor ='white'
                                feedBack[k].appendChild(peg)
                                let idx = notBlack.indexOf(guessCode[j])
                                notBlack.splice(idx, 1) 
                            }

                        }
                    }

                k++
                }
            }
            guessCode =[]
        }    

    } 

}


function init() {
    secretCodeGen()
   //  createCurtain()
}

init()

function clear() {

}

function feedback () {

}