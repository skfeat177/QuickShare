<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<div class="container my-5">
  <h1 class="mb-4">API Endpoints Documentation</h1>

  <!-- Upload a File -->
  <div class="card">
    <div class="card-body">
      <h2>Upload a File</h2>
      <p><strong>URL:</strong> /upload</p>
      <p><strong>Method:</strong> POST</p>
      <p><strong>Parameters:</strong></p>
      <ul>
        <li>file (multipart form data): The file to be uploaded</li>
        <li>fileName (query parameter): The desired file name</li>
        <li>description (query parameter): Description of the file</li>
      </ul>
      <p><strong>Response:</strong> JSON response with success or error message</p>
    </div>
  </div>

  <!-- Get All Uploaded Files -->
  <div class="card my-4">
    <div class="card-body">
      <h2>Get All Uploaded Files</h2>
      <p><strong>URL:</strong> /getallfiles</p>
      <p><strong>Method:</strong> GET</p>
      <p><strong>Response:</strong> JSON response containing details of all uploaded files</p>
    </div>
  </div>

  <!-- Get File Details -->
  <div class="card my-4">
    <div class="card-body">
      <h2>Get File Details</h2>
      <p><strong>URL:</strong> /getfiledetail</p>
      <p><strong>Method:</strong> GET</p>
      <p><strong>Parameters:</strong></p>
      <ul>
        <li>id (query parameter): The ID of the file</li>
      </ul>
      <p><strong>Response:</strong> JSON response with file details</p>
    </div>
  </div>

  <!-- Delete a File -->
  <div class="card my-4">
    <div class="card-body">
      <h2>Delete a File</h2>
      <p><strong>URL:</strong> /deletefile</p>
      <p><strong>Method:</strong> DELETE</p>
      <p><strong>Parameters:</strong></p>
      <ul>
        <li>id (query parameter): The ID of the file</li>
      </ul>
      <p><strong>Response:</strong> JSON response indicating success or error</p>
    </div>
  </div>

  <!-- Post Data -->
  <div class="card my-4">
    <div class="card-body">
      <h2>Post Data</h2>
      <p><strong>URL:</strong> /postdata</p>
      <p><strong>Method:</strong> POST</p>
      <p><strong>Parameters:</strong></p>
      <ul>
        <li>dataType, dataContent, dataName (query parameters): Data information</li>
        <li>link (request body): URL link associated with the data</li>
      </ul>
      <p><strong>Response:</strong> JSON response with success or error message</p>
    </div>
  </div>

  <!-- Get All Data -->
  <div class="card my-4">
    <div class="card-body">
      <h2>Get All Data</h2>
      <p><strong>URL:</strong> /getalldata</p>
      <p><strong>Method:</strong> GET</p>
      <p><strong>Response:</strong> JSON response containing details of all data</p>
    </div>
  </div>

  <!-- Get Data by ID -->
  <div class="card my-4">
    <div class="card-body">
      <h2>Get Data by ID</h2>
      <p><strong>URL:</strong> /getdata</p>
      <p><strong>Method:</strong> GET</p>
      <p><strong>Parameters:</strong></p>
      <ul>
        <li>id (query parameter): The ID of the data</li>
      </ul>
      <p><strong>Response:</strong> JSON response with data details</p>
    </div>
  </div>

  <!-- Delete Data by ID -->
  <div class="card my-4">
    <div class="card-body">
      <h2>Delete Data by ID</h2>
      <p><strong>URL:</strong> /deletedata</p>
      <p><strong>Method:</strong> DELETE</p>
      <p><strong>Parameters:</strong></p>
      <ul>
        <li>id (query parameter): The ID of the data</li>
      </ul>
      <p><strong>Response:</strong> JSON response indicating success or error</p>
    </div>
  </div>

  <!-- Contributing -->
  <div class="card my-4">
    <div class="card-body">
      <h2>Contributing</h2>
      <p>Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.</p>
      <p>Please make sure to update tests as appropriate.</p>
    </div>
  </div>

  <!-- License -->
  <div class="card my-4">
    <div class="card-body">
      <h2>License</h2>
      <p>This project is licensed under the <a href="https://choosealicense.com/licenses/mit/">MIT License</a>.</p>
    </div>
  </div>
</div>
</body>
</html>
