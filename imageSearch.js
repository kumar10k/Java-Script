const searchImage=document.querySelector('#searchImage');
const searchImagebox=document.querySelector('#searchImagebox');
const searchResult=document.querySelector('#searchResult');
const showmorebtn=document.querySelector('#show-more-btn');
const acceskey="AKJQ7SdZ_OuyMtRZ5mdJWbjuRUpk6wDu2cVLdsHqbgc";
let keyboard=''
let page=1;

async function SearchImage(){
    keyboard=searchImagebox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyboard}&client_id=${acceskey}&per_page=12`
    let response=await fetch(url);
    let data=await response.json();
    if(page===1){
        searchResult.innerHTML=""
    }
    let results=data.results;
    results.map((result)=>{
        let image=document.createElement("img");
        image.src=result.urls.small;
        let linkimage=document.createElement('a');
        linkimage.href=result.links.html;
        linkimage.appendChild(image)
        linkimage.target="_blank"
        searchResult.appendChild(linkimage)
    })
    showmorebtn.style.display="block"

}
searchImage.addEventListener('submit',(e)=>{
    e.preventDefault();
    page=1;

    SearchImage();
})
showmorebtn.addEventListener('click',()=>{
    page++;
SearchImage()
})