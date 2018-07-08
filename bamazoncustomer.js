//REQUIRE MODULES NEEDED

var mysql = require ("mysql");
var inquirer = require ("inquirer");


//BASIC TASKS
//display all products to user

var con= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "bamazon_db"
});

con.connect(function(err){
    if(err) throw err;
    con.query('select * from products'), function (err, result, fields){
        if (err) throw err;
        console.log(result);
    };
});


//using inquirer module/ prompt
//create function to ask 
// function chooseProduct(argument/parameters needed){
//     inquirer.prompt([
//         //user which product they want
//         {
//             "product_id":"product_id",
//             "type":"input",
//             "message": "what product would you like?"
//         },
//         //quantity of product needed
//         {
//             "stock_quantity":"stock_quantity",
//             "type":"input",
//             "message": "how many units of this product would you like?"
//         }
//     ]).then(answers)
// }


//confirm order placed

//check if stock allows purchase
    //if not= "insufficient quantity!" throw error or return
    //else 
    //update sql db to decrease stock
    //show customer their total cost


