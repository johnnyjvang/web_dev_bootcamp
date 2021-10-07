Section 25: SQL 

- SQL stands for Structured Query Language
- SQL lets you access and manipulate databases
- SQL became a standard of the American National Standards Institute (ANSI) in 1986, and of the International Organization for Standardization (ISO) in 1987

tutorial: https://www.w3schools.com/sql/

Main functions (crud) for sql:
	
	create
	read
	update
	Destroy 

	.get
	.post
	.push
	.delete 


https://sqliteonline.com/

The CREATE TABLE statement is used to create a new table in a database.

CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
   ....
);

SQL Datatype: money
Monetary data from -922,337,203,685,477.5808 to 922,337,203,685,477.5807

The PRIMARY KEY constraint uniquely identifies each record in a table.

Primary keys must contain UNIQUE values, and cannot contain NULL values.

A table can have only ONE primary key; and in the table, this primary key can consist of single or multiple columns (fields).

CREATE TABLE products (
	id INT NOT NULL, 
	name STRING,
	price MONEY,
	PRIMARY KEY (id)	
)


The INSERT INTO SELECT statement copies data from one table and inserts it into another table.

Copy all columns from one table to another table:
INSERT INTO table2
SELECT * FROM table1
WHERE condition;


INSERT INTO products
VALUES (1, "Pen", 1.20) 

INSERT INTO products (id, name)
VALUES (2, "Pencil") 
-> price will result in a "null" since it was not specified 

INSERT INTO products (name, price)
VALUES ("Rubber", 1.30) 
-> will error since id cannot be NULL



321. SQL Commands: Read, Select, and Where 


SELECT * FROM 'products'; 

* = wild card, selects everything 


To only select certain columns: 

SELECT name, price FROM 'products'; 


To only select certain rows (WHERE): 

SELECT * FROM 'products'
WHERE: id=1


322. Updating Single Values and Adding Columns in SQL

UPDATE products 
SET price = 0.80 
WHERE id=2

this statement will change the price value where id=2

Add/delete a column 

ALTER TABLE table_name
ADD column_name datatype; 

adding a new column called stock with an "int" datatype 
ALTER TABLE products 
ADD stock INT 

UPDATE products 
SET stock = 32
WHERE id=1 

UPDATE products 
SET stock = 12
WHERE id=2 


323. SQL Commands: DELETE

DELETE FROM table_name
WHERE condition: 

DELETE FROM products 
WHERE name = "Pencil" 

or

DELETE FROM products
WHERE id = 2

DELETE FROM products (will delete everything w/o a WHERE statement) 


324. Understanding SQL Relationships,
Foreign Keys and Inner Joins

- add back pencil row/column 

INSERT INTO products
VALUES (2, "Pencil", 0.8, 12) 

CREATE TABLE orders(
	id INT NOT NULL,
	order_number INT, 
	customer_id INT, 
	product_id INT, 
	PRIMARY KEY (id)
	FOREIGN KEY (customer_id) REFERENCES customers(id),
	FORIENG KEY (product_id) REFERENCE products(id)
)


INSERT INTO orders
VALUES (1, 4362, 2, 1)


SQL INNER JOIN! 

SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;

---------------------------

SELECT orders.order_number, customers.first_name, customers.last_name, customers.address
FROM orders
INNER JOIN customers ON orders.customer_id = customers.id 

- the column names are taken from pre-existing tables 
- orders.customer_id = customers.id 
	ex: 
	orders.customer_id = 1
	customers.id = name, etc. 



- join the order number with the products


SELECT orders.order_number, products.name, products.price, products.stock 
FROM orders 
INNER JOIN products ON orders.products_id = products.id 

