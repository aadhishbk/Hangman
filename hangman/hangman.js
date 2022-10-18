class Hangman{

    constructor(word,guess){
        this.word =  word.toLowerCase().split('')
        this.remainingGuesses = guess
        this.guessedLetters = []
        this.status = 'playing'
    }
    get Puzzle(){
        let puzzle = ''
        this.word.forEach((letter) =>{
            if(this.guessedLetters.includes(letter) || letter === ' '){
                puzzle += letter
            }else{
                puzzle += "*"
            }
        })
        return puzzle
    }
    makeGuess(letter){

        if(this.status !== 'playing'){
            return
        }
        letter = letter.toLowerCase()
        const isUnique = !this.guessedLetters.includes(letter)
        const isBadGuess = !this.word.includes(letter)
        if(isUnique && this.word.includes(letter))
        {
            this.guessedLetters.push(letter)
        }
        else if(isUnique && isBadGuess)
        {
            this.guessedLetters.push(letter)
            this.remainingGuesses--
        }
        this.updateStatus()
    }

    updateStatus(){
        if(this.remainingGuesses ===0){
            this.status = 'failed'
        }else if(!this.Puzzle.includes("*")){
            this.status = 'finished'
        }
        console.log(this.status)
        return this.status
    }
    get statusString(){
        if(this.status === 'failed')
        {
            const wordReveal = this.word.join('')
            return `Nice try! the word was ${wordReveal}`
        }
        else if(this.status === 'finished')
        {
            return `Great work! You guessed the word`
        }
        else
        {
            return `Guesses left : ${this.remainingGuesses}`
        }
    }
}



