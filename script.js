var app=angular.module("app",[]);

function LoginController($scope){
    $scope.login={
        user:"",
        key:""
    }
        
    $scope.title="Login";
    
    $scope.autenticar=function(){
        $scope.title="Bem vindo!";
    }
}
