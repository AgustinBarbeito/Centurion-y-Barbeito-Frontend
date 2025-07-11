"use client"

import React from 'react';
import { Link, useLocation } from 'react-router-dom';


export default function KrustyHeader() {
  const location = useLocation();
  const navItems = [
    { label: 'INICIO', to: '/' },
    { label: 'MENÚ', to: '/menu' },
    { label: 'UBICACIONES', to: '/ubicaciones' },
    { label: 'NOSOTROS', to: '/nosotros' },
    { label: 'PEDIDO', to: '/pedido' },
  ];
  return (
    <header className="krusty-header">
      <div className="krusty-header-container">
        <div className="krusty-header-logo">
          <img src="/krusty-burger-logo.png" alt="Krusty Burger Logo" />
        </div>
        <nav className="krusty-header-nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={location.pathname === item.to ? 'active' : 'inactive'}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link to="/pedido">
          <button className="krusty-header-order-btn">
            <span role="img" aria-label="bag">🛒</span> ORDENAR
          </button>
        </Link>
      </div>
    </header>
  );
} 