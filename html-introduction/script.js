document.addEventListener("DOMContentLoaded", function(){
    alert("Welcome guys")
})


const isColorChange = () => {
    let currentColor = document.body.style.backgroundColor;
    
    if (currentColor === "rgb(198, 142, 253)") { 
        document.body.style.backgroundColor = "#B5A8D5"; 
    } else {
        document.body.style.backgroundColor = "#C68EFD";
    }
}