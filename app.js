// -----DOM ELEMENTS----//

const coloredPegs = ['brown', 'gold', 'purple', 'green', 'red', 'blue']

const secretCodeEl = document.querySelectorAll('#solution')



function secretCode() {
    let code = []
    for (let i = 0; i < 4; i++) {
        const rndmInt = Math.floor(Math.random() * coloredPegs.length)
        code.push(coloredPegs[rndmInt])
        console.log(code)
    }
}


secretCode()


// console.log(code)
// let peg = document.createElement('div')
// peg.style.height = '80%'
// peg.style.width = '80%'
// peg.style.borderRadius = '50%'
// peg.style.backgroundColor = coloredPegs[rndmInt]
// secretCodeEl[i].appendChild(peg)

