CREATE TABLE projects (
   id BIGSERIAL NOT NULL PRIMARY KEY,
   name VARCHAR(30) NOT NULL,
   apartment INT NOT NULL,
   area INT NOT NULL,
   price INT NOT NULL,
   instalments VARCHAR(50) NOT NULL,
);

INSERT INTO projects (name , apartment , area,  price , instalments) values ('El Shabab City' , 2 , 90 , 300000, ' 18 months' );

SELECT * FROM projects;

CREATE TABLE users (
   id BIGSERIAL NOT NULL PRIMARY KEY,
   name VARCHAR(50) NOT NULL,
   email VARCHAR(100) NOT NULL,
   password VARCHAR(200) NOT NULL, 
   UNIQUE(email)
);

INSERT INTO user (name , email , password ) values ('Ahmed Saad' , 'medzcoder@gmail.com' , 'easypassowrd');

SELECT * FROM users;

CREATE TABLE requests (
   id BIGSERIAL NOT NULL PRIMARY KEY,
   userID BIGINT NOT NULL REFERENCES users(id),
   projectID BIGINT NOT NULL REFERENCES projects(id),
   request VARCHAR(500) NOT NULL
); 

INSERT INTO requests (userID , projectID , request ) values (1 , 2 , 'Can I pay 2000 L.E as a deposit');

SELECT * FROM requests;