import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/client';
import Button from '../components/Button';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { token } = useAuth();
    const [product, setProduct] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [qty, setQty] = useState(1);
    const [adding, setAdding] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await api.get(`/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    const addToCart = async () => {
        if (!token) {
            navigate('/login');
            return;
        }
        setAdding(true);
        try {
            await api.post('/cart/items', {
                product_id: parseInt(id!),
                quantity: qty
            });
            navigate('/cart');
        } catch (error) {
            console.error("Error adding to cart", error);
            alert("No se pudo agregar al carrito");
        } finally {
            setAdding(false);
        }
    };

    if (loading) return <div className="text-white text-center pt-32">Cargando...</div>;
    if (!product) return <div className="text-white text-center pt-32">Producto no encontrado</div>;

    return (
        <div className="container mx-auto px-6 py-32">
            <button onClick={() => navigate(-1)} className="text-slate-400 hover:text-white flex items-center gap-2 mb-8">
                <ArrowLeft size={20} /> Volver
            </button>

            <div className="grid md:grid-cols-2 gap-12">
                <div className="rounded-2xl overflow-hidden border border-slate-700 bg-slate-800/50">
                    <img
                        src={product.image_url || 'https://via.placeholder.com/600'}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="space-y-8">
                    <div>
                        <span className="text-cyan-400 font-mono text-xs tracking-wider">{product.category}</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">{product.name}</h1>
                        <p className="text-3xl font-mono text-white">$ {product.price.toLocaleString()}</p>
                    </div>

                    <p className="text-slate-400 leading-relaxed text-lg border-l-2 border-slate-700 pl-6">
                        {product.description || "Descripción no disponible."}
                    </p>

                    <div className="flex items-center gap-4 p-4 bg-slate-900 rounded-lg border border-slate-800 w-fit">
                        <button
                            className="text-white px-3 py-1 hover:text-cyan-400"
                            onClick={() => setQty(Math.max(1, qty - 1))}
                        >-</button>
                        <span className="font-mono text-xl w-8 text-center">{qty}</span>
                        <button
                            className="text-white px-3 py-1 hover:text-cyan-400"
                            onClick={() => setQty(qty + 1)}
                        >+</button>
                    </div>

                    <div className="flex gap-4">
                        <Button onClick={addToCart} disabled={adding} fullWidth>
                            {adding ? 'AGREGANDO...' : 'AGREGAR AL CARRITO'}
                        </Button>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-green-400 font-mono">
                        <ShoppingBag size={16} />
                        <span>Disponibles: {product.stock} unidades</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
