# E-Commerce Store

#### Fullstack E-Commerce Store

###### Built using MERN

Nodemon

```sh
npm run dev
```

To solve the "Uncaught ReferenceError: process is not defined"

The error is caused by the react-error-overlay package which has dependencies that were updated to support webpack v5 and are not compatible with react-scripts v4.

`npm install --save-dev react-error-overlay@6.0.9`
