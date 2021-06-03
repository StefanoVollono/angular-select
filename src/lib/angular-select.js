export default angular
  .module("angular-select", [])
  .directive("selectOption", selectOption);

  selectOption.$inject = ["$timeout", '$document'];

function selectOption($timeout, $document) {
  return {
    template:
      '<div class="selectOption" ng-class="{\'selectOption--disabled\': !selectoptionElements.items.length}">' +
      '<div class="selectOption__header">' +
      '<p class="selectOption__header-title" ng-class="{\'selectOption__header-title--choosed\': selectoptionModel}">' +
      '<span ng-if="selectoptionElements.items.length">{{selectoptionElements.title}}</span>' +
      '<span ng-if="!selectoptionElements.items.length">Nessun elemento</span>' +
      "</p>" +
      '<span class="selectOption__header-arrow">' +
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" enable-background="new 0 0 129 129" width="18px" height="18px"><g><path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" /></g></svg>' +
      "</span>" +
      "</div>" +
      '<ul class="selectOption__options">' +
      "<li " +
      'class="selectOption__options-items"' +
      'ng-click="so.updateParent($index)"' +
      'data-val="{{selectoptionElement.value}}"' +
      'ng-repeat="selectoptionElement in selectoptionElements.items"><span>{{selectoptionElement.label}}</span></li>' +
      "</ul>" +
      '<input style="display:none" type="text" name="{{selectoptionName}}" ng-model="selectoptionModel" ng-required="selectoptionRequired" />' +
      "</div>",
    replace: true,
    restrict: "E",
    scope: {
      selectoptionName: "@",
      selectoptionModel: "=",
      selectoptionElements: "=",
      selectoptionCallback: "&?",
      selectoptionRequired: "=?",
      selectoptionOrderby: "@?",
    },
    controller: [
      "$scope",
      function ($scope) {
        if (
          $scope.selectoptionOrderby === "asc" ||
          $scope.selectoptionOrderby === "desc"
        ) {
          $scope.$watch(
            "selectoptionElements.items",
            function (newVal) {
              if (newVal) {
                $scope.selectoptionElements.items.sort(function (a, b) {
                  var textA = (a.label + "").toUpperCase();
                  var textB = (b.label + "").toUpperCase();
                  if ($scope.selectoptionOrderby === "asc")
                    return textA < textB ? -1 : textA > textB ? 1 : 0;
                  else return textA < textB ? 1 : textA > textB ? -1 : 0;
                });
              }
            },
            true
          );
        }

        this.updateParent = function ($index) {
          $scope.selectoptionModel =
            $scope.selectoptionElements.items[$index].value;
          $scope.selectoptionElements.title =
            $scope.selectoptionElements.items[$index].label;

          if ($scope.selectoptionCallback) {
            $timeout(
              function () {
                $scope.selectoptionCallback({ index: $index });
              },
              0,
              true
            );
          }
        };
      },
    ],
    controllerAs: "so",
    link: function (scope, element, attrs) {
      
      var $list = angular.element(element[0].querySelector(".selectOption__options"));
      var $selected = angular.element(element[0].querySelector(".selectOption__header"));
      
      $document.bind('click', function(event) {
        $list[0].style.display = 'none'; 
      });

      $selected.bind('click', function(event) {
        event.stopPropagation();
        var sibling = event.currentTarget.nextSibling;
        // $list.not(sibling).style.display = 'none';  
        
        // Se la tendina è aperta
        if (sibling.offsetWidth > 0 && sibling.offsetHeight > 0) {  
          sibling.style.display = 'none'; 
        } else {
          sibling.style.display = 'block';
        }
      });
    },
  };
}

