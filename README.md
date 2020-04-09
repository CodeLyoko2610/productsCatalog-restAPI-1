# Products Catalog rest API

The project is a simple REST API used to manage products in different catalogs

Built with with NodeJS, ExpressJS and MongoDB Atlas with promising scalability.

## Get things started

Install [Node.js](https://nodejs.org/en/) and go through the installation

Head to your command prompt / terminal. After navigating to the project's folder, run `npm i` to install required dependencies

Finally, run `npm run server` to start the development server. The project supports hot reload by nodemon.

You can start querying now!

## Querying

As Mongo Atlas is used instead of local databases, I suggest using [Postman](https://www.postman.com/) to easily making queries and requests.

You can find detailed queries being used in this project in `routes/api/category` and `routes/api/product`

Below are some example queries.

### Create a category

_POST request_

`http://localhost:6000/api/category`

_Request header_

```
"Content-Type":"application/json"
```

_Request body_

````
{
	"cateName":"Cate1",
	"cateDescription":"Test Category 1"
}
````

### Search for a product with productId

_GET request_

`http://localhost:6000/api/product/5e8ef1a85a906b4643bfdd08`

## Having concerns ?
Please do not hesitate to contact me through [dangchuongpham1999@gmail.com](mailto:dangchuongpham1999@gmail.com).
I would love to hear your comments!
