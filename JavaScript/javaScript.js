const url= "https://openapi.programming-hero.com/api/ai/tools";

const card= document.getElementById('card');
var imgElement=document.getElementById('img');

let getPokeData= ()=>{
    let id = Math.floor(Math.random() * 11) + 1;
     fetch(url)
    .then(res => res.json())
    .then(data=>{
        console.log(data.data.tools[id].image);
        const imgSrc= data.data.tools[id].image;
        // Create a new img element


// Set attributes for the img element
    imgElement.src = imgSrc;
    imgElement.alt = "New Image";
    imgElement.width = 720; // Set width if needed
    imgElement.height = 400; // Set height if needed

    // Get a reference to the parent element where you want to append the img element
    var parentElement = document.getElementById("img"); // Replace with the actual ID of the parent container

// Append the img element to the parent element
    parentElement.appendChild(imgElement);
        
    });

    

};
getPokeData()



const url0= "https://openapi.programming-hero.com/api/ai/tool/01";

const card0= document.getElementById('card0');
const card1= document.getElementById('card1');
const card2= document.getElementById('card2');
const card3= document.getElementById('card3');
const card4= document.getElementById('card4');
const card5= document.getElementById('card5');


var imgElement0=document.getElementById('img0');
var imgElement1=document.getElementById('img1');
var imgElement2=document.getElementById('img2');
var imgElement3=document.getElementById('img3');
var imgElement4=document.getElementById('img4');
var imgElement5=document.getElementById('img5');

let getData= ()=>{
    let id = Math.floor(Math.random() * 11) + 1;
    
     fetch(url)
    .then(res => res.json())
    .then(data=>{
        const imgSrc= data.data.tools[id].image;
        const imgSrc1= data.data.tools[Math.floor(Math.random() * 11) + 1].image;
        const imgSrc2= data.data.tools[Math.floor(Math.random() * 11) + 1].image;
        const imgSrc3= data.data.tools[Math.floor(Math.random() * 11) + 1].image;
        const imgSrc4= data.data.tools[Math.floor(Math.random() * 11) + 1].image;
        const imgSrc5= data.data.tools[Math.floor(Math.random() * 11) + 1].image;

        // Create a new img element


// Set attributes for the img element
    imgElement0.src = imgSrc;
    imgElement0.alt = "New Image";
    imgElement0.width = 720; // Set width if needed
    imgElement0.height = 400; // Set height if needed


    imgElement1.src = imgSrc1;
    imgElement1.alt = "New Image";
    imgElement1.width = 720; // Set width if needed
    imgElement1.height = 400;

    imgElement2.src = imgSrc2;
    imgElement2.alt = "New Image";
    imgElement2.width = 720; // Set width if needed
    imgElement2.height = 400;
    

    imgElement3.src = imgSrc3;
    imgElement3.alt = "New Image";
    imgElement3.width = 720; // Set width if needed
    imgElement3.height = 400;

    imgElement4.src = imgSrc4;
    imgElement4.alt = "New Image";
    imgElement4.width = 720; // Set width if needed
    imgElement4.height = 400;

    imgElement5.src = imgSrc5;
    imgElement5.alt = "New Image";
    imgElement5.width = 720; // Set width if needed
    imgElement5.height = 400;
    // Get a reference to the parent element where you want to append the img element
    var parentElement0 = document.getElementById("img0");
    var parentElement1 = document.getElementById("img1"); // Replace with the actual ID of the parent container
    var parentElement2 = document.getElementById("img2"); // Replace with the actual ID of the parent container
    var parentElement3 = document.getElementById("img3"); // Replace with the actual ID of the parent container
    var parentElement4 = document.getElementById("img4"); // Replace with the actual ID of the parent container
    var parentElement5 = document.getElementById("img5"); // Replace with the actual ID of the parent container
     // Replace with the actual ID of the parent container

// Append the img element to the parent element
    parentElement0.appendChild(imgElement0);
    parentElement1.appendChild(imgElement1);
    parentElement2.appendChild(imgElement2);
    parentElement3.appendChild(imgElement3);
    parentElement4.appendChild(imgElement4);
    parentElement5.appendChild(imgElement5);
        
    });

    

};
console.log(getData());


// Get the modal element
const modal = document.getElementById('myModal');

// Get the button that opens the modal
const openModalBtn = document.getElementById('openModalBtn');
const openModalBtn1 = document.getElementById('openModalBtn1');
const openModalBtn2 = document.getElementById('openModalBtn2');
const openModalBtn3 = document.getElementById('openModalBtn3');
const openModalBtn4 = document.getElementById('openModalBtn4');
const openModalBtn5 = document.getElementById('openModalBtn5');

// Get the close button element
const closeButton = document.getElementsByClassName('close')[0];

// Function to open the modal
function openModal() {
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

// Event listener to open the modal
openModalBtn.addEventListener('click', openModal);
openModalBtn1.addEventListener('click', openModal);
openModalBtn2.addEventListener('click', openModal);
openModalBtn3.addEventListener('click', openModal);
openModalBtn4.addEventListener('click', openModal);
openModalBtn5.addEventListener('click', openModal);
// Event listener to close the modal
closeButton.addEventListener('click', closeModal);

// Event listener to close the modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});


 
 





