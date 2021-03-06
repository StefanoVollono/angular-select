[![Build Status](https://travis-ci.com/StefanoVollono/angular-select.svg?branch=master)](https://travis-ci.com/StefanoVollono/angular-select)

# angular-select
Angular Select is a responsive and customizable select for angular 1.x. A simple directive along with a configuration object and you're ready to go. [Demo](https://stefanovollono.github.io/angular-select/)

## Installation with npm
`npm install angular-select-option --save`

## How to use:

### Method 1: import scripts in your html and the directive as a module dependency:

```html
<!-- You can choose umd format -->
<script src="<your-node-module-path>/dist/angular-select-umd.min.js"></script>

<!-- Or you can choose es6 module. Don't forget type=module -->
<script type="module" src="<your-node-module-path>/angular-select-option/src/lib/angular-select.js"></script>
 ```

 ```javascript
angular.module('myApp', ['angular-select']);
```

### Method 2: import all scripts from node_modules and use it as module dependency (see the demo folder):

 ```javascript
import angular from 'angular';
import angularSelect from 'angular-select-option/lib/angular-select'; 

angular.module('myApp', ['angular-select']);
```

 ## The CSS
You can choose between the scss or che css version.
Choosing SASS allow you to specify some graphic behaviour overriding the global variables in
angular-select.scss file


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
these are the custom attributes available

```javascript
scope: {
  selectoptionName: "@", //name to display above the select
  selectoptionModel: "=", //model to bind the selected value
  selectoptionElements: "=", //list of the options
  selectoptionCallback: "&?", //callback to be triggered on click
  selectoptionRequired: "=?", //if the select is required e.g. inside a form
  selectoptionOrderby: "@?" //order to display the elements
},
```

## Usage
A simple example available in /demo folder

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
  title: 'Nation',
  items : [
    {label: 'France', value: 'FR'},
    {label: 'England', value: 'UK'},
    {label: 'Germany', value: 'DE'}
  ]
};

// Countries Callback
$scope.countriesCallback = function (index) {
  $scope.callbackResult = index;
};
```

## How to run local npm scripts
```javascript
 // Run local dev server on demo folder
 npm run serve

 // Start demo build process. Create demo folder inside dist.
 npm run build:demo

 // Export minified lib in UMD and ESM format inside dist folder.
 npm run build:lib

 // Serve build demo inside dist folder
 npm run serve:build-demo
```
