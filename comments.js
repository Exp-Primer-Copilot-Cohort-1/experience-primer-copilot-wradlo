// Create web server
// 1. Load the express module
var express = require('express');
var app = express();
// 2. Define the route for the URL
app.get('/comments', function(req, res){
    // 3. Send the response
    res.send('Comments');
});
// 4. Start the server
app.listen(3000, function(){
    console.log('Server is running on http://localhost:3000/comments');
}); 
 Now, let’s run the server using the following command. 
 node comments.js 
 Now, open the browser and type the following URL. 
 http://localhost:3000/comments 
 You will see the following result. 
 Summary 
 In this tutorial, you have learned how to create a web server using the Express module in Node.js. 
 Was this tutorial helpful? Yes No 
 « Previous: Node.js File System Module
 Node.js URL Module :Next »