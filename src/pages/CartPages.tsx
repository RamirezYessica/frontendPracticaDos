
import { useEffect, useState } from "react";
import { fetchCart, removeFromCart, removeAllFromCart, fetchCartTotal, addOneToCart } from "../api/api";
import type { CartItem } from "../types/Cart";
import { getSessionId } from "../utils/session";

export default function CartPage() {
  const sessionId = getSessionId();

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState<number>(0);

  /** FUNCION PARA REFRESCAR EL CARRITO */
  const refreshCart = () => {
    fetchCart(sessionId).then((data) =>
      setCartItems(Array.isArray(data) ? data : [])
    );

    fetchCartTotal(sessionId).then(setTotal);
  };

  useEffect(() => {
    fetchCart(sessionId)
      .then((data) => {
        console.log("CART RESPONSE:", data);

        setCartItems(Array.isArray(data) ? data : []);
      })
      .finally(() => setLoading(false));

      fetchCartTotal(sessionId).then(setTotal);

  }, [sessionId]);

  if (loading) return <p>Cargando carrito...</p>;

  if (cartItems.length === 0) {
    return <p>El carrito está vacío</p>;
  }
 return (
    <div>
      <h2>Carrito</h2>

      {cartItems.map((item) => (
        <div className="cart-item" key={item.productId}>
          <p>
            <strong>{item.name}</strong>
            <br />
            {item.quantity} x ${item.price}
          </p>

          <div style={{ display: "flex", gap: "0.5rem" }}>
            {/* 🔹 BOTON PARA ELIMINAR UN SOLO PRODUCTO */}
            <button
              onClick={() =>
                removeFromCart(sessionId, item.productId).then(refreshCart)
              }
            >
              −
            </button>

            {/* BOTON PARA AGREGAR UN PRODUCTO*/}
            <button
              onClick={() =>
                addOneToCart(sessionId, item.productId).then(refreshCart)
              }
            >
              +
            </button>

            {/* ELIMIINAR TODOS LOS PRODUCTOS*/}
            <button
              className="danger"
              onClick={() =>
                removeAllFromCart(sessionId, item.productId).then(refreshCart)
              }
            >
              Quitar todos
            </button>
          </div>
        </div>
      ))}

      <h3 style={{ marginTop: "1.5rem" }}>
        Total: <strong>${total}</strong>
      </h3>
    </div>
  );
}

