// Register the `projectList` component on the `projectList` module,
angular.
  module('projectList').
  component('projectList', {
  	//The Url is relative to index.html file
  	//This defines what each project looks like.
  	templateUrl: 'project-list/project-list.template.html',
  	// The controller defines the features and content that occupies the template
  	// You can use $http.get to grab JSON data for the controller. This makes it so you can use larger and more verbose JSON files
  	// or if you are using a big database.
	  // 	$http.get('phones/phones.json').then(function(response) {
	  // http.get returns a promise object .then handles the data async and assigns the data to the controller.
	  //       self.phones = response.data;
	  //     });
	  //   }
	  // });

  	controller: function ProjectListController() {
  		//controller: function ProjectListController($http) {...}
  		this.projects = [
	  		{
	  			project: 'Angular Website',
	  			image: "thisimage.jpg"
	  			// This is when they sort by youngest to oldest.
	  			age: 1
	  		}
  		];
  	}

  });