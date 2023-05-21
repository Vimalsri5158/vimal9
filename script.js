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
        row.innerHTML += `<div class="col-md-4">
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
    // Add media query styles
    const style = document.createElement("style");
    style.innerHTML = `
        @media (max-width: 767px) {
            .col-md-4 {
                flex: 0 0 100%;
                max-width: 100%;
            }
        }
    `;
    document.head.appendChild(style);
   
});

