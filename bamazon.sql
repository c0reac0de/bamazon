 -- deletes if it already exists --
drop database bamazon_db;
 -- creates database --
create database bamazon_db;
-- points to this database --
use bamazon_db; 
-- create table object--
create table products(
					ID INTEGER not null, -- unique identifier
					product_name varchar (45) not null, -- product name as a string not null
					department_name varchar (30) not null, -- department name as a string 
                    price integer (500) not null, -- price to customer
					stock_quantity integer (500), -- how much product available 
					PRIMARY KEY (ID)
);


-- INSERT INTO: 10 PRODUCTS --
insert into products 
(product_name,department_name,price,stock_quantity)
values 
(jellybeans,snacks,4,50),
(magazines,books,6,10),
(hats,accessories,15,50),
(earphones,electronics,20,30),
(chocolate,snacks,5,20),
(pop,snacks,3,30),
(sunscreen,seasonal,15,30),
(summerhats,seasonal,15,10),
(cameras,electronics,60,30),
(pulpfiction,books,10,20);

