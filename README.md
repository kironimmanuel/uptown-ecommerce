# Uptown Books Online Store

Online shop for a fictional book store. The Application features a user login via auth0, getting data from my books API, several filter options for the store page, newsletter, contact form, shopping cart and a stripe payment implementation via netlify serverless functions.

### auth0 application setup

Create new application `Single Page Application`

Copy `Domain` and `ClientID` and create `.env` variables

Past `http://localhost:YourPort` into the following<br />

└──Application URIs<br />
    ├──Allowed Callback URLs<br />
    ├──Allowed Callback URLs<br />
    └──Allowed Callback URLs<br />

`Save changes`

Test database and social connections

To make the Google authentication work with auth0
Check out [How To Add Google Authentication with Auth0](https://www.youtube.com/watch?v=70gp8kDBnfg&list=PL_P2h0WVUVXK7UEzxNaoAeRolN0nRkMyZ&index=4) on Youtube

### cypress

`npx cypress open`

in `package.json` add

```sh
  "eslintConfig": {
    "extends": [
        # Omits eslint from marking cy. as not defined
      "plugin:cypress/recommended"
    ]
  },
```

### Netlify serverless function

`npm i netlify-cli -D`

```sh
  "devDependencies": {
    "netlify-cli": "^3.39.4",
  },
```

`ntl dev` to start server

### stripe payment implementation

In .env add

```sh
REACT_APP_STRIPE_PUBLISHABLE_KEY=01234
REACT_APP_STRIPE_SECRET_KEY=56789
```
