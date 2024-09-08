const express = require('express');
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
  
  app.post('/upload', (req, res) => {

    console.log(req);

    const upload = multer({ storage:
        multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, 'uploads/');   
                // Specify the upload directory
            },
            filename: (req, file, cb) => {
                const origin = file.originalname;
                const emailName = req.body.emailname;
                cb(null, `${emailName} ~=+=~ ${origin}`);
            },
        })
     });

     upload.single('file')(req, res, (err) => {
        // Handle upload errors (optional)
        if (err) {
          console.error(err);
          return res.status(500).send('Upload failed!');
        }
    
        if (req.file) {
            console.log('File uploaded successfully:', req.file);
            res.send('File uploaded successfully!');
          } else {
            console.error('No file uploaded:', req.file);
            res.status(400).send('No file uploaded.');
          }
      });

  });



app.listen(3000, () => {
  console.log('Server listening on port 3000');
});