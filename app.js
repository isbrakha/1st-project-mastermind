// -----DOM ELEMENTS----//
const pegButtons = document.querySelectorAll('.button')
// const brownPeg = document.querySelector('#red')
// const yellowPeg = document.querySelector('#yellow')
// const purplePeg = document.querySelector('#purple')
// const greenPeg = document.querySelector('#green')
// const redPeg = document.querySelector('#red')
// const bluePeg = document.querySelector('#blue')
const secretCodeRow = document.querySelectorAll('.solution')
// ------constants-------//
const coloredPegs = ['brown', 'gold', 'purple', 'green', 'red', 'blue']

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
// -------Button Handler and init-------///

function btnClickHandler(event) {
    
}



