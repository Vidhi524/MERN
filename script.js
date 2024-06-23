const button=document.getElementById("button");
const input=document.getElementById("input");
const cardContainer=document.getElementById('card-container');
let item='';
button.addEventListener('click',()=>{
    item=input.value;
    console.log(item);
    callApi();
    input.value='';
    cardContainer.innerHTML='';
})


function renderUI(recipes){
    for(let i=0;i<recipes.length;i++){
        const card=document.createElement('div');
        const title=document.createElement('h1');
        const image=document.createElement('img');
        
        image.src=recipes[i].image;
        title.innerHTML=recipes[i].name;
        card.setAttribute('class','card');
        card.appendChild(title);
        card.appendChild(image);
        cardContainer.appendChild(card);
}
}

function callApi(){
    fetch(`https://dummyjson.com/recipes/search?q=${item}`)
    .then(res => res.json())
    .then((data)=>{
        console.log(data.recipes);
        renderUI(data.recipes)});
}