# online_store 

## Introduction
### The project has been made to introduce the user to learn how to do E-Commerce online

## Database Setup

```shell
mysql -u root
```

```mysql
create database online_store;

create user don_pkv_1 identified with mysql_native_password by '9212335492';

grant all privileges on online_store.*  to don_pkv_1;

flush privileges;

```
## Back-end Structure

```
SRC
├───controller             # functions to connect routes to db operations
├───db                     # db connection and model definitions  
├───images                 # folder to store the images at final stage
├───public                 # html/js/css files for static part of site
├───route                  # express middlewares (route wise)
└───uploads                #folder for initial image upload

```
## Front-end Structure 

```
SRC\PUBLIC                          #folder to store all the public files
├───app                             #folder for all the custom js
│    └── common.js  
│    └── all-item.js
│    └── common.css
│    └── navbar.js
├───component                       #folder for all the components of the website
│    └── home.html
│    └── all-item.js
│    └── add-item.html
│    └── all-item.html
│    └── footer.html
│    └── navbar.html
├───css                              #folder for bootstrap css 
│    └── bootstrap.css
├───fonts                            #folder for fonts for bootstrap css
│    └── Muli-Italic.woff2
│    └── muli.css
│    └── Muli.woff2
├───js                               #folder for js
│    └── bootstrap.js
│    └── jquery-3.4.1.js
│    └── popper.js
├───utils                            #folder for utilities on website
└───index.html                       #file for displaying the home page
```
## API's

### `item`

1.**`GET /api/item `**

Return all the items in the database

2.**`POST /api/item `**

Create a new item. 
Required fields in body - 

```
item_name=
item_description=
item_link=
item_avatar=          #storing the address of the image
```

## Business Logic

### Users

1. **add item** 
    this will add item in the database

2. **show items** 
    this will show all the items in database


