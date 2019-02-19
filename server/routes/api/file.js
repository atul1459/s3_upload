const AWS = require('aws-sdk');
const Busboy = require('busboy');
const BUCKET_NAME = 'billerxchange.io';
const IAM_USER_KEY = 'AKIAI37WG3NNRIZFHXUQ';
const IAM_USER_SECRET = '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';
function uploadToS3(file) {
 let s3bucket = new AWS.S3({
   accessKeyId: IAM_USER_KEY,
   secretAccessKey: IAM_USER_SECRET,
   Bucket: BUCKET_NAME,
 });
 s3bucket.createBucket(function () {
   var params = {
    Bucket: BUCKET_NAME,
    Key: file.name,
    Body: file.data,
   };
   s3bucket.upload(params, function (err, data) {
    if (err) {
     console.log('error in callback');
     console.log(err);
    }
    console.log('success');
    console.log(data);
   });
 });
}
module.exports = (app) => {
  // Put the body with "element1": "test", "element2": image file
  app.post('/api/upload', function (req, res, next) {
   // This grabs the additional parameters so in this case passing     
   // in "element1" with a value.
   var element1 = req.body.element1;
   var busboy = new Busboy({ headers: req.headers });
   // The file upload has completed
   busboy.on('finish', function() {
    console.log('Upload finished');
    // Your files are stored in req.files. In this case,
    // Grabs your file object from the request.
    const file = req.files.element2;
    console.log(file);
    // Begins the upload to the AWS S3
uploadToS3(file);
   });
   req.pipe(busboy);
  });
}