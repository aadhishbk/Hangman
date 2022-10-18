//using async-await
const getPuzzle = async (wordCount) =>{
    const response = await fetch( `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
        if(response.status ===200){
            const data = await response.json()
            return data.puzzle
        }
        else 
            throw new Error('error dude')
    }

//using async - await
/* const getCountry = async (countryCode) =>{

    const response  = await fetch('/api.countrylayer.com/v2/all?access_key=7c4d7cdec544e1fa0c91fdc8656db26e')
    if(response.status === 200) {
        const data =  await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    }
    else {
        throw new Error('unable to fetch country')
    }
}
 */
const getLocation = async ()=> {
    const response = await fetch('https://ipinfo.io/json?token=0abec82772a255')

        if(response.status === 200) {
            const data = response.json()
            return data
        }
        else {
            throw new Error('Unable to find the location')
        }
    
}

//using promise
/* const getPuzzle = (wordCount) =>{
    return fetch( `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response)=> {
        if(response.status ===200){
            return response.json()
        }
        else 
            throw new Error('error dude')
    }).then((data)=>{
        return data.puzzle
    })
   }
    */

/* const getPuzzleOld = (wordCount) =>new Promise((resolve, reject)=>{

 const request = new XMLHttpRequest()

 request.open('GET', `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
 request.send()

request.addEventListener('readystatechange', (e) => {
     if (e.target.readyState === 4 && e.target.status === 200 ) {
         const data = JSON.parse(e.target.responseText)
         resolve(data.puzzle)
     }else if(e.target.readyState === 4){
        reject('an error occured doddd')
    }
 }) 
})
 */



//using promise 
/* const getCountry = (countryCode) =>{
    return fetch('http://api.countrylayer.com/v2/all?access_key=7c4d7cdec544e1fa0c91fdc8656db26e').then((response)=>{
        if(response.status === 200) return response.json()
        else throw new Error('errss dud') 
    }).then((data)=>{
        return data.find((country) => country.alpha2Code === countryCode)
    })
} */