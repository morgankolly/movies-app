

const parentElement = document.getElementById('movies');


async function movie() {
    const url = 'https://movies-ratings2.p.rapidapi.com/ratings?id=tt0111161';
    const options = {
        method: 'GET',
        headers: {
          		'x-rapidapi-key': 'b32b594d15msheae9e8c4e22156dp189a95jsn0132b6b8dd53',
		'x-rapidapi-host': 'movies-ratings2.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const moviedata = await response.json();
        console.log("result", moviedata)
        console.log('moviedata',moviedata);

        moviedata.forEach(movie => {
            const item = movie.big_image;
            
            const description = limitString(movie.description, 150);
            const title = limitString(movie.title, 25);
            const movieElement = document.createElement('div');
            movieElement.className = 'article';
            movieElement.innerHTML = `
             <img  class="image"  src="${movie.big_image}"  />
              // <h2>${title}</h2>
              // <h4>${movie}</4>
              // <p>${description}</p>

              <a href="https://www.imdb.com/title/${movie.imdbid}" class="watch" >Watch Now</a>

              <script scr="details.js"> </script>
              <button class="download" >Download</button>
              
            `;
      
            parentElement.appendChild(movieElement);
          });


    } catch (error) {
        console.error(error);
    }
    
    }

    
movie(); 
function limitString(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength);
  }
  return str;
}