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
const arrowSect = document.querySelector('.arrow-section')
const tableSection = document.querySelector('.table-section')
const feedBackCells = document.querySelectorAll('.fb')
const titleEl = document.querySelector('#title')
const crownCountEl = document.querySelector('#crown-wins')
const closeHelpBtn = document.querySelector('#help button')
const helpBox = document.querySelector('#help')
const helpBtn = document.querySelector('#helpBtn')


// gold arrow creation and styles
const goldArrow = document.createElement('img')
const goldArrowDiv = document.createElement('div')
goldArrowDiv.style.height = '0px'
goldArrow.src ='resources/images/arrow-gold.png'
goldArrow.style.height = '60px'
goldArrow.style.width = '100%'
goldArrow.style.alignSelf = 'center'
goldArrow.style.border = '4px solid transparent'


// play again button creation and styles
const playAgainBtn = document.createElement('button')
playAgainBtn.style.gridArea ='3/2'
playAgainBtn.style.justifySelf = 'center'
playAgainBtn.style.width = '30%'
playAgainBtn.style.height = '70%'
playAgainBtn.innerText = 'PLAY AGAIN!'
playAgainBtn.style.font = '20px barabara'
playAgainBtn.style.backgroundColor = 'purple'
playAgainBtn.style.color = 'orange'
// ------constants-------//
const coloredPegs = ['brown', 'gold', 'purple', 'green', 'red', 'blue']
const tries = [firstTry, secondTry, thirdTry, fourthTry, fifthTry, sixthTry, seventhTry, eightTry]

// ------ event listener -------//
pegButtons.forEach((button) => button.addEventListener('click', btnClickHandler))
checkButton.addEventListener('click', checkGuess)
playAgainBtn.addEventListener('click', playAgain)
clearButton.addEventListener('click', clearRow)
closeHelpBtn.addEventListener('click', closeHelp)
helpBtn.addEventListener('click', openHelp)

// ------- variables ---------//
let i = 0;
let a = 0;
let k = 0;
let crownCount = 0


/// -------functions------//

function playAgain () {
    tries.forEach(function(tryRow) {
        tryRow.forEach(function (unit) {
            unit.innerHTML = null
        })
    })
    secretCodeRow.forEach(function (unit) {
        unit.innerHTML = null
    })

    feedBackCells.forEach(function (unit) {
        unit.innerHTML = null
    })

    i = 0;
    a = 0;
    k = 0;
    guessCode = []
    secretCode = []
    secretCodeGen()
    goldArrowDiv.style.gridArea = "1/1"
    checkButton.disabled = false


}

function createCurtain() {
    for (let i = 0; i < 4; i++) {
        let curtain = document.createElement('div')
        curtain.setAttribute('class', 'curtain')
        curtain.style.position= 'absolute'
        curtain.style.height = '100%'
        curtain.style.width = '100%'
        curtain.style.backgroundColor = 'black'
        curtain.style.zIndex = '1'
        secretCodeRow[i].appendChild(curtain)
    }
}
function secretCodeGen() {
    for (let i = 0; i < 4; i++) {
        let rndmInt
        do {
           rndmInt = Math.floor(Math.random() * coloredPegs.length)
        } while (secretCode.includes(coloredPegs[rndmInt]))
        secretCode.push(coloredPegs[rndmInt])
        let peg = document.createElement('div')
        peg.style.height = '80%'
        peg.style.width = '80%'
        peg.style.borderRadius = '50%'
        peg.style.backgroundColor = coloredPegs[rndmInt]
        peg.style.position = 'relative'
        secretCodeRow[i].appendChild(peg)
        titleEl.innerText = "MASTERMIND"
        titleEl.style.color = "revert"
        titleEl.style.animation = 'revert'
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


function btnClickHandler(event) {
    console.log('clicked')
    titleEl.innerText = "MASTERMIND"
    titleEl.style.color = "revert"
    titleEl.style.animation = 'revert'
    if (a < tries.length) {
        if(i < 4) {
            if (tries[a][i].hasChildNodes() === false) {
                if (guessCode.includes(event.target.id)){
                    titleEl.innerText = "DON'T REPEAT COLORS!"
                    titleEl.style.color = "red"
                    titleEl.style.animation = 'cantBlink 1s linear infinite'
                    return
                } 
                let peg = document.createElement('div')
                peg.style.height = '80%'
                peg.style.width = '80%'
                peg.style.borderRadius = '50%'
                peg.style.backgroundColor = event.target.id               
                tries[a][i].appendChild(peg)
                i++
                guessCode.push(event.target.id)
                
            }  
        } else {
            titleEl.innerText = "CHECK YOUR GUESS!"
            titleEl.style.color = "cyan"
            titleEl.style.animation = 'blinker 1s linear infinite'
        }
    }  

} 

function init() {
    secretCodeGen()
    createCurtain()
}

init()

k = 0
goldArrowDiv.style.gridArea = "1/1"
arrowSect.appendChild(goldArrowDiv)
goldArrowDiv.appendChild(goldArrow)

function checkGuess() {
    titleEl.innerText = "MASTERMIND"
    titleEl.style.color = "revert"
    titleEl.style.animation = 'revert'
    if (k >= 7 && guessCode.join() != secretCode.join()) {
        titleEl.innerText = 'YOU LOSE!'
        titleEl.style.color = "red"
        titleEl.style.animation = 'loseBlink 1s linear infinite'
        crownCount = 0
        crownCountEl.innerText = crownCount
        tableSection.appendChild(playAgainBtn)
        
    } else if (i < 4) { 
        titleEl.innerText = "FILL ROW FIRST!"
        titleEl.style.color = "cyan"
        titleEl.style.animation = 'blinker 1s linear infinite'
    } else if (k < 7){   
        if (guessCode.join() === secretCode.join()) {
            removeCurtain()
            titleEl.innerText = "YOU WIN!!!"
            titleEl.style.color = "orange"
            titleEl.style.animation = 'winBlink 1s linear infinite'
            tableSection.appendChild(playAgainBtn)
            crownCount++
            crownCountEl.innerText = crownCount
            checkButton.disabled = true
        } else {
            i = 0
            a++
            goldArrowDiv.style.gridArea = a + 1 + "/ 1"
            
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
                } 
            }

            for (let i = 0; i < blackPegs.length; i++) {
                for (color of notBlack) {  
                    if (blackPegs[i] === color) {
                    let idx = notBlack.indexOf(color)
                    notBlack.splice(idx, 1)
                    console.log("notBlack array = " + notBlack)
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
                        let idx = notBlack.indexOf(guessCode[j])
                        notBlack.splice(idx, 1)
                        feedBack[k].appendChild(peg)
                        
                    }

                }
            }
            console.log(guessCode)
            k++
            guessCode =[]   
        } 
    }
    
}


function clearRow () {
    tries[a].forEach((unit) => unit.innerHTML = '')
    guessCode = []
    i = 0
}

function showHelp() {
    helpBox.style.visibility = 'visible'
}

function closeHelp() {
    helpBox.style.visibility = 'hidden'
}

function openHelp() {
    helpBox.style.visibility = 'visible'
}