

// Tollbar functionality
function showSidebar() {
        const sidebar = document.querySelector('.sideBar')
        sidebar.style.display = 'block'
      };
// hide the sidebar
function disableSidebar() {
        const disableSidebar = document.querySelector('.sideBar')
        disableSidebar.style.display = 'none'
      };




      // Change Picture Hero Section(indoor)

      const tableSources = ['table-plants.webp','outdoor1.jpg', 'outdoor2.jpg'];
      const houseSources = ['bamboo-tree.jpg','outdoor1.jpg', 'outdoor2.jpg'];
      const outdoorSources = ['indoor-plants.webp','img-5.jpg','img-6.jpg'];

      let currentIndex = 0;
      const imageElement = document.getElementById('rotating-image');
            const outImageElement = document.getElementById('outImageElement');
                        const tableImageElement = document.getElementById('tableImageElement');

      function changeImage() {
        currentIndex = (++currentIndex) % ['outdoorSources','houseSources', 'tableSources' ].length
        
        setTimeout(() => {
        imageElement.src = outdoorSources[currentIndex];
                outImageElement.src = houseSources[currentIndex];
                                tableImageElement.src = tableSources[currentIndex];

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