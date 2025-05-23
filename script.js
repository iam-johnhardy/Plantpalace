// Tollbar functionality
function showSidebar() {
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'flex'
      }
// hide the sidebar
function hideSidebar() {
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'none'
      }

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
        })
      } 