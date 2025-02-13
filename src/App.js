import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";


const App = () => {
  return (
    <Router>
      <div>

        <nav>
          <ul>
            <li>
              <Link to="/login">Iniciar Sesion </Link>
            </li>
            <li>
              <Link to="/register">Registrarse</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Aca podemos agregar mas rutas */}
          <Route path="/" element={
            <div>
              <h1>Mensaje de bienvenida</h1>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
