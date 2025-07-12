const parentElement = document.getElementById('movies');


async function details() {
const url = 'https://imdb236.p.rapidapi.com/api/imdb/tt0816692/tmdb-id'
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b32b594d15msheae9e8c4e22156dp189a95jsn0132b6b8dd53',
		'x-rapidapi-host': 'imdb236.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log("result",result); 

	        moviedata.forEach(movie => {
            const item = movie.id;
            
            console.log("item", item.url)
            const movieElement = document.createElement('div');
            movieElement.className = 'article';
            movieElement.innerHTML = `
              <h2>${item.id}</h2>
			  <p>${item.url}</p>
              <p>${item.tmbdId}</p>
              
            `;
      
            parentElement.appendChild(movieElement);
          });


    } catch (error) {
        console.error(moviedata);
    }
    
}

    
details();

