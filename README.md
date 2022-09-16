# Uptown Books Online Store

#### Fullstack E-Commerce Store

###### Built using MERN

Nodemon

```sh
npm run dev
```

To solve the "Uncaught ReferenceError: process is not defined"

The error is caused by the react-error-overlay package which has dependencies that were updated to support webpack v5 and are not compatible with react-scripts v4.

`npm install --save-dev react-error-overlay@6.0.9`

**auth0**

Create new application `Single Page Application

Copy `Domain` and `ClientID` and create `.env` variables

Past `http://localhost:YourPort` into the following
└──Application URIs
        ├── Allowed Callback URLs
        ├── Allowed Callback URLs
        └── Allowed Callback URLs

Save changes

Test database and social connections

**cypress**
`npx cypress open`

- in `package.json` add

```sh
  "eslintConfig": {
    "extends": [
        # Omits eslint from marking cy. as not defined
      "plugin:cypress/recommended"
    ]
  },
```

**backup configs**
"react-error-overlay": "^6.0.9",

**prevent CRA from opening new browser**
`npm i cross-env` add `BROWSER=none` in .env

```sh
    "start": "cross-env BROWSER=none react-scripts start"
```

If you don't want to install cross-env globally, just add cross-env to your devDependencies and use "start": "npx cross-env Browser=..."
