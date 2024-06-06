import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Layout.css'; // Stil dosyasını gerektiği gibi oluşturun

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <nav className="sidebar">
        <div className="logo">
          <Link to="/">
            <img src="/path-to-logo.png" alt="Logo" />
          </Link>
        </div>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/wallets">Wallets</Link></li>
          <li><Link to="/bank-accounts">Bank Accounts</Link></li>
          <li><Link to="/transactions">Transactions</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
