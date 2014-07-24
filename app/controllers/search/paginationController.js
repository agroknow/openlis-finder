/*
* @author Mathioudakis Theodore
* Agro-Know Technologies - 2013
*/

//Define paginationController controller in 'app'
//---

//in paginationController we keep all methods related to pagination
//NOTE:
//We need the following parameters to be defined in mainController
//- paginationTop : true/false
//- paginationBottom : true/false
//- $scope.pageSize : number of results per page
//- $scope.total : number of total results
//- $scope.pages : holds the pages for pagination

// services required $rootScope, $scope, sharedProperties
listing.controller("paginationController", function($rootScope, $scope, sharedProperties){

	//calculate and add pages in pages[] for viewing in front end only if top or bottom pagination is visible
	$scope.initPagination = function(){
		if($scope.enablePaginationTop || $scope.enablePaginationBottom){
			$scope.numOfPages = sharedProperties.getTotal()/$scope.pageSize;

	    	$scope.pages.length = 0;/*clear pagination*/

			var rep = $scope.limitPagination;

	    	for(var i = 1; i<rep; i++){
	        	$scope.pages.push(Math.floor(i));
	    	}
	    	console.log($scope.pages);

		}
	};


	//function `updatePagination()`
	$rootScope.updatePagination = function(){

	  	$scope.numOfPages = sharedProperties.getTotal()/$scope.pageSize;
	  	$scope.pages.length = 0;/*clear pagination*/
		var rep;
		$scope.limitPagination > $scope.numOfPages ? rep = Math.ceil($scope.numOfPages) : rep = $scope.limitPagination;

    	for(var i = 1; i<rep+1; i++){
        	$scope.pages.push(Math.floor(i));
    	}
	};


	//function `goToPage()`
	//- @param pageNum : goes to specific page
	//sets the $rootScope.currentPage
	//returns only the items of the selected page
	$scope.goToPage = function(pageNum){
		if(pageNum >= 1 && pageNum <= $scope.pages.length){
			$rootScope.currentPage = pageNum;
			$scope.findElements(false, 'classic'); //calls the search but replaces existed elements in listing
		}
	};

	//function `loadMore()`
	//- @param pageNum : the page of which we want to add to existed results
	//appends items in existed resultss
	$scope.loadMore = function(pageNum) {
		console.log(pageNum);
		$rootScope.currentPage = pageNum;
	    $scope.findElements(false, 'mobile'); //calls the search and appends elements in listing
	}

});

