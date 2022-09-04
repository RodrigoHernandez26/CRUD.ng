# [CRUD.ng](https://dudushy.github.io/CRUD.ng/)
Playing with Angular.
> version 14.1.2
---

## Prerequisites:
- [NodeJS](https://nodejs.org/)

## Setup:
1. Install Angular CLI
    ```bash
    npm i -g @angular/cli
    ```

1. Create new project
    ```bash
    ng new CRUD

    ? Would you like to share anonymous usage data about this project with the Angular Team at
    Google under Google’s Privacy Policy at https://policies.google.com/privacy. For more
    details and how to change this setting, see https://angular.io/analytics. No
    ? Would you like to add Angular routing? Yes
    ? Which stylesheet format would you like to use? SCSS
    ```

1. Setup ESLint
    ```bash
    npm install -g eslint
    ```

    ```bash
    npm init @eslint/config
    ```

2. Generate
    > [steps.sh](/steps.sh)

3. Run project
    ```bash
    ng serve
    ```

4. Build project
    ```bash
    npm i -g angular-cli-ghpages
    ```

    ```bash
    ng build --base-href "https://dudushy.github.io/CRUD.ng/"
    npx angular-cli-ghpages --dir=dist/CRUD
    ```
