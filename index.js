//Folositi oricare api de pe ('https://jsonplaceholder.typicode.com/users')
//pentru a lua careva date si a le afisa pe pagina ,
//folosind async,await si try catch.

//fetch('https://jsonplaceholder.typicode.com/users') 

const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms))
}

const url = "https://jsonplaceholder.typicode.com/users"

function fetchTodos() {
    console.log('Fetch todo started...')
    return delay(3000)
    .then(() => fetch(url))
    .then(response => response.json())
}


fetchTodos()
.then(data => {
    console.log('Data:', data)
})
.catch(e => console.error(e))

async function fetchAsyncTodos() {
    console.log('Fetch todo started...')
    await delay(3000)
    const response = await fetch(url) 
    const data = await response.json()
    console.log('Data:', data)
}
fetchAsyncTodos()

async function fetchAsyncTodos() {
    console.log('Fetch todo started...')
    try {
        await delay(3000)
        const response = await fetch(url)
        const data = await response.json()
        console.log('Data:',data)
        
    } catch (e) {console.error(e)    
    } 
}  