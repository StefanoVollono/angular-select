(function(){
    "use strict";

    angular
        .module('selectExampleApp', ['angular-select'])
        .controller('demoSelectCtrl', demoSelectCtrl);

    demoSelectCtrl.$inject = ['$scope'];
    function demoSelectCtrl ($scope) {

        $scope.formData = {};

        $scope.countries = {
            title: 'Nazione',
            items : [
                {label: 'France', value: 'FR'},
                {label: 'Inghilterra', value: 'UK'},
                {label: 'Germania', value: 'DE'}
            ]
        };

        $scope.age = {
            title: 'Età',
            items : [
                {label: '18', value: 18},
                {label: '19', value: 19},
                {label: '20', value: 20},
                {label: '21', value: 21},
                {label: '22', value: 22},
                {label: '23', value: 23},
                {label: '24', value: 24},
                {label: '25', value: 25},
                {label: '26', value: 26},
                {label: '27', value: 27},
                {label: '28', value: 28},
                {label: '29', value: 29},
                {label: '30', value: 30},
                {label: '31', value: 31},
                {label: '32', value: 32},
                {label: '33', value: 33},
                {label: '34', value: 34},
                {label: '35', value: 35}
            ]
        };

        $scope.countriesCallback = function (index) {
            $scope.callbackResult = index;
        }
    };

})();