import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './products.css';

function Products() {``
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products");
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        getData();
    }, []);

    const handleViewDetails = (productId) => {
        navigate(`/products/${productId}`);
    };

    if (loading) return <div className="loading">Loading products...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    return (
        <div className="products-container">
            <h1 className="products-title">Our Products</h1>
            <div className="products-grid">
                {products.map((product) => (
                    <div 
                        key={product?.id} 
                        className="product-card"
                        onClick={() => handleViewDetails(product.id)}
                        style={{ cursor: 'pointer' }}
                    >
                        <img
                            src={product?.image}
                            className="product-image"
                            alt={product?.title}
                        />
                        <div className="product-info">
                            <h2 className="product-name">{product?.title}</h2>
                            <div className="product-price">${product?.price}</div>
                            <div className="product-rating">
                                {'★'.repeat(Math.round(product?.rating.rate))}
                            </div>
                            <button 
                                className="view-details-btn"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleViewDetails(product.id);
                                }}
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products

export function ReviewPage() {
    return (
        <div className="review-page">
            <Link to={"../"}>Go Back</Link>
            <h2>Product Reviews</h2>
            <p>This is the review page.</p>
        </div>
    );
}
export function OverViewPage() {
    return (
        <div className="overview-page">
            <Link to={"../"}>Go Back</Link>
            <h2>Product Overview</h2>
            <p>This is the overview page.</p>
        </div>
    );
}