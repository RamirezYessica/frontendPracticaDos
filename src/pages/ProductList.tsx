import { useEffect, useState } from "react";
import { fetchProducts, addProductToCart } from "../api/api";
import type{ Product } from "../types/Product";
import { getSessionId } from "../utils/session";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Session ID único para el carrito
  const sessionId = getSessionId();
  console.log("SESSION ID:", sessionId);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  const handleAddToCart = async (productId: number) => {
    try {
      await addProductToCart(sessionId, productId);
      alert("Producto agregado al carrito");
    } catch (error) {
      alert("Error al agregar al carrito");
      console.error(error);
    }
  };

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div>
      <h2>Listado de Productos</h2>

      <div className="product-grid">
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              width: "200px",
              borderRadius: "6px",
            }}
          >
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>
              <strong>${product.price}</strong>
            </p>

            <button onClick={() => handleAddToCart(product.id)}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

