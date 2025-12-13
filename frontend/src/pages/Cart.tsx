import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/client';
import Button from '../components/Button';
import { Trash2, ShoppingBag } from 'lucide-react';

const Cart: React.FC = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [processing, setProcessing] = useState(false);

    const fetchCart = async () => {
        try {
            const response = await api.get('/cart');
            setCart(response.data);
        } catch (error) {
            console.error("Error fetching cart", error);
            // Si falla por auth, redirigir login
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCart();
    }, []);

    const removeItem = async (id: number) => {
        try {
            await api.delete(`/cart/items/${id}`);
            fetchCart();
        } catch (error) {
            console.error("Error removing item", error);
        }
    };

    const checkout = async () => {
        setProcessing(true);
        try {
            const response = await api.post('/orders', {
                address: "Dirección de prueba 123",
                payment_method: "test"
            });
            alert(`Orden creada! ID: ${response.data.order_number}`);
            navigate('/');
        } catch (error) {
            console.error("Error creating order", error);
            alert("Error al crear la orden. Verifica stock o intenta nuevamente.");
        } finally {
            setProcessing(false);
        }
    };

    if (loading) return <div className="text-white text-center pt-32">Cargando carrito...</div>;

    if (!cart || cart.items.length === 0) {
        return (
            <div className="container mx-auto px-6 py-32 text-center">
                <ShoppingBag size={64} className="mx-auto text-slate-700 mb-6" />
                <h2 className="text-3xl font-bold text-white mb-4">Tu carrito está vacío</h2>
                <Button onClick={() => navigate('/')}>IR A LA TIENDA</Button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-6 py-32">
            <h1 className="text-4xl font-bold text-white mb-12 flex items-center gap-4">
                <ShoppingBag /> TU CARRITO
            </h1>

            <div className="grid lg:grid-cols-3 gap-12">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-6">
                    {cart.items.map((item: any) => (
                        <div key={item.id} className="flex gap-6 p-6 bg-slate-900 border border-slate-800 rounded-xl items-center">
                            <img src={item.product.image_url} alt={item.product.name} className="w-24 h-24 object-cover rounded-lg bg-slate-800" />
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-white">{item.product.name}</h3>
                                <p className="text-slate-400 font-mono text-sm mb-2">{item.product.category}</p>
                                <p className="text-cyan-400 font-mono">$ {item.product.price.toLocaleString()}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-white font-mono mb-2">Cant: {item.quantity}</p>
                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="text-red-400 hover:text-red-300 transition-colors p-2"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary */}
                <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl h-fit">
                    <h3 className="text-xl font-bold text-white mb-6">RESUMEN</h3>
                    <div className="flex justify-between mb-4 text-slate-400 font-mono">
                        <span>Subtotal</span>
                        <span>$ {cart.total.toLocaleString()}</span>
                    </div>
                    <div className="border-t border-slate-800 my-6"></div>
                    <div className="flex justify-between mb-8 text-white font-bold text-xl font-mono">
                        <span>TOTAL</span>
                        <span>$ {cart.total.toLocaleString()}</span>
                    </div>

                    <Button fullWidth onClick={checkout} disabled={processing}>
                        {processing ? 'PROCESANDO...' : 'FINALIZAR COMPRA'}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
