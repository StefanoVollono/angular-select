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
                {label: '20', value: 20}
            ]
        };

        $scope.countriesCallback = function (index) {
            $scope.callbackResult = index;
        }
    };
    
})();