// let h2 = document.createElement("h2");
// h2.innerHTML = "ICE AND FIRE BOOK";
// h2.style.color = "maroon";
// h2.style.padding = "5rem";
// document.body.append(h2);

// let container = document.createElement("div");
// container.className = "container";
// let row = document.createElement("div");
// row.className = "row";
// container.append(row);

// let searchInput = document.createElement("input");
// searchInput.type = "text";
// searchInput.placeholder = "Search...";
// document.body.append(searchInput);

// let currentPage = 1;
// let booksPerPage = 9;

// async function getBooks() {
//   try {
//     let res = await fetch("https://www.anapioficeandfire.com/api/books");
//     let data = await res.json();
//     return data;
//   } catch (error) {
//     console.log("error");
//   }
// }

// function displayBooks(data, startIndex, endIndex) {
//   row.innerHTML = "";

//   for (let i = startIndex; i < endIndex; i++) {
//     row.innerHTML += `
//         <div class="col-md-4">
//             <div class="card-box">
//                 <div class="card border-primary mb-3">
//                     <div class="card-header"><span>BooksName:</span><hr><b>${data[i].name}</b></div>
//                     <h5 class="card-title"><span>Author:</span><br>${data[i].authors}</h5>
//                     <p class="card-text"><span>Countries:</span><br><b>${data[i].country}</b></p>
//                     <div class="card-body text-primary"><span>ISBN:</span><br>${data[i].isbn}</div>
//                     <p class="card-text"><span>RELEASED:</span><br>${data[i].released}</p>
//                     <p class="card-text"><span>NO.OF.PAGES:</span><br>${data[i].numberOfPages}</p>
//                 </div>
//             </div>
//         </div>`;
//   }

//   const cards = document.querySelectorAll(".card");
//   cards.forEach(card => {
//     // Add Bootstrap shadow class on hover
//     card.addEventListener("mouseenter", () => {
//       card.classList.add("shadow-lg");
//     });
//     // Remove Bootstrap shadow class when not hovering
//     card.addEventListener("mouseleave", () => {
//       card.classList.remove("shadow-lg");
//     });
//   });
// }



// function performSearch(searchTerm) {
//   const filteredBooks = data.filter(book => {
//     return (
//       book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       book.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       book.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       book.isbn.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       book.released.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       book.numberOfPages.toString().includes(searchTerm)
//     );
//   });

//   const startIndex = (currentPage - 1) * booksPerPage;
//   const endIndex = startIndex + booksPerPage;

//   displayBooks(filteredBooks, startIndex, endIndex);

//   const highlights = document.querySelectorAll(".highlight");
//   highlights.forEach(element => {
//     element.style.backgroundColor = "yellow";
//   });
// }

// searchInput.addEventListener("input", () => {
//   const searchTerm = searchInput.value;
//   performSearch(searchTerm);
// });

// getBooks().then(data => {
//   let totalPages = Math.ceil(data.length / booksPerPage);

//   displayBooks(data, 0, booksPerPage);

//   const pagination = document.createElement("div");
//   pagination.className = "pagination";
//   document.body.append(pagination);

//   for (let i = 1; i <= totalPages; i++) {
//     const pageLink = document.createElement("a");
//     pageLink.href = "#";
//     pageLink.innerText = i;

//     if (i === currentPage) {
//       pageLink.classList.add("active");
//     }

//     pageLink.addEventListener("click", () => {
//       currentPage = i;
//       const startIndex = (currentPage - 1) * booksPerPage;
//       const endIndex = startIndex + booksPerPage;
//       displayBooks(data, startIndex, endIndex);

//       const activePage = document.querySelector(".pagination a.active");
//       activePage.classList.remove("active");
//       pageLink.classList.add("active");
//     });

//     pagination.append(pageLink);
//   }
// });

// document.head.appendChild(style);

let h2 = document.createElement("h2");
h2.innerHTML = "ICE AND FIRE BOOK";
h2.style.color = "maroon";
h2.style.padding = "5rem";
document.body.append(h2);

let container = document.createElement("div");
container.className = "container";
let row = document.createElement("div");
row.className = "row";
container.append(row);

let searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.placeholder = "Search...";
document.body.append(searchInput);

let currentPage = 1;
let booksPerPage = 9;
let filteredData = [];

async function fetchBooks() {
  try {
    let res = await fetch("https://www.anapioficeandfire.com/api/books");
    let data = await res.json();
    return data;
  } catch (error) {
    console.log("error");
  }
}

function displayBooks(data, startIndex, endIndex) {
  row.innerHTML = "";

  for (let i = startIndex; i < endIndex; i++) {
    row.innerHTML += `
        <div class="col-md-4">
            <div class="card-box">
                <div class="card border-primary mb-3">
                    <div class="card-header"><span>BooksName:</span><hr><b>${data[i].name}</b></div>
                    <h5 class="card-title"><span>Author:</span><br>${data[i].authors}</h5>
                    <p class="card-text"><span>Countries:</span><br><b>${data[i].country}</b></p>
                    <div class="card-body text-primary"><span>ISBN:</span><br>${data[i].isbn}</div>
                    <p class="card-text"><span>RELEASED:</span><br>${data[i].released}</p>
                    <p class="card-text"><span>NO.OF.PAGES:</span><br>${data[i].numberOfPages}</p>
                </div>
            </div>
        </div>`;
  }

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
}

function performSearch(searchTerm) {
  const filteredBooks = filteredData.filter(book => {
    return (
      book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.isbn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.released.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.numberOfPages.toString().includes(searchTerm)
    );
  });

  const startIndex = (currentPage - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;

  displayBooks(filteredBooks, startIndex, endIndex);
}

function updatePagination(totalBooks) {
  const totalPages = Math.ceil(totalBooks / booksPerPage);

  const pagination = document.createElement("div");
  pagination.className = "pagination";
  document.body.append(pagination);

  for (let i = 1; i <= totalPages; i++) {
    const pageLink = document.createElement("a");
    pageLink.href = "#";
    pageLink.innerText = i;

    if (i === currentPage) {
      pageLink.classList.add("active");
    }

    pageLink.addEventListener("click", () => {
      currentPage = i;
      const startIndex = (currentPage - 1) * booksPerPage;
      const endIndex = startIndex + booksPerPage;

      if (searchInput.value !== "") {
        performSearch(searchInput.value);
      } else {
        displayBooks(filteredData, startIndex, endIndex);
      }

      const activePage = document.querySelector(".pagination a.active");
      activePage.classList.remove("active");
      pageLink.classList.add("active");
    });

    pagination.append(pageLink);
  }
}

fetchBooks().then(data => {
  filteredData = data;
  const totalBooks = data.length;
  const startIndex = (currentPage - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;

  displayBooks(data, startIndex, endIndex);
  updatePagination(totalBooks);
});

searchInput.addEventListener("input", () => {
  currentPage = 1;
  performSearch(searchInput.value);
});
