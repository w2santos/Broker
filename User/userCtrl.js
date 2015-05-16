var app=angular.module("app",[])

function UserController($scope){
    $scope.users=[
        {name:"wsantos", key:"00000", admin:-1},
        {name:"nelio", key:"11111", admin:-1},
        {name:"lais", key:"22222", admin:0}
    ];

    $scope.Save=function(){
        $scope.users.push({name:$scope.newUser.name, key:$scope.newUser.key, admin:$scope.newUser.admin});
        $scope.formVisibility=false;
        console.log($scope.formVisibility)
    }
    
    $scope.formVisibility=false;
    
    $scope.ShowForm=function(){
        $scope.newUser={
            name:"",
            password:"",
            admin:false
        }   
        
        $scope.formVisibility=true;
        console.log($scope.formVisibility)
    }
}

