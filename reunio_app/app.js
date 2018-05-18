var app = angular.module("randomApp", ['ngDragDrop']);

app.controller("myCtrl", function($scope) {
    $scope.date = new Date();
    $scope.seccions1 = ["Junta", "Bar", "Càtering", "CTU", "Escenari", "Engresca't", "Festa de Dia", "Finançament", "Instal·lació", "Màrqueting", "Multimèdia", "Música", "Propaganda", "Seguretat", "VdE", "WIT"];
    $scope.seccions2 = [];
    $scope.actual = [];
    $scope.knife = false;
    var data_gresca = new Date("2018-04-14T18:00:00.000Z"); 
    $scope.dies_restants = parseInt((data_gresca - $scope.date) / 1000 / 60 / 60 / 24);
	$scope.opcions_actual = {
        accept: function() {
            return !($scope.actual.length >= 1);
        }
    }
    $scope.next = function() { // TODO: efect random
        var m = $scope.seccions1.length
        var i = Math.floor(Math.random() * m--);
        if ($scope.seccions1.length!=0) {
            if ($scope.actual.length != 0) {
                $scope.seccions2.push($scope.actual[0]);
            }
            $scope.actual[0] = $scope.seccions1[i];
            $scope.seccions1.splice(i,1);
        } else if ($scope.seccions1.length==0 && $scope.actual.length==1) {
            $scope.seccions2.push($scope.actual[0]);
            $scope.actual.splice(0,1);
        }
        $scope.random();
    };
    $scope.out = function() {
        if ($scope.actual.length != 0) {
            $scope.seccions2.push($scope.actual[0]);
            $scope.actual.splice(0,1);
        }
    };
    $scope.in = function() {
        if ($scope.actual.length != 0) {
            $scope.seccions1.push($scope.actual[0]);
            $scope.actual.splice(0,1);
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
        $scope.seccions1 = ["Junta", "Bar", "Càtering", "CTU", "Escenari", "Engresca't", "Festa de Dia", "Finançament", "Instal·lació", "Màrqueting", "Multimèdia", "Música", "Propaganda", "Seguretat", "VdE", "WIT"];
        $scope.seccions2 = [];
        $scope.actual = [];
        $scope.random();
    };
    $scope.keydown = function(event) {
        console.log(event);
        if (event.charCode == 107) {
            $scope.knife = true;
        }
        if (event.charCode == 106) {
            $scope.knife = false;
        }
        if (event.charCode == 32) {
            $scope.next();
        }
        if (event.keyCode == 37) {
            $scope.in();
        }
        if (event.keyCode == 39) {
            $scope.out();
        }
        if (event.keyCode == 8) {
            $scope.restart();
        }
    };
}); 
