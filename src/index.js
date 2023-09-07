console.log('%c HI', 'color: firebrick')

window.addEventListener('load', () => {
    fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(response => response.json())
        .then(data => {
            //adds image elements to the DOM for each image in the array
            const imageContainer = document.getElementById('dog-image-container');

            data.message.forEach(imageUrl => {
                const img = document.createElement('img');
                img.src = imageUrl;
                imageContainer.appendChild(img);
            })

        })
        .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error(error);
        });
});

window.addEventListener('load', () => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(response => response.json())
      .then(data => {
        const breedList = data.message;
        const breedElement = document.getElementById('dog-breeds');
  
        const dogBreeds = [];

        for (const breed in breedList) {
          const dogBreed = document.createElement('li');
          dogBreed.textContent = breed;
          breedElement.appendChild(dogBreed);
          dogBreeds.push(dogBreed);

          dogBreed.addEventListener("click", function(){
            // Change the font color to red
           return dogBreed.style.color = "green"
          });
        }
        const breedFilterDropdown = document.getElementById('breed-dropdown');

        breedFilterDropdown.addEventListener('change', function() {
        // Call a function to handle the filter logic
        handleBreedFilter();
        });

        function handleBreedFilter() {
          const selectedLetter = breedFilterDropdown.value;
        
          dogBreeds.forEach(breed => {
            if (selectedLetter === '' || breed.textContent.charAt(0) === selectedLetter) {
              breed.style.display = 'block'; // Show the breed element
            } else {
              breed.style.display = 'none'; // Hide the breed element
            }
          });
        }

      
      })

      .catch(error => {
        console.log(error);
      });
  });
  
