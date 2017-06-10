# angular-select
Angular Select is a responsive and customizable select for angular 1.x. A simple directive along with a configuration object and you're ready to go. 

## Installation with bower or yarn
`yarn install angular-select-option --save`

`bower install angular-select-option --save`

## Import scripts in your html and the module as a dependency:
Le uniche due dipendenze della libreria sono angular e jQuery.

```html
<script src="<your-path>/jquery/dist/jquery.js"></script>
<script src="<your-path>/angular/angular.js"></script>
<script src="<your-path>/angular-select/src/angular-select.js"></script>
 ```
 
 ```javascript
angular.module('myApp', ['angular-select']);
```
 
 ## The CSS
 Puoi usare sia la versione SASS che plain css. Nelcaso decidessi di usare SASS, puoi modificare alcuni comportamenti grafici, overraidando le variabili di configurazione nella parte superiore di _angular-select.scss:

```css
// default settings
$max-width:       none!default;
$select-height:   45px!default;
$header-color:    #37474f!default;
$arrow-bg:        #0080ff!default;
$arrow-fill:      #ffffff!default;
$arrow-width:     32px!default;
$header-bg:       #ffffff!default;
$options-bg:      #fafafa!default;
$options-color:   #37474f!default;
$options-shadow:  0 5px 10px -4px rgba(0, 0, 0, .36)!default;
```

## Custom Atribute
Use angular skitter is pretty straight forward. Basta includere la direttiva come element all'interno dell'html e utilizzare i custom attribute che ti abbiamo messo a disposizione per popolarla e customizzarla. Al 'selectoptionRequired' potrai passare semplicemente un true oppure una regex. 

```javascript
scope: {
  selectoptionName: "@",
  selectoptionModel: "=",
  selectoptionElements: "=",
  selectoptionCallback: "&?",
  selectoptionRequired: "=?",
  selectoptionOrderby: "@?"
},
```

## Usage
Ecco di seguito un esempio su come usarla. Potrai comunque trovare un esempio funzionante nella cartella /example.

```html
<form name="formName" novalidate>
  <span ng-if="formName.$submitted && formName.countries.$error.required">Required</span>
  <select-option
    selectoption-name="countries"
    selectoption-model="formData.countries"
    selectoption-elements="countries"
    selectoption-callback="countriesCallback(index)"        
    selectoption-required="true"
    selectoption-orderby="desc">
  </select-option>
  <button type="submit" class="btn btn-primary">Send</button>
</form>
```

```javascript
// Form Model
$scope.formData = {};

// Countries Data
$scope.countries = {
  title: 'Nazione',
  items : [
    {label: 'France', value: 'FR'},
    {label: 'Inghilterra', value: 'UK'},
    {label: 'Germania', value: 'DE'}
  ]
};

// Countries Callback
$scope.countriesCallback = function (index) {
  $scope.callbackResult = index;
};
```
