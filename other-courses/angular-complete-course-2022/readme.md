# [Angular - The Complete Guide (2022 Edition)](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/practice/268/introduction#overview)

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

