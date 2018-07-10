//REQUIRE MODULES NEEDED

var mysql = require ("mysql");
var inquirer = require ("inquirer");


//BASIC TASKS
//display all products to user

var connection= mysql.createConnection({
    host: "localhost",
    port:3306,
    user: "root",
    password: "password",
    database: "bamazon_db"
});

connection.connect(function(err){
    if(err) {
        console.log("error in connection");
    }
    connection.query('SELECT * FROM products', function (err, result){
        if (err) throw err;
        console.log(result);
        chooseProduct();
    });
    
});


//using inquirer module/ prompt
//create function to ask 
function chooseProduct(){
  inquirer.prompt([
         //ask user which product they want
        {
        name:"product_name",
        type: "input",
        message: "what product would you like?"
        },           
    //quantity of product needed
        {
            name:"stock_quantity",
            message: "how many units would you like?",
            validate: function(value) {
                if (isNaN(value) === false) {
                  return true;
                }
                return false;
              }
        },
            //parse user input
])
    .then(function(answer){
        
    console.log("you have ordered "+answer.stock_quantity+ " units of "+answer.product_name);
    placeOrder();
    })
};

function placeOrder(){
    inquirer.prompt([
        {
            name:"confirm",
            type:"confirm",
            message:"finalize order?"
        }
    ])
    .then (function(answer){
        console.log("There are"+stock_quantity + answer.product_name +"in stock");
        var query="select * from products where ?";
       connection.query(query, [answer.product_name,answer.stock_quantity], function(err,result){
            console.log(answer.stock_quantity+ "units selected for user");
            query+= "alter table products where #this.stockquantity from products where (product name=answer.product_name"
                  
        })
        console.log("order ready for customer");
    }

    )};
//if order placed, ask if user wants to purchase more or end order.
//chooseProduct();