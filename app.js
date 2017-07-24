var app = angular.module("randomApp", ['mb-dragToReorder']);

app.controller("myCtrl", function($scope) {
    $scope.date = new Date();
    $scope.seccions1 = ["Bar", "Càtering", "CTU", "Escenari", "Engresca't", "Festa de Dia", "Finançament", "Instal·lació", "Màrqueting", "Multimèdia", "Música", "Propaganda", "Seguretat", "VdE", "WIT"];
    $scope.seccions2 = [];
    $scope.actual = "";
    
    $scope.next = function() {
        if($scope.actual){
            $scope.seccions2.push($scope.actual);    
        }
        $scope.actual = $scope.seccions1[0];
        $scope.seccions1.splice(0,1);
    };
    $scope.random = function() {
        var m = $scope.seccions1.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = $scope.seccions1[m];
            $scope.seccions1[m] = $scope.seccions1[i];
            $scope.seccions1[i] = t;
        }
    };
    $scope.restart = function() {
        $scope.seccions1 = ["Bar", "Càtering", "CTU", "Escenari", "Engresca't", "Festa de Dia", "Finançament", "Instal·lació", "Màrqueting", "Multimèdia", "Música", "Propaganda", "Seguretat", "VdE", "WIT"];
        $scope.seccions2 = [];
        $scope.actual = "";
    };
    
}); 