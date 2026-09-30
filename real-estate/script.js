const tabs=document.querySelectorAll(".search-tabs button");
const searchButton=document.querySelector("#searchBtn");
const locationInput=document.querySelector("#location");
const typeSelect=document.querySelector("#type");
tabs.forEach(tab=>tab.addEventListener("click",()=>{tabs.forEach(x=>x.classList.remove("active"));tab.classList.add("active")}));
document.querySelectorAll(".heart").forEach(button=>button.addEventListener("click",()=>{button.classList.toggle("saved");button.textContent=button.classList.contains("saved")?"♥":"♡"}));
searchButton.addEventListener("click",()=>{const location=locationInput.value.trim()||"your preferred area";const type=typeSelect.value==="Any property"?"properties":typeSelect.value.toLowerCase()+"s";alert(`Searching for ${type} in ${location}. Connect this form to your property search API to make it live.`)});
