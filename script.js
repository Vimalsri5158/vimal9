let h2=document.createElement("h2");
h2.innerHTML="ICE AND FIRE BOOK";
h2.style.color="maroon";
h2.style.padding="5rem";
document.body.append(h2)


let container = document.createElement("div");
container.className = "container";
let row = document.createElement("div");
row.className = "row";
container.append(row);

async function foo() {
    try {
        let res = await fetch("https://www.anapioficeandfire.com/api/books");
        let data = await res.json();
        return data;
    } catch (error) {
        console.log("error");
    }
}

foo().then(data => {
    for (let i = 0; i < data.length; i++) {
        row.innerHTML += 
        `<div class="col-md-4">
            <div class="card-box">
                <div class="card border-primary mb-3" id="a1">
                    <div class="card-header"><span>BooksName:</span><hr><b>${data[i].name}</b></div>
                    <h5 class="card-title" id="h1"><span>Author:</span><br>${data[i].authors}</h5>
                    <p class="card-text" id="h1"><span>Countries:</span><br><b>${data[i].country}</b></p>
                    <div class="card-body text-primary" id="h1"><span>ISBN:</span><br>${data[i].isbn}
                    <p class="card-text" id="h1"><span>RELEASED:</span><br>${data[i].released}</p>
                    <p class="card-text" id="h1"><span>NO.OF.PAGES:</span><br>${data[i].numberOfPages}</p>
                    </div>
                </div>
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
    
    
    let currentPage = 1;
    const itemsPerPage = 6;
    
    function displayBooks(data) {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const booksToDisplay = data.slice(startIndex, endIndex);
    
        row.innerHTML = "";
        for (let i = 0; i < booksToDisplay.length; i++) {
            row.innerHTML += `<div class="col-md-4">...</div>`;
        }
    }
    
    function createPaginationButtons(totalItems) {
        const totalPages = Math.ceil(totalItems / itemsPerPage);
    
        const paginationContainer = document.createElement("div");
        paginationContainer.className = "pagination-container";
    
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement("button");
            pageButton.innerText = i;
            if (i === currentPage) {
                pageButton.classList.add("active");
            }
            pageButton.addEventListener("click", () => {
                currentPage = i;
                displayBooks(data);
                updatePaginationButtons();
            });
            paginationContainer.appendChild(pageButton);
        }
    
        container.appendChild(paginationContainer);
    }
    
    function updatePaginationButtons() {
        const buttons = document.querySelectorAll(".pagination-container button");
        buttons.forEach(button => {
            const pageNumber = parseInt(button.innerText);
            if (pageNumber === currentPage) {
                button.classList.add("active");
            } else {
                button.classList.remove("active");
            }
        });
    }
    
    foo().then(data => {
        displayBooks(data);
        createPaginationButtons(data.length);
        updatePaginationButtons();
        // Rest of the code...
    });

    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Search...";
    container.insertBefore(searchInput, row);
    
    function filterBooks(query) {
        const filteredData = data.filter(book => {
            const bookName = book.name.toLowerCase();
            const authorName = book.authors.toLowerCase();
            return bookName.includes(query) || authorName.includes(query);
        });
        currentPage = 1;
        displayBooks(filteredData);
        createPaginationButtons(filteredData.length);
        updatePaginationButtons();
    }
    
    searchInput.addEventListener("input", event => {
        const searchTerm = event.target.value.toLowerCase();
        filterBooks(searchTerm);
    });
});   


