const url = 'https://imdb236.p.rapidapi.com/api/imdb/tt0816692';
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
     console.log("result", result)
        const moviedata = result.data.movies.edges
        const tvshow = result.data.tv
        console.log('movieData',moviedata);

         moviedata.forEach(movie => {
            const item = movie.node;
             console.log("item", item.id)
            const movieElement = document.createElement('div');
            movieElement.className = 'article';
            movieElement.innerHTML = `
             <img class="image" src="${item.primaryImage.url}" />
              <h2>${item.certificate.id.ratingReason}</h2>
              <p>${item.id}</p>
              
            `;
      
            parentElement.appendChild(movieElement);
          });

    } catch (error) {
        console.error(moviedata);
    }
    


    
movie();