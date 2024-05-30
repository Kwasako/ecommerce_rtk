import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import './ShoppingCart.css'

const SuperCoin = ()=>{

    const [coins, setCoins] = useState(0)
    const cartItems = useSelector(state=>state.cart.cartItems)
    const totalAmount = cartItems.reduce((total, item)=>total + item.price * item.quantity, 0)

    useEffect(()=>{
        const superCoins = (totalAmount)=>{
            if (totalAmount < 100){
                return 0
            }
            else if (totalAmount >= 100 && totalAmount <= 500){
                return 10
            }
            else if (totalAmount > 500 && totalAmount <= 1000){
                return 20
            }
            else return 30
        }
        setCoins(
            superCoins(totalAmount)
        )
    }, [totalAmount])


    return (
        <>
         <div className="shopping-cart-title">
             <h1> Super Coins </h1> 
             <p>You will earn {coins} super coins with this purchase </p>
        
         </div>
         
        </>
    )
}

export default SuperCoin