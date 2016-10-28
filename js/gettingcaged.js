// API I'm going to use The Movie Database

//Step One: Iterate through all Nicolas Cage Movies through API
$(document).ready(function () {
	var apiKey = "d440a7f7ce806a7de7507e34281331c7";
	var nicolasCage = 2963;
	
	var movieUrl = "https://api.themoviedb.org/3/discover/movie?api_key=" + apiKey + "&language=en-USmovie?with_genres=878&with_cast=" + nicolasCage + "&page=" + page;
	//For loop for each page numberx

	console.log(movieUrl);
		      // Use Get function to find the src url
		var page = 1;
		var movie = 0;
		$.get(movieUrl, function(response) {
			console.log(response["results"][movie]["title"]); //Movie Title
			console.log(response["results"][movie]["genre_ids"]); //Genre_ID
		

		     });

});


// Genre JSON It will save time from searching for it everytime I find a movie.
{  
   "genres":[  
      {  
         "id":28,
         "name":"Action"
      },
      {  
         "id":12,
         "name":"Adventure"
      },
      {  
         "id":16,
         "name":"Animation"
      },
      {  
         "id":35,
         "name":"Comedy"
      },
      {  
         "id":80,
         "name":"Crime"
      },
      {  
         "id":99,
         "name":"Documentary"
      },
      {  
         "id":18,
         "name":"Drama"
      },
      {  
         "id":10751,
         "name":"Family"
      },
      {  
         "id":14,
         "name":"Fantasy"
      },
      {  
         "id":36,
         "name":"History"
      },
      {  
         "id":27,
         "name":"Horror"
      },
      {  
         "id":10402,
         "name":"Music"
      },
      {  
         "id":9648,
         "name":"Mystery"
      },
      {  
         "id":10749,
         "name":"Romance"
      },
      {  
         "id":878,
         "name":"Science Fiction"
      },
      {  
         "id":10770,
         "name":"TV Movie"
      },
      {  
         "id":53,
         "name":"Thriller"
      },
      {  
         "id":10752,
         "name":"War"
      },
      {  
         "id":37,
         "name":"Western"
      }
   ]
}

//Step Two: Handlebars Compile each piece of data into four movie divs.
// Make them responsive with Bootstrap.
// Apply Angular to make the Front End Pop.

//Step Three:
// Develop a modal for each div with more information when clicked on about the movie.

//Step Four:
// Build a search function that limits the movies based on genre, title,
// and description text.

//Step Five

//Step Five (Optional):
// Build Database for Log In and Sign In

// Step Six (Optional):

// Build Rating System that Users can log in and rate movies based on Cheese,
// Hamminess, Over the Top, and Overall Rating.

// Step Seven (Optional):
// Improve Search Engine to search by rating
