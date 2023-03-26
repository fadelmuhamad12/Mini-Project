// Adding event Handlers & finding element
document.getElementById("buttonSubmit").onclick = () => {
  alert("Terima Kasih Telah Memberikan FeedBack");
};

document.getElementById("buttonSubs").onclick = () => {
  alert(
    "Terima Kasih telah Melakukan Pengisian Form Premium+ Kami akan mengirimkan email segera"
  );
};

const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");
const fullNav = document.getElementById("fullNav");
const profil = document.getElementById("profil");



toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon-fill");
  if (this.classList.toggle("bi-brightness-high-fill")) {
    // Changing HTML ELEMENTS
    body.style.background = "white";
    body.style.color = "black";
    body.style.transition = "2s";
    profil.style.color = "black"
    fullNav.style.background ="white";
    
    fullNav.style.top = "0px";
    fullNav.style.color = "black";
    fullNav.style.transition = "2s";
    fullNav.style.zIndex = "4"
  
    
    
  } else {
    body.style.background = "linear-gradient(179.71deg, #273343 0.25%, #161E29 84.69%)";
    body.style.color = "white";
    body.style.transition = "2s";
    profil.style.color = "#FFC907"
    fullNav.style.background ="linear-gradient(179.71deg, #273343 0.25%, #161E29 84.69%)";
    fullNav.style.position = "sticky";
    fullNav.style.top = "0px";
    fullNav.style.color = "white";
    fullNav.style.transition = "2s";
  

  }
});

// Create & DELETE elements
// Ada dibagian footer "HIT ME UP"

document.getElementById("toggle-show-hide").onclick = () => {
  if (document.getElementById("noTelp")){

    document.getElementById("telp").removeChild(document.getElementById("noTelp"));
    document.getElementById("toggle-show-hide").innerText = "Hit Me Up";

  }else{
    const newNoTelp = document.createElement("p");
    newNoTelp.id = "noTelp"
    newNoTelp.innerText = "+62-81284713934" 
    

    document.getElementById("telp").appendChild(newNoTelp);
    document.getElementById("toggle-show-hide").innerText = "Hide";

  }
};


// const newhp = document.createElement("p");
// newhp.id = "notelp";
// newhp.innerText = "+62-81284713934";
// document.getElementById("toggle-show-hide").onclick = () => {
//   if (document.getElementById("telp")) {
//     document.getElementById("telp").appendChild(newhp);
//     document.getElementById("toggle-show-hide").innerText = "Hide";
//   } else {
    
//       document.getElementById("telp").removeChild(document.getElementById("notelp"));
//       document.getElementById("toggle-show-hide").innerText = "Hit Me Up";
    
   
//   }
// };
