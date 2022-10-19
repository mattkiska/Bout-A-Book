console.log('working')

const button = document.querySelector('#searchButton')



async function getData(event){


    let bookSearch = document.querySelector("#searchBox").value.toLowerCase()

fetch(`http://openlibrary.org/search.json?q=${bookSearch}`)
    .then(res => {
        return res.json()
    })
    .then(res => {
        let book = document.querySelector('#book')
        book.style.opacity = 100

        for(var i = 0; i < 1; i++){
            document.getElementById("information").innerHTML+="<h2>"+res.docs[i].title+"</h2>"+"<br><img src='http://covers.openlibrary.org/b/isbn/"+res.docs[i].isbn[0]+"-M.jpg'><br>";
        }
        for(var i = 0; i < 1; i++){
            document.getElementById("author").innerHTML+="<h3>" + 'Author: ' +res.docs[i].author_name[0]
        }
        for(var i = 0; i < 1; i++){
            document.getElementById("moreinfo").innerHTML+="<h3>" + 'Published by: ' +res.docs[i].publisher[0]
        }
        for(var i = 0; i < 1; i++){
            document.getElementById("addlinfo").innerHTML+="<h3>" + 'Genre: ' +res.docs[i].subject_facet[0]
        }
        for(var i = 0; i < 1; i++){
            document.getElementById("firstYear").innerHTML+="<h3>" + 'Published in ' +res.docs[i].first_publish_year
        }
        for(var i = 0; i < 1; i++){
            document.getElementById("pageCount").innerHTML+="<h3>"+res.docs[i].number_of_pages_median + ' pages'
        }
    })


 
}

button.addEventListener('click', getData)