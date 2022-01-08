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

