let game

const puzzleEle = document.querySelector('#puzzle')
const guessEle = document.querySelector('#status')

window.addEventListener('keypress',  (e) =>{
    game.makeGuess(e.key)
    render()
})

const render = ()=>{
    puzzleEle.innerHTML = ''
    guessEle.textContent = game.statusString
    game.Puzzle.split('').forEach(element => {
        const span = document.createElement('span')
        span.textContent = element
        puzzleEle.appendChild(span)
    });
}

const startGame = async () =>{
    game = new Hangman( await getPuzzle(2), 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()



/* getPuzzle(1).then((puzzle)=>{
    console.log(puzzle)
}).catch((e) =>{
    console.log(e)
})

 */

/* getLocation().then((location)=>{
    console.log(`you are living in ${location.city} , ${location.region}`)
}).catch((e)=>{
    console.log('unable to fetch location')
})

getCountry('MX').then((country)=>{
    console.log(country.name)
}).catch((e) =>{
    console.log(e)
})
 
 */


//HTTP request

/* const getRequest = async (url) => {
    let data = await fetch(url, {
        mode: "cors",
        method: "GET"
    })
    let result = await data.json()
    return result
}
getRequest('http://puzzle.mead.io/puzzle')
    .then((e) => {
        console.log(e)
    }) */

