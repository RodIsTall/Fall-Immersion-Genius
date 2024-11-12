//Get modal element
const modal = document.getElementById("myModal");

//Get buttons
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const alertBtn = document.getElementById("alertBtn");


//Open modal on button click
openModalBtn.onclick = function() {
    modal.style.display = "block";
}

//Open modal on button click
closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

//Open modal on button click
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

//Open modal on button click
alertBtn.onclick = function() {
    alert("This is a simple pop-ip alert! 2k is a way better game now. GO 2k!")
}
