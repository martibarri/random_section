angular
    .module('randomApp')
    .controller('mainController', mainController);

function mainController() {
    var vm = this;
    vm.date = new Date();
    vm.seccions1 = ["Junta", "Bar", "Càtering", "CTU", "Escenari", "Engresca't", "Festa de Dia", "Finançament", "Instal·lació", "Màrqueting", "Multimèdia", "Música", "Propaganda", "Seguretat", "VdE", "WIT"];
    vm.seccions2 = [];
    vm.actual = [];
    vm.knife = false;
    var data_gresca = new Date("2018-04-14T18:00:00.000Z"); 
    vm.dies_restants = parseInt((data_gresca - vm.date) / 1000 / 60 / 60 / 24);
    vm.gresca_passada = (data_gresca - vm.date);
    console.log((vm.gresca_passada / 1000 / 60 / 60 / 24) < 0);
    vm.opcions_actual = {
        accept: function() {
            return !(vm.actual.length >= 1);
        }
    }
    
    vm.next = function() { // TODO: efect random
        var m = vm.seccions1.length
        var i = Math.floor(Math.random() * m--);
        if (vm.seccions1.length!=0) {
            if (vm.actual.length != 0) {
                vm.seccions2.push(vm.actual[0]);
            }
            vm.actual[0] = vm.seccions1[i];
            vm.seccions1.splice(i,1);
        } else if (vm.seccions1.length==0 && vm.actual.length==1) {
            vm.seccions2.push(vm.actual[0]);
            vm.actual.splice(0,1);
        }
        vm.random();
    };
    vm.out = function() {
        if (vm.actual.length != 0) {
            vm.seccions2.push(vm.actual[0]);
            vm.actual.splice(0,1);
        }
    };
    vm.in = function() {
        if (vm.actual.length != 0) {
            vm.seccions1.push(vm.actual[0]);
            vm.actual.splice(0,1);
        }
    };
    vm.random = function() {
        var m = vm.seccions1.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = vm.seccions1[m];
            vm.seccions1[m] = vm.seccions1[i];
            vm.seccions1[i] = t;
        }
    };
    vm.restart = function() {
        vm.seccions1 = ["Junta", "Bar", "Càtering", "CTU", "Escenari", "Engresca't", "Festa de Dia", "Finançament", "Instal·lació", "Màrqueting", "Multimèdia", "Música", "Propaganda", "Seguretat", "VdE", "WIT"];
        vm.seccions2 = [];
        vm.actual = [];
        vm.random();
    };
    vm.keydown = function(event) {
        console.log(event);
        if (event.charCode == 107) {
            vm.knife = true;
        }
        if (event.charCode == 106) {
            vm.knife = false;
        }
        if (event.charCode == 32) {
            vm.next();
        }
        if (event.keyCode == 37) {
            vm.in();
        }
        if (event.keyCode == 39) {
            vm.out();
        }
        if (event.keyCode == 8) {
            vm.restart();
        }
    };
  
};