(function(){
    "use strict";

    angular
        .module('selectExampleApp', ['angular-select'])
        .controller('demoSelectCtrl', demoSelectCtrl);

    demoSelectCtrl.$inject = ['$scope'];
    function demoSelectCtrl ($scope) {

        $scope.countries = {
            title: 'Nazione',
            items : [
                {label: 'Italia', value: 'IT'},
                {label: 'Inghilterra', value: 'UK'},
                {label: 'Germania', value: 'DE'}
            ]
        };

    };
})();