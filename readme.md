# Introduction
# Usages

* Update or installl angular cli on the local dev environment

```

npm install -g @angular/cli

```

* Execute
```

cd folder
npm install
ng serve

```

# Notes
## Use Bootstrap in Angular
* Install Bootstrap

```

npm install --save bootstrap@3 jquery

```

* Modify the build section in angular.json

```


            "styles": [
              "src/styles.scss",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]

```
## Passig states from parents to childs
- Basic
    - angular-reddit

```
@Input

```

## Dependency injection
- Basic
    - priceService
    - analyticsService
- Injectable
    - youtubeSearch
    - routing
- useFactory
    - analyticsService

## Learn httpClient and observable
- Basic
    - simpleHttp
    - youtubeSearch
    - moreHttpRequest

## Routing
- Basic
    - routing
    - music

### Rx & Observerable
- Pipe, operators
    - youtubeSearch

## Styling
- inline, external, hybrid
    - advanced-components
- encapsulation
    - advanced-components

## Directive
- Querying neighbor directive (tabs/content-tabs-demo)
    - advanced-components
        - ***@ContentChildren, QueryList*** -> contain child components
        - Turn QueryList into array in ***ngAfterContentInit***
- customized directive
    - advanced-components
- ng-content
    - advanced-components

## Lifecycle sequence
### Examples
- OnInit / OnDestroy
    - OnInit: When the directive properties have been initialzed, and before any of the child directive properties are initialized
    - OnDestroy: When the directive instance is destroyed
    - example: advanced-components (advaned-components/lifecycle/on-init-demo)
- OnChanges
    - When one or more of our component properties have been changed
        - Detect all @Input changes
    - example: advanced-components (advaned-components/lifecycle/on-changes-demo)
        - currentValue, previousValue
- DoCheck (override OnChanges)
    - There may be times when we just want to do something in case an item was removed or added, or if only a particular property changed, for instance.
    - examples:
        - advanced-components (advaned-components/lifecycle/differs)
            - KeyValueDiffers, IterableDiffers
            - Output(), EventEmitter
        - advanced-components (advaned-components/templates/ng-book-for-demo)
            - IterableDiffers
            - DoCheck in Directive
- AfterContentInit
    - When the initialization of the content of the component or directive (ng-content) has finished
    - example: advanced-components (advaned-components/lifecycle/all-hooks)
- AfterContentChecked
    - When the directive check has finished
    - example: advanced-components (advaned-components/lifecycle/all-hooks)
- AfterViewInit (Only for component)
    - When the initialization of the view has finished
    - example: advanced-components (advaned-components/lifecycle/all-hooks)
- AfterViewChecked (Only for component)
    - example: advanced-components (advaned-components/lifecycle/all-hooks)
### References
* [Lifecycle Hooks 學習筆記 (一)](https://ithelp.ithome.com.tw/articles/10188047)

## Template and Redirective
- Rewriting ngIf directive
    - example: advanced-components (advaned-components/templates/ng-book-if-demo)
        - ViewContainerRef, TemplateRef
- Rewriting ngFor directive
    - example: advanced-components (advaned-components/templates/ng-book-for-demo)
        - IterableDiffers
        - DoCheck in Directive
## Change detection
- Zones
    - When a DOM event occurs (like click, change, etc)
    - when an HTTP request is resolved
    - when a Timer is triggered (setTimeOut or setInterval)
    - example: advanced-components (advaned-components/change-detection/on-push-demo)

## Data binding
- Two-Way-Binding
    - It's important to use [(ngModel)] with FormsModule (from @angular/forms)
    - example: advanced-components (advaned-components/change-detection/on-push-demo)

```

import { FormsModule } from '@angular/forms';

```
