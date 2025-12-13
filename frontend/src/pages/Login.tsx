import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';
import { User, Mail, Lock, ArrowRight } from 'lucide-react';

const Login: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { login, register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            if (isLogin) {
                await login(email, password);
            } else {
                await register(name, email, password);
            }
            navigate('/');
        } catch (err) {
            setError('Error de autenticación. Verifica tus credenciales.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto px-6 py-32 flex justify-center">
            <div className="w-full max-w-md bg-slate-900 border border-slate-800 p-8 rounded-2xl relative overflow-hidden">
                {/* Decorative gradients */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <h2 className="text-3xl font-bold text-white mb-2 text-center">
                    {isLogin ? 'BIENVENIDO' : 'CREAR CUENTA'}
                </h2>
                <p className="text-slate-400 text-center mb-8 text-sm font-mono">
                    {isLogin ? 'Accede a tu colección.' : 'Únete al club Aura.'}
                </p>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded mb-6 text-sm text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    {!isLogin && (
                        <div className="relative group">
                            <User className="absolute left-3 top-3 text-slate-500 group-focus-within:text-cyan-400 transition-colors" size={20} />
                            <input
                                type="text"
                                placeholder="Nombre completo"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-slate-950 border border-slate-700 text-white pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors"
                                required={!isLogin}
                            />
                        </div>
                    )}

                    <div className="relative group">
                        <Mail className="absolute left-3 top-3 text-slate-500 group-focus-within:text-cyan-400 transition-colors" size={20} />
                        <input
                            type="email"
                            placeholder="Correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-700 text-white pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors"
                            required
                        />
                    </div>

                    <div className="relative group">
                        <Lock className="absolute left-3 top-3 text-slate-500 group-focus-within:text-cyan-400 transition-colors" size={20} />
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-700 text-white pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors"
                            required
                        />
                    </div>

                    <Button type="submit" fullWidth disabled={loading} className="mt-6">
                        {loading ? 'PROCESANDO...' : (isLogin ? 'INICIAR SESIÓN' : 'REGISTRARSE')}
                    </Button>
                </form>

                <div className="mt-6 text-center">
                    <button
                        onClick={() => { setIsLogin(!isLogin); setError(''); }}
                        className="text-slate-400 hover:text-white text-sm flex items-center gap-2 mx-auto transition-colors"
                    >
                        {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
                        <ArrowRight size={14} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
