const express = require('express');
require('dotenv').config();
const multer = require('multer');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
const { initializeApp } = require("firebase/app");
const { getStorage, ref, uploadBytes, getDownloadURL,deleteObject } = require("firebase/storage");
const File = require('./file-upload-schema');
const Data = require('./text-data');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
const port = 3000;
app.use(bodyParser.json());
const targetServer = 'https://quick-share-cors.vercel.app';
app.use(
  '/',
  createProxyMiddleware({
    target: targetServer,
    changeOrigin: true,
    onProxyReq: (proxyReq, req, res) => {
      // Set the 'Origin' header to allow requests from any origin
      proxyReq.setHeader('Origin', '*');
    },
  })
);
// Your Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN ,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const storage = multer.memoryStorage(); // Store file in memory

const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "File Upload Unsuccessful" });
  }

  const storage = getStorage(firebaseApp);
  const uniqueFileName = Date.now() + '-' + req.file.originalname;
  const storageRef = ref(storage,uniqueFileName);

  await uploadBytes(storageRef, req.file.buffer);

  const fileUrl = await getDownloadURL(storageRef);

  const savedFileDocument = await saveFileDocument(req.file.mimetype, req.file.size, fileUrl,uniqueFileName,req.query.description);

  if (savedFileDocument) {
    res.json({ message: "File Uploaded Successfully", fileData: savedFileDocument });
  } else {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

const saveFileDocument = async (fileType, fileSize, fileUrl,fileName,fileDescription) => {
  try {
    const newFile = new File({
      fileType: fileType,
      uploadedDate: new Date(),
      fileSize: fileSize,
      fileUrl: fileUrl,
      fileName:fileName,
      fileDescription:fileDescription
    });

    const savedFile = await newFile.save();
    console.log('File document saved:', savedFile);
    return savedFile;
  } catch (error) {
    console.error('Error saving file document:', error);
    return null;
  }
};

// GET route to handle root URL
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Server is Running Fine' });
});

// GET route for '/upload'
app.get('/upload', (req, res) => {
  res.status(405).json({ status: 'ok', message: 'EndPoint Doesn\'t Support GET Method' });
});

// GET route for fetching all files
app.get('/getallfiles', async (req, res) => {
  try {
    const allFiles = await File.find(); // Retrieve all documents from the File schema

    if (allFiles.length > 0) {
      res.json({ status: 'ok', message: 'All files retrieved', files: allFiles });
    } else {
      res.status(404).json({ status: 'error', message: 'No files found' });
    }
  } catch (error) {
    console.error('Error fetching all files:', error);
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
});

// GET route for fetching file details
app.get('/getfiledetail', async (req, res) => {
  const fileId = req.query.id; // Assuming you pass the _id as a query parameter
  try {
    const fileDetails = await File.findById(fileId).exec();
    if (fileDetails) {
      res.json({ status: 'ok', message: 'File details retrieved', fileDetails: fileDetails });
    } else {
      res.status(404).json({ status: 'error', message: 'File not found' });
    }
  } catch (error) {
    console.error('Error fetching file details:', error);
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
});


app.delete('/deletefile', async (req, res) => {
  const fileId = req.query.id; // Assuming you pass the _id as a query parameter

  try {
    // Get the file document from the database based on the fileId
    const fileDetails = await File.findById(fileId).exec();

    if (!fileDetails) {
      return res.status(404).json({ status: 'error', message: 'File not found' });
    }

    // Delete the file from Firebase Storage
    const storage = getStorage(firebaseApp);
    const storageRef = ref(storage, fileDetails.fileName);
    await deleteObject(storageRef);
    // Delete the file document from the database
    await File.findByIdAndDelete(fileId);
    res.json({ status: 'ok', message: 'File deleted successfully' });
  } catch (error) {
    console.error('Error deleting file:', error);
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
});


app.post('/postdata', async (req, res) => {
  try {
    const dataType = req.query.dataType;
    const dataContent = req.query.dataContent;
    const dataName = req.query.dataName;
    const link = req.body.link
    const newData = new Data({
      dataType: dataType,
      dataContent: dataContent,
      dataName:dataName,
      postedAt: new Date(),
      link:link
    });

    const savedData = await newData.save();
    res.json({ message: "Data added successfully", data: savedData });
  } catch (error) {
    console.error('Error adding data:', error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get('/getalldata', async (req, res) => {
  try {
    const allFiles = await Data.find(); // Retrieve all documents from the File schema

    if (allFiles.length > 0) {
      res.json({ status: 'ok', message: 'All files retrieved', files: allFiles });
    } else {
      res.status(404).json({ status: 'error', message: 'No files found' });
    }
  } catch (error) {
    console.error('Error fetching all files:', error);
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
});

app.get('/getdata', async (req, res) => {
  try {
    // Assuming you pass the _id as a query parameter
    const fileId = req.query.id;

    // Retrieve data by _id
    const data = await Data.findById(fileId).exec();

    if (data) {
      res.json({ status: 'ok', message: 'Data retrieved', data: data });
    } else {
      res.status(404).json({ status: 'error', message: 'Data not found' });
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
});

app.delete('/deletedata', async (req, res) => {
  try {
    // Assuming you pass the _id as a query parameter
    const fileId = req.query.id;

    // Retrieve data by _id
    const data = await Data.findById(fileId).exec();

    if (data) {
      // Delete the data by _id
      await Data.findByIdAndDelete(fileId);

      res.json({ status: 'ok', message: 'Data retrieved and deleted', data: data });
    } else {
      res.status(404).json({ status: 'error', message: 'Data not found' });
    }
  } catch (error) {
    console.error('Error fetching or deleting data:', error);
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
