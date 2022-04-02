# business-api

This api has all the required data for business organizations, in the following structure
```
Name of company{
	Name of Manager, ->String
	Name of CEO,->String
	Net worth, -> Float
	Products, ->Array
	Profit by year{->Object
	Year1,
	Year2,
	…..
	},
	Company founded date,->String
	Company operation timing->String
}
```

Start:

You can access the api either by downloading this repo and installing all the dependecies with `npm install`, to start the data you will need to run `npm start` or you can simply go to the api [link](https://business-api-csapstone.herokuapp.com/)

locahost:3000/business or the link/business will give you all the data that is present in the database. Each organization will have a unique id, you can get the data for that particular id with the help of localhost:3000/business/:id or link/business/:id

You can also delete data for an organization with the help of the same endpoint, but with the DELETE method instead of GET method.

If you have some business' data that you would like the api to have you can add it with the help of the POST method at localhost:3000/business or link/business. Make sure that your json adheres to the structure provided above. 

It is also easier to update an organization's single data set with the help of the PATCH keyword, you need to pass in the key value pair(holding appropriate data as mentioned in the structure) at localhost:3000/business/:id or link/business/:id 
