import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import './ProductDetails.css';

function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                const res = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                if (!data) {
                    throw new Error('Product not found');
                }
                setProduct(data);
            } catch (err) {
                setError(err.message || 'Failed to fetch product');
                console.error('Error fetching product:', err);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchProduct();
        }
    }, [id]);

    const handleAddToCart = () => {
        // You can implement cart logic here
        alert(`${product.title} added to cart!`);
        //  Implement actual cart functionality
    };

    if (loading) return <div className="loading">Loading product details...</div>;
    if (error) return <div className="error">Error: {error}</div>;
    if (!product) return <div className="error">Product not found</div>;

    return (
        <div className="product-details-container">
            <button className="back-button" onClick={() => navigate('/products')}>
                ← Back to Products
            </button>
            <div className="product-details">
                <img src={product.image} alt={product.title} className="product-details-image" />
                <div className="product-details-info">
                    <h1>{product.title}</h1>
                    <p className="product-details-price">${product.price}</p>
                    <p className="product-details-description">{product.description}</p>
                    <div className="product-details-rating">
                        Rating: {product.rating.rate} ★ ({product.rating.count} reviews)
                    </div>
                    <div className="product-details-category">
                        Category: {product.category}
                    </div>
                    <div className="button-group">
                        <Link to={`/products/${id}/reviews`} className="view-details-btn">
                            View Reviews
                        </Link>
                        <button 
                            onClick={handleAddToCart}
                            className="add-to-cart-btn"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
}

export default ProductDetails;
