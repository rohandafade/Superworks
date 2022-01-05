app.controller('signInCtr', function($scope,$window,$location,$state){
   $scope.loginFun=function(){
	$state.go("home");
}
  
});