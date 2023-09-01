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

  <p><strong>Endpoint:</strong> POST /upload</p>
<p><strong>Description:</strong> Upload a file to the server and store it in Firebase Storage.</p>
<p><strong>Parameters:</strong></p>
<ul>
    <li><code>file</code> (multipart/form-data): The file to upload.</li>
    <li><code>description</code> (query parameter): Description of the file.</li>
</ul>
<p><strong>Response:</strong> JSON response indicating success or failure.</p>

<p><strong>Endpoint:</strong> GET /getallfiles</p>
<p><strong>Description:</strong> Retrieve a list of all uploaded files.</p>
<p><strong>Response:</strong> JSON response with a list of file objects or an error message if no files are found.</p>

<p><strong>Endpoint:</strong> GET /getlimitedfiles</p>
<p><strong>Description:</strong> Retrieve a limited number of uploaded files.</p>
<p><strong>Parameters:</strong></p>
<ul>
    <li><code>count</code> (query parameter): Number of files to retrieve.</li>
</ul>
<p><strong>Response:</strong> JSON response with a list of file objects or an error message if no files are found.</p>

<p><strong>Endpoint:</strong> GET /searchfile</p>
<p><strong>Description:</strong> Search for files by their description.</p>
<p><strong>Parameters:</strong></p>
<ul>
    <li><code>name</code> (query parameter): Description to search for.</li>
</ul>
<p><strong>Response:</strong> JSON response with a list of file objects that match the search criteria or an error message if no files are found.</p>

<p><strong>Endpoint:</strong> GET /getfiledetail</p>
<p><strong>Description:</strong> Retrieve detailed information about a specific file.</p>
<p><strong>Parameters:</strong></p>
<ul>
    <li><code>id</code> (query parameter): Unique identifier of the file.</li>
</ul>
<p><strong>Response:</strong> JSON response with detailed file information or an error message if the file is not found.</p>

<p><strong>Endpoint:</strong> DELETE /deletefile</p>
<p><strong>Description:</strong> Delete a specific file.</p>
<p><strong>Parameters:</strong></p>
<ul>
    <li><code>id</code> (query parameter): Unique identifier of the file to delete.</li>
</ul>
<p><strong>Response:</strong> JSON response indicating success or failure.</p>

<p><strong>Endpoint:</strong> POST /postdata</p>
<p><strong>Description:</strong> Add new data with the specified type, content, and name.</p>
<p><strong>Parameters:</strong></p>
<ul>
    <li><code>dataType</code> (query parameter): Type of the data.</li>
    <li><code>dataContent</code> (query parameter): Content of the data.</li>
    <li><code>dataName</code> (query parameter): Name of the data.</li>
    <li><code>link</code> (request body): Link related to the data.</li>
</ul>
<p><strong>Response:</strong> JSON response indicating success or failure.</p>

<p><strong>Endpoint:</strong> GET /getalldata</p>
<p><strong>Description:</strong> Retrieve a list of all data records.</p>
<p><strong>Response:</strong> JSON response with a list of data objects or an error message if no data is found.</p>

<p><strong>Endpoint:</strong> GET /getlimiteddata</p>
<p><strong>Description:</strong> Retrieve a limited number of data records of a specific type.</p>
<p><strong>Parameters:</strong></p>
<ul>
    <li><code>count</code> (query parameter): Number of data records to retrieve.</li>
    <li><code>type</code> (query parameter): Type of data to retrieve.</li>
</ul>
<p><strong>Response:</strong> JSON response with a list of data objects or an error message if no data is found.</p>

<p><strong>Endpoint:</strong> GET /searchdata</p>
<p><strong>Description:</strong> Search for data records by type and name.</p>
<p><strong>Parameters:</strong></p>
<ul>
    <li><code>type</code> (query parameter): Type of data to search for.</li>
    <li><code>name</code> (query parameter): Name to search for.</li>
</ul>
<p><strong>Response:</strong> JSON response with a list of data objects that match the search criteria or an error message if no data is found.</p>

<p><strong>Endpoint:</strong> GET /getdata</p>
<p><strong>Description:</strong> Retrieve detailed information about a specific data record.</p>
<p><strong>Parameters:</strong></p>
<ul>
    <li><code>id</code> (query parameter): Unique identifier of the data record.</li>
</ul>
<p><strong>Response:</strong> JSON response with detailed data information or an error message if the data is not found.</p>

<p><strong>Endpoint:</strong> DELETE /deletedata</p>
<p><strong>Description:</strong> Delete a specific data record.</p>
<p><strong>Parameters:</strong></p>
<ul>
    <li><code>id</code> (query parameter): Unique identifier of the data record to delete.</li>
</ul>
<p><strong>Response:</strong> JSON response indicating success or failure.</p>

<!-- Add other endpoints and descriptions as needed -->
