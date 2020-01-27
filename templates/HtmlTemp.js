const generateHTML = function(teamstr) {
    console.log("Generate HTML");
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Team Profile Generator</title>
    <link href="https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Indie+Flower&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Fascinate+Inline|Over+the+Rainbow&display=swap" rel="stylesheet" />

    <style>
        body {
            background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://media1.giphy.com/media/jLK74MUW07RaU/giphy.gif?cid=790b76110877261054f490c0ebad1542d25952a74b1c11fb&rid=giphy.gif") center;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            margin: 0%;
            height: 100vh;
            font-family: "Permanent Marker", cursive;
        }
        
        .header {
            text-align: center;
            font-size: 30px;
            letter-spacing: 1.2rem;
            color: #fff;
            font-family: "Over the Rainbow", cursive;
            font-family: "Fascinate Inline", cursive;
        }
        
        .container-body {
            display: flex;
            justify-content: space-evenly;
        }
        
        .card {
            border: solid black;
            font-size: x-large;
            border-radius: 10px;
            text-align: center;
            color: #fff;
        }
        
        li {
            list-style: none;
            border: 1px solid black;
            border-radius: 6px;
            font-family: "Indie Flower", cursive;
            padding: 10px;
            position: relative;
            right: 5.5%;
            margin-top: 3px;
            background-color: rgb(252, 247, 247);
            color: black;
        }
        
        .card-header {
            margin: 10%;
        }
        
        .card-body {}
    </style>
   
</head>
    
    <body>
   <div class=header>
       <h1>My Team</h1>
   </div>
   <div class="container-body">

         ${teamstr} 

         </div>
    <script src="https://kit.fontawesome.com/257de25400.js" crossorigin="anonymous"></script>         
    </body>
    
    </html>`;
};

//arr is the employee object and looking for the properties in that class
const generateCard = function(arr) {
    //if else statement
    let roleInfo;

    if (arr.title === "Manager") {
        roleInfo = `Office Number: ${arr.officeNumber}`;
    } else if (arr.title === "Engineer") {
        roleInfo = `Github Username: ${arr.github}`;
    } else if (arr.title === "Intern") {
        roleInfo = `School: ${arr.school}`;
    }

    return `<div class="card">
<div class="card-header">
    <h2>${arr.name}</h2>  
    <h2><i class="far fa-user"></i> ${arr.title}</h2>
    <hr>
</div>
<div class="card-body">
    <ul>
        <li>ID: ${arr.id}</li>
        <li>Email: ${arr.email}</li>
        <li>${roleInfo} </li>
    </ul>
</div>
</div>`;
};

exports.generateHTML = generateHTML;
exports.generateCard = generateCard;