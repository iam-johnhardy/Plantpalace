// Plant Section
document.getElementById("tableSection").addEventListener("click", function() {

    const section = document.getElementById("plant-container-id");

    if (section.classList.contains("plant-container")){

        section.classList.remove("plant-container")
    }else {
        section.classList.add("plant-container")
    }

    
})
