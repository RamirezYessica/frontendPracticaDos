const API_URL = import.meta.env.VITE_API_URL;

/** TRAE LOS PRODUCTOS */

export async function fetchProducts() {
  const res = await fetch(`${API_URL}/products`);
  if (!res.ok) {
    throw new Error("Error al cargar productos");
  }
  return res.json();
}

/** AGREGA LOS PRODUCTOS A LAS TARJETAS */

export async function addProductToCart(
  sessionId: string,
  productId: number
) {
  const res = await fetch(`${API_URL}/cart/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sessionId,
      productId,
      quantity: 1,
    }),
  });

  if (!res.ok) {
    throw new Error("Error al agregar producto al carrito");
  }
}

export async function fetchCart(sessionId: string) {
  const res = await fetch(`${API_URL}/cart/${sessionId}`);
  if (!res.ok) {
    throw new Error("Error al cargar carrito");
  }
  return res.json();
}

/**ELIMINA UN PRODUCTO DEL CARRITO */
export async function removeFromCart(
  sessionId: string,
  productId: number
) {
  const res = await fetch(
    `${API_URL}/cart/${sessionId}/items/${productId}`,
    {
      method: "DELETE",
    }
  );

  if (!res.ok) {
    throw new Error("Error al quitar producto del carrito");
  }
}

/** TOTAL DEL CARRITO */
export async function fetchCartTotal(sessionId: string): Promise<number> {
  const res = await fetch(`${API_URL}/cart/${sessionId}/total`);

  if (!res.ok) {
    throw new Error("Error al obtener total del carrito");
  }

  return res.json();
}

/**ELIMINA TODOS LOS PRODUCTOS */
export async function removeAllFromCart(
  sessionId: string,
  productId: number
) {
  await fetch(
    `${API_URL}/cart/${sessionId}/items/${productId}/all`,
    { method: "DELETE" }
  );
}

/**AGREGA UN PRODUCTO DESDE EL CARRITO */
export async function addOneToCart(
  sessionId: string,
  productId: number
) {
  await fetch(`${API_URL}/cart/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      sessionId,
      productId,
      quantity: 1
    })
  });
}
