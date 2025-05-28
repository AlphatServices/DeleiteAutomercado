"use client";
import { use, useEffect, useState } from "react";
import styles from "./Cart.module.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { CartItem } from "./Cart.interface";
import { getSession,getToken } from "@/app/utils/Storage";
import api from "../utils/api";
import { updateCantProductCart } from "../utils/addCart";

export default function Cart() {

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cantItems, setCantItems] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  
  
  const handleAddProduct = (product:CartItem) => { 
    
    console.log('Add Product',product)
    updateCantProductCart(product.id,product.cantidad+1)
    setCartItems(prev => 
      prev.map(producto => 
        producto.id === product.id 
          ? { ...producto, cantidad: producto.cantidad+1} 
          : producto
      )
    );

  }

  const handleDeleteProduct = (product:CartItem) => {
    if (product.cantidad > 1) {
      setCartItems(prev => 
        prev.map(producto => 
          producto.id === product.id 
            ? { ...producto, cantidad: producto.cantidad-1}
            : producto
        )
      );
    }
  }

  const handleRemoveProduct =(product:CartItem) =>{

  }
  const totalProducts =(product:CartItem) =>{
    
  }
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        console.log("Productos")
        const response = getToken() ? await api.get("/carts/user-active") : await api.post("/carts/user-session",{session:getSession()});
        setCartItems(response.data);
        setCantItems(response.data.length);
      } catch (error) {
        console.log('Error al buscar los producto del carrito de compra',error)
      } finally {
        setLoading(false);
      }
    }
    fetchCartItems();
    getTotal()
  }, []);

  const getTotal = ()=>{
    
    console.log('Total')
    console.log(cartItems)
    /*const priceForProduct = cartItems.map((product)=>{
      return parseFloat(product.precio)* product.cantidad
    })
    console.log(priceForProduct)
    setTotal(priceForProduct.reduce((acum,value)=>{return acum+value},0));
    */
    setTotal(cartItems.map((product)=>parseFloat(product.precio)* product.cantidad).reduce((acc,curr)=>acc+curr,0) )

  }
 

  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className={styles["content-payment"]}>
        <div className={styles["cart-container"]}>
          <h2 className={styles["cart-title"]}>
            Carrito <span>{cantItems}</span>
          </h2>

          <div className={styles["cart-table"]}>
            <div className={styles["cart-header"]}>
              <div className={styles["cart-item-header"]}>Artículo</div>
              <div className={styles["cart-price-header"]}>Precio</div>
              <div className={styles["cart-quantity-header"]}>Cantidad</div>
              <div className={styles["cart-total-header"]}>Precio Total</div>
            </div>

            <div className={styles["cart-items"]}>
              {loading && <div className={styles["cart-item-info"]}> Cargando...</div>}
              {cartItems.length==0 && loading== false && <div className={styles["cart-item-info"]}> No hay producto</div>}
              {cartItems?.map((cartItem,index)=>(

                 <div className={styles["cart-item"]}  key={index}>
                 <div className={styles["cart-item-info"]}>
                   <div className={styles["cart-item-image"]}>
                     <img src="/cart/placeholder.svg" alt="Imagen del producto" />
                   </div>
 
                   <div className={styles["cart-item-details"]}>
                     <h3>Vel pellentesque bibendum.</h3>
                     <p>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     </p>
                   </div>
 
                 </div>
                 <div className={styles["cart-item-price"]}>${cartItem.precio}</div>
                 <div className={styles["cart-item-quantity"]}>
                   <a onClick={()=>handleDeleteProduct(cartItem)} className={`${styles["quantity-btn"]} ${styles["decrease"]}`}>
                     <img src="/cart/remove.svg" alt="-" />
                   </a>
                   <span className={styles["quantity-value"]}>{cartItem.cantidad}</span>
                   <a onClick={()=>handleAddProduct(cartItem)} className={`${styles["quantity-btn"]} ${styles["increase"]}`}>
                     <img src="/cart/add.svg" alt="+" />
                   </a>
                 </div>
                 <div className={styles["cart-item-total"]}>${(parseFloat(cartItem.precio)*cartItem.cantidad).toFixed(2)}</div>
                 <div className={styles["cart-item-actions"]}>
                   <a className={styles["favorite-btn"]}>
                     <img src="/cart/heart-outline.svg" alt="Favorito" />
                   </a>
                   <a className={styles["remove-btn"]}>
                     <img src="/cart/close.svg" alt="Eliminar" />
                   </a>
                   
                 </div>
               </div>
              ))}
            </div>
          </div>

          <div className={styles["cart-checkout-grid"]}>
            <div className={styles["checkout-item"]}>
              <div className={styles["promocode-container"]}>
                <label htmlFor="promocode">Código Promocional</label>
                <div className={styles["promocode-input"]}>
                  <input type="text" id="promocode" value="HAPPY" readOnly />
                  <span className={styles["promocode-check"]}>
                    <img src="/cart/checkmark.svg" alt="Applied" />
                  </span>
                </div>
                <p className={styles["promocode-message"]}>
                  ¡Felicidades! Tienes un 10% de descuento
                </p>
              </div>
            </div>

            <div className={styles["checkout-item"]}>
              <div className={styles["discount-row"]}>
                <span>Descuento:</span>
                <span className={styles["value"]}>${total}</span>
              </div>
            </div>

            <div className={styles["checkout-item"]}></div>

            <div className={styles["divider"]}></div>

            <div className={styles["checkout-item"]}>
              <a href="/" className={styles["back-btn"]}>
                ⟵ Volver a comprar
              </a>
            </div>
            <div className={styles["checkout-item"]}>
              <div className={styles["total-row"]}>
                <span>Precio Total:</span>
                <span className={styles["value"]}>${total}</span>
              </div>
            </div>
            <div className={styles["checkout-item"]}>
              {cantItems > 0 && <a href="/payment" className={styles["checkout-btn"]}>Finalizar Compra</a>}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
