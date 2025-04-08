// // import { useEffect, useState } from "react";
// // export default function LearnUseEffect(){
// //     const [count, setCount] = useState(0);
// //     const [clicked, setClicked] = useState(0);

// import { useEffect, useState } from "react";

// //     useEffect(() => {
// //         setCount(count +1);

// //     },[clicked] );
// //     return(
// //         <div>
// //         <h1>    Learn use Effect</h1>
// //         <div>{count}</div>
// //         <div>
// //         <button onClick={() => setClicked(clicked +1)}>Button</button>
        
// //         </div>
// //         </div>

// //     )

// // }
 
// export default function learUseEffect() {
//     const [products, setProducts] = useState(null); // Initialize as null to handle non-array responses

//     const getData = async () => {
//         const res = await fetch("https://fakestoreapi.com/products/1"); // Fetch a single product
//         const data = await res.json();
//         console.log("----", data);
//         setProducts(data); // Set the response directly
//     };

//     useEffect(() => {
//         getData();
//     }, []);

//     return (
//         <div>
//             <h1>Learn useEffect</h1>
//             <div>
//                 <p>{products ? "1 Product Loaded" : "Loading..."}</p>
//                 <div>
//                     <button onClick={getData}>Refetch</button>
//                 </div>
//             </div>
//             <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
//                 {products && (
//                     <div
//                         key={products.id}
//                         style={{
//                             border: "1px solid",
//                             backgroundColor: "gray",
//                             padding: "1rem",
//                         }}
//                     >
//                         <h1>{products.title}</h1>
//                         <img
//                             src={products.image}
//                             alt={products.title}
//                             style={{ height: "5rem" }}
//                         />
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }






import { useEffect, useState } from "react";

export default function LearnUseEffect() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("");

    const getData = async () => {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
        setFilteredProducts(data);
    };

    useEffect(() => {
        getData();
    }, []);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        filterProducts(term, category);
    };

    const handleCategoryChange = (e) => {
        const cat = e.target.value;
        setCategory(cat);
        filterProducts(searchTerm, cat);
    };

    const filterProducts = (search, cat) => {
        let result = products;
        if (search) {
            result = result.filter((p) =>
                p.title.toLowerCase().includes(search)
            );
        }
        if (cat) {
            result = result.filter((p) => p.category === cat);
        }
        setFilteredProducts(result);
    };

    return (
        <div style={{ fontFamily: "Arial, sans-serif" }}>
            {/* Hero Section */}
            <div
                style={{
                    background: "linear-gradient(135deg, #007bff, #00c6ff)",
                    padding: "60px 20px",
                    color: "white",
                    textAlign: "center",
                }}
            >
                <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
                    🛒 ShopEase
                </h1>
                <p style={{ fontSize: "20px" }}>
                    Your one-stop shop for amazing products!
                </p>
            </div>

            {/* Search & Filter Controls */}
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "20px",
                    padding: "30px",
                    backgroundColor: "#f9f9f9",
                }}
            >
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={handleSearch}
                    style={{
                        padding: "10px",
                        width: "250px",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                        fontSize: "16px",
                    }}
                />

                <select
                    value={category}
                    onChange={handleCategoryChange}
                    style={{
                        padding: "10px",
                        width: "200px",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                        fontSize: "16px",
                    }}
                >
                    <option value="">All Categories</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="women's clothing">Women's Clothing</option>
                </select>

                <button
                    onClick={getData}
                    style={{
                        backgroundColor: "#007bff",
                        color: "white",
                        padding: "10px 20px",
                        fontSize: "16px",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                        transition: "0.3s",
                    }}
                    onMouseOver={(e) =>
                        (e.target.style.backgroundColor = "#0056b3")
                    }
                    onMouseOut={(e) =>
                        (e.target.style.backgroundColor = "#007bff")
                    }
                >
                    🔄 Refresh
                </button>
            </div>

            {/* Product Listing */}
            <div
                style={{
                    padding: "30px",
                    backgroundColor: "#fff",
                }}
            >
                <h2
                    style={{
                        textAlign: "center",
                        fontSize: "28px",
                        marginBottom: "10px",
                        color: "#333",
                    }}
                >
                    🛍️ Explore Products
                </h2>
                <p style={{ textAlign: "center", color: "#777" }}>
                    Showing <strong>{filteredProducts.length}</strong> items
                </p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: "30px",
                        marginTop: "30px",
                    }}
                >
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            style={{
                                backgroundColor: "#fff",
                                border: "1px solid #eaeaea",
                                borderRadius: "12px",
                                padding: "16px",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                                transition: "transform 0.3s",
                                cursor: "pointer",
                                textAlign: "center",
                            }}
                            onMouseOver={(e) =>
                                (e.currentTarget.style.transform = "scale(1.03)")
                            }
                            onMouseOut={(e) =>
                                (e.currentTarget.style.transform = "scale(1)")
                            }
                        >
                            <img
                                src={product.image}
                                alt={product.title}
                                style={{
                                    width: "100%",
                                    height: "160px",
                                    objectFit: "contain",
                                    borderRadius: "8px",
                                    marginBottom: "12px",
                                }}
                            />
                            <h2
                                style={{
                                    fontSize: "16px",
                                    color: "#333",
                                    marginBottom: "8px",
                                }}
                            >
                                {product.title}
                            </h2>
                            <p
                                style={{
                                    fontWeight: "bold",
                                    color: "#007bff",
                                    margin: "0",
                                }}
                            >
                                ${product.price}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
