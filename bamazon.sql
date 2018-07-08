 -- deletes if it already exists --
drop database bamazon_db;
 -- creates database --
create database bamazon_db;
-- points to this database --
use bamazon_db; 
-- create table object--
create table products(
					item_id integer (13) auto_increment, -- unique identifier
					product_name varchar (45) not null, -- product name as a string not null
					department_name varchar (30) not null, -- department name as a string 
                    price integer (200) not null, -- price to customer
					stock_quantity integer (200), -- how much product available 
                    primary key (item_id)
                    
);


-- INSERT INTO: 10 PRODUCTS --
insert into products 
(product_name,department_name,price,stock_quantity)
values 
('magazines','books',6,10),

('pulpfiction','books',10,20);

insert into products 
(product_name,department_name,price,stock_quantity)
values 
('chewinggum','snacks',2,30), 
('hats','accessories',15,50), 
('headbuds','electronics',20,30),
 ('chocolate','snacks',5,20),
 ('pop','snacks',3,30),
 ('sunscreen','seasonal',15,30),
 ('summerhats','seasonal',15,10),
 ('cameras','electronics',60,30);