<h1>Alpha Clothing</h1>

## Launch ##
Project can be launched without any installations directly on your device. Project is hosted on netlify, simply click the link below to launch.

https://alpha-footwear.netlify.app/

## Built With ##
 
* React
* TypeScript
* Firebase
* Redux
* SCSS
* Material UI


## Features ##
Feature  | Description
------------- | -------------
Cart Page | Cart Page displayed product image, price, quantity, remove item button, subtotal, sales tax, order total, and a checkout button routing user to the checkout page upon click.
Add to Cart       | User can **add** an item to their cart by selecting an item with various combinations within the product page.
Remove From Cart  | User can **remove** an item to their cart by clicking on the trash icon within the cart page.
Cart Icon Counter | Cart Icon displayed within the Navigation Bar indicating user's current cart item count.
Product Selection Combinations | App includes multiple selection options for products such as shoe size(9, 9.5, 10, ...)
Directory | Homepage includes a directory including all five types of products available accessed via Routes. User has an option to be navigated to the following: Shirts, Pants, Jackets, Hats, and Shoes. More products will be available in the future as the project grows.
Shipping Form | Checkout page includes a shipment form that asks user for name, address, delivery method, phone number, email, form button that submits and routes user to billing section(future addition). User is also given a link to login to speed up billing(future addition).
Cost Summary | A cost summary overview is displayed within the Checkout page showing the user the following information: Subtotal , Shipping & Handling Cost, Taxes, and Total Cost.
Cart View Component | Checkout page includes a cart component that displayed the Product Arrival Date(Earliest: 3 Days from current date and Latest: 8 Days after current date). This component also includes an "edit cart" link that navigates the user back to the cart page.
Shipping & Delivery Disclaimer | Checkout page includes a small Shipping & Delivery component notifying the user that Alpha Clothing only delivers during business days(Monday-Friday).
Sign In/Create Account | User can create an account via Google Sign In, or create an account. User choice will authenticate them using Firebase by matching their user id.
Credit Card Payment | Credit Card Payment Section added once user fills out the shipping form.
