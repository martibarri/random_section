var app = angular.module("randomApp", ['mb-dragToReorder']);

app.controller("myCtrl", function($scope) {
    $scope.date = new Date();
    $scope.seccions1 = ["Junta", "Bar", "Càtering", "CTU", "Escenari", "Engresca't", "Festa de Dia", "Finançament", "Instal·lació", "Màrqueting", "Multimèdia", "Música", "Propaganda", "Seguretat", "VdE", "WIT"];
    $scope.seccions2 = [];
    $scope.actual = "";
    $scope.knife = false;
    var data_gresca = new Date("2018-04-14T18:00:00.000Z"); 
    $scope.dies_restants = parseInt((data_gresca - $scope.date) / 1000 / 60 / 60 / 24);
    $scope.next = function() {
        if($scope.seccions1.length!=0){
            if($scope.actual){
                $scope.seccions2.push($scope.actual);    
            }
            $scope.actual = $scope.seccions1[0];
            $scope.seccions1.splice(0,1);    
        } else {
            $scope.actual = "esca esca esca";
        }
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
    $scope.keydown = function(event) {
        console.log(event);
        if (event.charCode == 107) {
            $scope.knife = true;
        }
        if (event.charCode == 106) {
            $scope.knife = false;
        }
    };
}); 