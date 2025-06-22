

const parentElement = document.getElementById('movies');


async function movie() {
    const url = 'https://imdb8.p.rapidapi.com/title/v2/get-popular?first=20&country=US&language=en-US';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'b32b594d15msheae9e8c4e22156dp189a95jsn0132b6b8dd53',
            'x-rapidapi-host': 'imdb8.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log("result", result)
        const moviedata = result.data.movies.edges
        const tvshow = result.data.tv
        console.log('movieData',moviedata);

        moviedata.forEach(movie => {
            const item = movie.node;
            
            console.log("item", item)
            const movieElement = document.createElement('div');
            movieElement.className = 'article';
            movieElement.innerHTML = `
             <img class="image" src="${item.primaryImage.url}" />
              <h2>${item.titleText.text}</h2>
              <p>${item.plot.plotText.plainText}</p>
              <button class="watch" >Watch Now</button>
              <button class="download" >Download</button>
              
            `;
      
            parentElement.appendChild(movieElement);
          });


    } catch (error) {
        console.error(moviedata);
    }
    
    }

    
movie();