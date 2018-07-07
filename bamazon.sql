 -- deletes if it already exists --
drop database bamazon_db;
 -- creates database --
create database bamazon_db;
-- points to this database --
use bamazon_db; 
-- create table object--
create table products(
					item_id integer (13) auto_increment PRIMARY KEY, -- unique identifier
					product_name varchar (45) not null, -- product name as a string not null
					department_name varchar (30) not null, -- department name as a string 
                    price integer/decimal (500) not null, -- price to customer
					stock_quantity integer (500), -- how much product available 
);


-- INSERT INTO: 10 PRODUCTS --


