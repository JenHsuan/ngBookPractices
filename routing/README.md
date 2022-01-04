# Routing
It's a example project in the routing chapter of the ng-book

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

- Navagation bar
    - Add [routerLink] and router-outlet in UI
    - Register routes/component in module

```

/*[url, path parameter]*/
[routerLink]="['/tracks', t['id']]"

/*The section to show the specific route*/
<router-outlet></router-outlet>

```

- Injectables
- Auth service
- Login
    - Use localStorage as the login check
    - The UI can call the service directly

- Default event in Angular
```
(click)="login(username.value, password.value)"
```

- LoggedIn: CanActivate interface
- Nested routes
# References
