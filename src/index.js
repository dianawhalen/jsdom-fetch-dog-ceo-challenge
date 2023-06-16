console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl)
  .then(response => response.json())
  .then(data => {
    let imageContainer = document.getElementById('dog-image-container');
    data.message.forEach(img => {
      let newImageElement = document.createElement('img');
      newImageElement.src = img;
      imageContainer.appendChild(newImageElement);
    });
  });

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(breedUrl)
  .then(response => response.json())
  .then(data => {
    let breedsList = document.getElementById('dog-breeds');
    for (let breed in data.message) {
      let newListItem = document.createElement('li');
      newListItem.innerText = breed;
      newListItem.addEventListener('click', function(event) {
        event.target.style.color = 'red';
      });
      breedsList.appendChild(newListItem);
    }

    document.querySelector("#breed-dropdown").addEventListener("change", filterBreedList);
  });

function filterBreedList(event) {
  const letter = event.target.value;
  const breedListItems = document.querySelectorAll('#dog-breeds li');

  breedListItems.forEach(function (item) {
    if (item.textContent[0] !== letter) {
      item.style.display = 'none';
    } else {
      item.style.display = '';
    }
  });
}
