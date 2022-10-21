const getRandomUser = () => {
    fetch("http://www.omdbapi.com/?apikey=98e3fb1f&t=titanic") //returns a promise
        .then(res => {
            return res.json()
            // return response.json() //return a promise
        })
        .then(response => {console.log(response)})
}

getRandomUser()

// // async/await 
// const getRandomUser2 = async () => {
//     let respone = await fetch("http://www.omdbapi.com/?apikey=98e3fb1f&t=titanic")
//     let json = await respone.json()
//     console.log(json)
// }

// getRandomUser2()