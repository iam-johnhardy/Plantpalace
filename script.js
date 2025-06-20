// Tollbar functionality
function showSidebar() {
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'flex'
      };
// hide the sidebar
function hideSidebar() {
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'none'
      };

    //  search functionality
function search() {
        const searchInput = document.querySelector('.search-input')
        const searchValue = searchInput.value.toLowerCase()
        const items = document.querySelectorAll('.item')
        items.forEach(item => {
          const itemName = item.querySelector('h3').textContent.toLowerCase()
          if (itemName.includes(searchValue)) {
            item.style.display = 'block'
          } else {
            item.style.display = 'none'
          }
        });
      };


      // Change Picture Hero Section(indoor)

      const imageSources = ['indoor plants.webp','img 5.jpg','img 6.jpg'];

      let currentIndex = 0;
      const imageElement = document.getElementById('rotating-image');

      function changeImage() {
        currentIndex = (++currentIndex) % imageSources.length


        imageElement.style.opacity = 0;
        
        setTimeout(() => {
        imageElement.src = imageSources[currentIndex];
          imageElement.style.opacity = 1;
        }, 300);
      }

      changeImage();

      const intervalid = setInterval(changeImage, 5000);






      // API functionality
      const API_KEY = sk-jyPt68317da456bdd10615;
      const API_URL =  `https://perenual.com/api/v2/species-list?key=sk-jyPt68317da456bdd10615&page=1`;

      async function fetchPlant() {
        try{
          const response = await fetch(API_URL);
          const data = await response.json();
          displayPlants(data);
        } catch (error){
          console.error("Error Fetching Plant:", error);
        };
        
      };


      function displayPlants(plants)
      {
        const container = document.getElementById("plant-container");
        plants.forEach(plant =>{
          const card = document.createElement("div");
          card.className = "plant-card";
          card.innerHTML = `<h2>${plant.common_name}  </h2>
          <img src="${plant.default_image?.thumbnail || "no-image.jpg"}" alt="${plant.common_name}">

          <p><strong>Watering:</strong> ${plant.watering}</p>
          <p><strong>sunlight:</strong> ${plant.sunlight?.joint(", ")} </p>
          
          `;
        });
      };

      fetchPlant();