import React, { useState, useEffect } from "react";

function ItemCard(props) {
    console.log(props)
    return (

        <div>
            <p> 

            <div>
               Item:  {props.item.product}
            </div>

            <div>
               Brand:  {props.item.brand}
            </div>

            <div>
                ${props.item.price}
            </div>

            <div>
               Sku:  {props.item.id}
            </div>

            <div>
               Color:  {props.item.color}
            </div>

            <div>
               Quantity:  {props.item.quantity}
            </div>

            <div>
                -----------------
            </div>

            </p>
        </div>
    );
}

export default ItemCard;