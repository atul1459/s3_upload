- [Express](http://expressjs.com/)
- [Mongoose](http://mongoosejs.com/) for the backend
- [Sass](http://sass-lang.com/) for styles (using the SCSS syntax)
- [Webpack](https://webpack.github.io/) for compilation


## Requirements

- [Node.js](https://nodejs.org/en/) 6+
- [MongoDB]
- [Postman] (https://www.getpostman.com/) / (https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en)

```shell
npm install
```


## Running
Configure `config.js` file in the `config` folder with the MongoDB details.

Update 'server/routes/api/file.js' file with ur credentials.

run 'node server' on the terminal.

User the API Development Environment App (Postman).
Url: localhost:8080/api/upload
Method: POST
Body-->form-data-->
key1: element1, value: example
key2:element2, value: upload file--->send



#Production mode:

#```shell
#npm start
#```

#Development (Webpack dev server) mode:

#```shell
#npm run start:dev
#```
# s3_upload
