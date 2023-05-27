let h2=document.createElement("h2");
h2.innerHTML="ICE AND FIRE BOOK";
document.body.append(h2);

let input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","inp");
input.setAttribute("placeholder","search");
document.body.append(input);

let container=document.createElement("div");
container.className="container";
let row=document.createElement("div");
row.className="row";
container.append(row);

async function book(){
    try{
    let res=await fetch("https://www.anapioficeandfire.com/api/books");
    let data=await res.json();
    return data;
    }catch(error){
    console.log(error)
    }
}

book().then(data => {
    for(let i=0; i<data.length; i++){
    row.innerHTML+=
    `<div class="col-md-4">
        <div class="card-box">
            <ul type="none">
                <div class="card border-primary mb-3" id="a1">
                    <li class="card-header"><span>BooksName:</span><hr><b>${data[i].name}</b></li>
                    <li class="card-title" id="h1"><span>Author:</span><br>${data[i].authors}</li>
                    <li class="card-text" id="h1"><span>Countries:</span><br><b>${data[i].country}</b></li>
                    <li class="card-body text-primary" id="h1"><span>ISBN:</span><br>${data[i].isbn}</li>
                    <li class="card-text" id="h1"><span>RELEASED:</span><br>${data[i].released}</li>
                    <li class="card-text" id="h1"><span>NO.OF.PAGES:</span><br>${data[i].numberOfPages}</li>
                </div>
            </ul>
        </div>
    </div>`;
}
document.body.append(container);



const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    // Add Bootstrap shadow class on hover
    card.addEventListener("mouseenter", () => {
        card.classList.add("shadow-lg"); 
    });
// Remove Bootstrap shadow class when not hovering
    card.addEventListener("mouseleave", () => {
        card.classList.remove("shadow-lg"); 
    });
});

// Filter books based on search input
function filterBooks(searchTerm) {
    searchTerm = searchTerm.toLowerCase();
    filteredData = data.filter((book) => {
      return (
        book.name.toLowerCase().includes(searchTerm) ||
        book.authors.toLowerCase().includes(searchTerm) ||
        book.country.toLowerCase().includes(searchTerm) ||
        book.isbn.toLowerCase().includes(searchTerm) ||
        book.released.toLowerCase().includes(searchTerm) ||
        book.numberOfPages.toString().includes(searchTerm)
      );
    });

    displayBooks(filteredData);
  }

  // Event listener for search input
  input.addEventListener("input", (event) => {
    const searchValue = event.target.value;
    filterBooks(searchValue);
  });

  displayBooks(filteredData);
});



