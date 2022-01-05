app.controller('logInCtr', function($scope, $window, $http, $state,loginService){

  $scope.loginFun=function(loginObj){

    	loginService.userLoginService(loginObj).then(function(response){

    		   if(response.data.statusCode=="200"){    			   

    		   console.log(JSON.stringify(response));

    					 if(response.data.result.loginStatus==true){

       						 $state.go("home"); 

    					 }else{

    						  $scope.responseFailedStatus=true;

    	    					 $scope.responseMessage="Login Failed";

    	    					  $timeout(setFlag,3000);

    					 }	 

			}else{

				$scope.responseFailedStatus=true;

				$state.go("login");

				 $scope.responseMessage=response.data.message;

				 $scope.clear();

			}

		})

	
	}
});