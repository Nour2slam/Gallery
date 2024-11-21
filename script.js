

 let imges = document.querySelectorAll(".img img").forEach(img => {
   img.onclick = function () {
    openPopup(this.src);

}
 
 });
 let popup =  document.getElementById("popup")
 let nav = document.querySelector(".nav")
function openPopup(src) {
 popup.style.display  = "flex"
nav.style.display = "none"
 let popupImg = document.getElementById("popup-img")
 popupImg.src = src
 popupImg.style.width = "80%"
 popupImg.style.height = "90%"
 document.body.classList.add("body")
 document.body.style.overFlow = "hidden"
}
function closePopup() {
    popup.style.display = "none"
    nav.style.display = "flex"
document.body.classList.remove("body")
}

let label = document.querySelector("input")
 label.oninput = function change() {
document.body.style.backgroundColor = label.value

}

