import React, {useState} from "react";
import axios from "axios";

const Login = ()=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e)=>{
        e.preventDefault();

        try {
            const response = await axios.post('/api/auth/login', {username, password});
            localStorage.setItem('token', response.data.token);
            alert('Inicio de sesion exitoso');
            window.location.href = '/';// linea agregada para resolver el login

        }catch (error){
            console.error(error);
            alert('Credenciales invalidas');

        }
    };

    return (
        <div>
            <h2>Iniciar sesion</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Usuario: </label>
                    <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e)=> setUsername(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label htmlFor="password">Contraseña: </label>
                    <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    required
                    />
                </div>
                <button type="submit">Iniciar sesion</button>
            </form>
        </div>
    );
};

export default Login;