import express from 'express';
import cors from 'cors';
import multer from 'multer';


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, `${uniqueSuffix}-${file.originalname}`);
    },
  });
const upload = multer({ storage: storage });
const app = express();
app.use(cors());

app.get('/', (req, res) => { 
  return res.json({ status: 'All Good!' });
});


app.post('/upload/pdf', upload.single('file')), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    
    // Here you can process the file, e.g., save it to a database or perform some operations
    console.log('File uploaded:', req.file);
    
    return res.json({ message: 'File uploaded successfully', file: req.file });
}

app.listen(8000, () => console.log(`Server started on PORT:${8000}`));