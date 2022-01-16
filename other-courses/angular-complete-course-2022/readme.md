# [Angular - The Complete Guide (2022 Edition)](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/practice/268/introduction#overview)

## Cli
* ng g c <name> --skipTests

## Data binding
* Communication between templates and TypeScript code
### TS -> templates
* string interpolation
```
{{data}}
```
* property binding (square bracket)
```
[property] = 'data'
```
### Templates -> TS
* event binding (parenthese)
```
(event)="expresssion"
```

* dollar sign is a kind of a reserved variable name
```
(input)="update($event)"

update(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
}
```
* Two-Way-Binding
```
<input
 type="text"
 class="form-control"
 [(ngModel)]="serverName">
```
    - example: advanced-components (advaned-components/change-detection/on-push-demo)

## Directive
* Directives are instructions in the DOM
    - examples
        - advanced-components (advaned-components/templates/ng-book-if-demo)
        - advanced-components (advaned-components/templates/ng-book-for-demo)
* ngIf else + ng-template
```
<p *ngIf="serverCreated; else noServer ">{{ Server }}</p>
<ng-template #noServer>
    <p>no server created</p>
</ng-template>
```

* ngStyle

```
<p ngStyle="{backgrounColor: getColor()}"></p>

getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red'
}
```

* ngClass

```
.online {}

<p ngClass="{online: serverStatus === 'online'}"></p>
```
