import { useEffect, useState } from "react";
const USERID = 1;
export default function CartPage() {
  const [carts, setCarts] = useState([]);
  const getData = async () => {
    const res = await fetch("https://fakestoreapi.com/carts");
    const data = await res.json();

    if (data && data.length) {
      const userCart = data.filter((cart) => cart?.userId === USERID);
      console.log(userCart);
      setCarts(userCart);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(carts);
  return (
    <div>
      <h1>Cart Page</h1>
      <div>
        <h3>{carts?.length}</h3>
        {carts?.map((cart) => (
          <div key={cart?.id}>
            {cart.products?.map((product) => {
              return <CartProduct cProduct={product} />;
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

function CartProduct({ cProduct }) {
  const [product, setProduct] = useState(null);
  const getData = async () => {
    const res = await fetch(
      `https://fakestoreapi.com/products/${cProduct?.productId}`
    );
    const data = await res.json();
    if (data) {
      setProduct(data);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div
        style={{
          border: "1px solid",
          backgroundColor: "purple",
          color: "white",
          padding: "1rem",
          viewTransitionName: `product${product?.id}`,
          display: "flex",
        }}
      >
        <img src={product?.image} style={{ height: "2rem" }} />
        <div>
          <h3>{product?.title}</h3>
          <div>{cProduct?.quantity}</div>
        </div>
      </div>{" "}
    </div>
  );
}