(function(){
  /*
  describe('angular-select test', function(){

    var $compile, $rootScope, $timeout, $scope, _container, _template, container, template;

    beforeEach(module('angular-select'));

    beforeEach(function(){
      inject(function(_$compile_, _$rootScope_, _$timeout_){
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $timeout = _$timeout_;
      })
      _container = '<div></div>';
      _template = '<select-option '
          + 'selectoption-elements="countries" '
          + 'selectoption-name="countries" '
          + 'selectoption-required="true" '
          + 'selectoption-callback="countriesCallback(index)" '
          + 'selectoption-model="model" '
          + 'selectoption-orderby="desc"> '
          + '</select-option>';

      container = angular.element(_container);
      template = angular.element(_template);
    })

    beforeEach(function(){

      $scope = $rootScope.$new();
      $scope.model = "";
      $scope.countries = {
        title: 'Nazione',
        items : [
            {label: 'France', value: 'FR'},
            {label: 'Inghilterra', value: 'UK'},
            {label: 'Germania', value: 'DE'}
        ]
      }
      $scope.countriesCallback = function(index){
        $scope.callbackResult = index;
      }

      container.append(template);
      $compile(template)($scope);

      $rootScope.$digest();

      var firstOption = container.find('ul.selectOption__options').first().find('li').first();
      firstOption.click(); //clicco il primo elemento della tendina
    })





    it('should change order', function(){
        //console.log('items2:' + angular.toJson($scope.countries.items));
        expect($scope.countries.items[0].label).toEqual('Inghilterra'); //descendent order
    })

    it('should change model', function(){
        expect($scope.model).toEqual('UK');
    })


    it('should set the model even with async data', function(){
      var container = angular.element(_container);
      var template = angular.element(_template);
      container.append(template);
      $scope.countries.items = [];
      $scope.$digest();
      var compiled = $compile(template)($scope);

      asyncCountries().then(function(resp){
        [].push.apply($scope.countries.items, resp);

        var ul = compiled.find('ul').first();
        console.log('length: '+ ul.children('li').length)
        expect(ul.children('li').length).toBeGreaterThan(0);
      })

      $timeout.flush();
    })


    function asyncCountries (){
      return $timeout(function(){
        return [
           {label: 'Italy', value: 'IT'},
           {label: 'Belgium', value: 'BE'},
           {label: 'Scotland', value: 'SC'}
        ]
      });
    }


  })
   */

}())
