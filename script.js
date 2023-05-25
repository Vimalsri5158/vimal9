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

    //search filter function
document.getElementById("inp").addEventListener('input',function(){
let a=document.querySelectorAll('li');

    for(let i=0; i<a.length; i++){
        let val=document.getElementById('inp').Value;

        if(a[i].innerHTML.toLowerCase().indexOf(val) !=-1){
        a[i].style.display='block';
        }
        else{
        a[i].style.display='none';
        }
    }
})
});

