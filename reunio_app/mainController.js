angular
    .module('randomApp')
    .controller('mainController', mainController);

function mainController() {
    var vm = this;
    vm.date = new Date();
    var data_gresca = new Date("2018-04-14T18:00:00.000Z");
    vm.seccions1 = ["Bar", "Càtering", "CTU", "Engresca't", "Escenari", "Festa de Dia", "Finançament", "Instal·lació", "Junta", "Màrqueting", "Multimèdia", "Música", "Propaganda", "Seguretat", "VdE", "WIT"];
    vm.seccions2 = [];
    vm.actual = [];
    vm.knife = false;
    vm.dies_restants = parseInt((data_gresca - vm.date) / 1000 / 60 / 60 / 24);
    vm.gresca_passada = (data_gresca - vm.date);
    vm.opcions_actual = {
        accept: function () {
            return !(vm.actual.length >= 1);
        }
    };

    /*vm.random = function (stat) { // TODO: efecte random
        var m = vm.seccions1.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = vm.seccions1[m];
            vm.seccions1[m] = vm.seccions1[i];
            vm.seccions1[i] = t;
        }
        vm.stat = stat;
    };*/
    vm.next = function (stat) {
        var m = vm.seccions1.length;
        var i = Math.floor(Math.random() * m--);
        if (vm.seccions1.length != 0) {
            if (vm.actual.length != 0) {
                vm.seccions2.push(vm.actual[0]);
            }
            vm.actual[0] = vm.seccions1[i];
            vm.seccions1.splice(i, 1);
        } else if (vm.seccions1.length == 0 && vm.actual.length == 1) {
            vm.seccions2.push(vm.actual[0]);
            vm.actual.splice(0, 1);
        }
        vm.stat = stat;
    };
    vm.out = function (stat) {
        if (vm.actual.length != 0) {
            vm.seccions2.push(vm.actual[0]);
            vm.actual.splice(0, 1);
        }
        vm.stat = stat;
    };
    vm.keydown = function (event) {
        console.log(event);
        if (event.charCode == 107) {
            vm.knife = true;
        }
        if (event.charCode == 106) {
            vm.knife = false;
        }
        if (event.keyCode == 39) {
            //if (vm.stat == 'random') vm.random('next');
            if (vm.stat == 'out') vm.out('next');
            else if (vm.stat == 'next') vm.next('out');
        }
    };

}