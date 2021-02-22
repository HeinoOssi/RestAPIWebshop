## RestAPIWebshop

#### To make this thing work
Create a localhost database with following tables:
items:
+--------------+-------------+------+-----+---------+----------------+
| Field        | Type        | Null | Key | Default | Extra          |
+--------------+-------------+------+-----+---------+----------------+
| idItems      | int(11)     | NO   | PRI | NULL    | auto_increment |
| idUser       | int(11)     | NO   | PRI | NULL    |                |
| title        | varchar(45) | YES  |     | NULL    |                |
| description  | varchar(45) | YES  |     | NULL    |                |
| category     | varchar(45) | YES  |     | NULL    |                |
| askingPrice  | varchar(45) | YES  |     | NULL    |                |
| deliveryType | varchar(45) | YES  |     | NULL    |                |
| address      | varchar(45) | YES  |     | NULL    |                |
| postalCode   | int(11)     | YES  |     | NULL    |                |
| city         | varchar(45) | YES  |     | NULL    |                |
| createdAt    | date        | YES  |     | NULL    |                |
| updatedAt    | date        | YES  |     | NULL    |                |
+--------------+-------------+------+-----+---------+----------------+
users:
+---------------+--------------+------+-----+---------+----------------+
| Field         | Type         | Null | Key | Default | Extra          |
+---------------+--------------+------+-----+---------+----------------+
| idUser        | int(11)      | NO   | PRI | NULL    | auto_increment |
| firstName     | varchar(45)  | YES  |     | NULL    |                |
| lastName      | varchar(45)  | YES  |     | NULL    |                |
| email         | varchar(45)  | YES  |     | NULL    |                |
| dateOfBirth   | date         | YES  |     | NULL    |                |
| emailVerified | tinyint(4)   | YES  |     | NULL    |                |
| userName      | varchar(45)  | YES  | UNI | NULL    |                |
| password      | varchar(255) | YES  |     | NULL    |                |
| createdAt     | date         | YES  |     | NULL    |                |
| updatedAt     | date         | YES  |     | NULL    |                |
+---------------+--------------+------+-----+---------+----------------+
