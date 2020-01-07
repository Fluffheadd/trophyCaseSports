"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author:stephanie
   Date:   1/3/2020

   Filename: tc_cart.js

*/

// create variable to store orderTotal
var orderTotal = 0;
// cartHTML variable will store the HTML code of the shopping cart table
var cartHTML = "<table>";
cartHTML += "<tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";
//item array loop, adding one table row each item
for (var i = 0; i < item.length; i++) {
  cartHTML += "<tr>";
  cartHTML += "<td>" + "<img src='tc_" + item[i] + ".png' alt='" + item[i] + "' /></td>";
  cartHTML += "<td>" + itemDescription[i] + "</td>";
  cartHTML += "<td>$" + itemPrice[i] + "</td>";
  cartHTML += "<td>" + itemQty[i] + "</td>";
  //calculate cost of items ordered
  var itemCost = itemPrice[i] * itemQty[i];
  cartHTML += "<td>$" + itemCost + "</td>";
  cartHTML += "</tr>";

  //keep a running total of the customer order cost
  orderTotal += itemCost;
}
//add a table row displaying order total
cartHTML += "<tr><td colspan='4'>Subtotal</td>";
cartHTML += "<td>$" + orderTotal + "</td></tr>";
cartHTML += "</table>";
// write the HTML code into the cart table
document.getElementById('cart').innerHTML = cartHTML;
