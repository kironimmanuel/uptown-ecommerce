# Uptown Books Online Store

###### Serverless Netlify Functions

**auth0**

Create new application `Single Page Application

Copy `Domain` and `ClientID` and create `.env` variables

Past `http://localhost:YourPort` into the following<br />
└──Application URIs<br />
        ├──Allowed Callback URLs<br />
        ├──Allowed Callback URLs<br />
        └──Allowed Callback URLs<br />

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

**Serverless Function**
`npm i netlify-cli -D`

```sh
  "devDependencies": {
    "netlify-cli": "^3.39.4",
  },
```

`ntl dev` to start server
