console.log('working')

let button = document.querySelector('#searchButton')



async function getData(event){

    event.preventDefault()


    let bookSearch = document.querySelector("#searchBox").value.toLowerCase()

fetch(`https://openlibrary.org/search.json?q=${bookSearch}`)
    .then(res => {
        return res.json()
    })
    .then(res => {
        console.log('success', res.name)
        let bookAuthor = document.querySelector('#author')
        bookAuthor.innerText = res.editions
    })



}

button.addEventListener('click', getData)