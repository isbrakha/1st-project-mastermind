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
const arrowSect = document.querySelector('arrow-section')
const goldArrow = document.createElement('img')
goldArrow.src ='resources/images/arrow-gold.png'
goldArrow.style.height = '60px'
goldArrow.style.width = '100%'
goldArrow.style.alignSelf = 'center'
goldArrow.style.zIndex = '1'

// ------constants-------//
const coloredPegs = ['brown', 'gold', 'purple', 'green', 'red', 'blue']
const tries = [firstTry, secondTry, thirdTry, fourthTry, fifthTry, sixthTry, seventhTry, eightTry]

// ------ event listener -------//
pegButtons.forEach((button) => button.addEventListener('click', btnClickHandler))
checkButton.addEventListener('click', checkGuess)


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
        if(i < 4) {
            console.log(i)
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
k = 0
function checkGuess() {
    if (k >= 7 && guessCode.join() != secretCode.join()) {
        alert('You ran out of guesses, you lose!')
    } else if (i < 4) { 
        alert("Fill the row to proceed!")
    } else {   
        if (guessCode.join() === secretCode.join()) {
            removeCurtain()
            alert('You Win')
            // add code to re-initalize the game
            // add crown win
        } else {
            i = 0
            a++
            let notBlack = []
            let blackPegs = []       
            for (let j = 0; j < 4; j++) {
                if (guessCode[j] === secretCode[j]) {
                    let peg = document.createElement('div')
                    peg.style.height = '60%'
                    peg.style.width = '70%'
                    peg.style.borderRadius = '50%'
                    peg.style.position = 'center'
                    peg.style.backgroundColor ='black'
                    blackPegs.push(guessCode[j])
                    feedBack[k].appendChild(peg)                                           
                } else {
                    notBlack.push(secretCode[j])
                    console.log(notBlack)                          
                } 
            }

            for (let i = 0; i < blackPegs.length; i++) {
                for (color of notBlack) {    
                    console.log(color)
                    console.log(blackPegs)
                    console.log(notBlack)
                    if (blackPegs[i] === color) {
                    let idx = notBlack.indexOf(color)
                    console.log(idx)
                    notBlack.splice(idx, 1)
                    }
                }
            }

            for (let j = 0; j < 4; j++) {
                for (let color of notBlack) {
                    if (color === guessCode[j]) {
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

arrowSect.appendChild(goldArrow)
goldArrow.style.gridArea()