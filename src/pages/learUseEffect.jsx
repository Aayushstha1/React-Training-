// import { useEffect, useState } from "react";
// export default function LearnUseEffect(){
//     const [count, setCount] = useState(0);
//     const [clicked, setClicked] = useState(0);

import { useEffect, useState } from "react";

//     useEffect(() => {
//         setCount(count +1);

//     },[clicked] );
//     return(
//         <div>
//         <h1>    Learn use Effect</h1>
//         <div>{count}</div>
//         <div>
//         <button onClick={() => setClicked(clicked +1)}>Button</button>
        
//         </div>
//         </div>

//     )

// }
 
export default function learUseEffect() {
    const [products, setProducts] = useState(null); // Initialize as null to handle non-array responses

    const getData = async () => {
        const res = await fetch("https://fakestoreapi.com/products/1"); // Fetch a single product
        const data = await res.json();
        console.log("----", data);
        setProducts(data); // Set the response directly
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <h1>Learn useEffect</h1>
            <div>
                <p>{products ? "1 Product Loaded" : "Loading..."}</p>
                <div>
                    <button onClick={getData}>Refetch</button>
                </div>
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                {products && (
                    <div
                        key={products.id}
                        style={{
                            border: "1px solid",
                            backgroundColor: "gray",
                            padding: "1rem",
                        }}
                    >
                        <h1>{products.title}</h1>
                        <img
                            src={products.image}
                            alt={products.title}
                            style={{ height: "5rem" }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}