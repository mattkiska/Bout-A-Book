console.log('working')

const button = document.querySelector('#searchButton')



async function getData(event){


    let bookSearch = document.querySelector("#searchBox").value.toLowerCase()
    let book = document.querySelector('#book')
   
fetch(`http://openlibrary.org/search.json?q=${bookSearch}`)
    .then(res => {
        return res.json()
    })
    .then(res => {
        book = document.querySelector('#book')
        book.style.opacity = 100

            document.getElementById("information").innerHTML="<h2>"+res.docs[0].title+"</h2>"+"<br><img src='http://covers.openlibrary.org/b/isbn/"+res.docs[0].isbn[0]+"-M.jpg'><br>";
        
            document.getElementById("author").innerHTML="<h3>" + 'Author: ' +res.docs[0].author_name[0]
        
            document.getElementById("moreinfo").innerHTML="<h3>" + 'Published by: ' +res.docs[0].publisher[0]
        
            document.getElementById("addlinfo").innerHTML="<h3>" + 'Genre: ' +res.docs[0].subject_facet[0]
        
            document.getElementById("firstYear").innerHTML="<h3>" + 'Published in ' +res.docs[0].first_publish_year
        
            document.getElementById("pageCount").innerHTML="<h3>"+res.docs[0].number_of_pages_median + ' pages'
        
    })


 
}

button.addEventListener('click', getData)