import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./modules/dashboard/Dashboard";
import Wallets from "./modules/wallets/Wallets";
import BankAccounts from "./modules/bankAccounts/BankAccounts";
// import Transactions from "./modules/transactions/Transactions";
// import Profile from "./modules/profile/Profile";
// import SignUp from "./modules/auth/SignUp";
import SignIn from "./modules/auth/SignIn";

const App: React.FC = () => {
  // Kullanıcının giriş yapıp yapmadığını kontrol eden değişken.
  // Gerçek uygulamada bu değişkeni auth durumuna göre dinamik hale getireceksiniz.
  const isLoggedIn = false;

  return (
    <Router>
      <Routes>
        {/* Ana sayfa: Kullanıcı giriş yapmışsa dashboard'a, yapmamışsa sign-in sayfasına yönlendir */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/dashboard" />
            ) : (
              <Navigate to="/sign-in" />
            )
          }
        />
        {/* Giriş ve Kayıt Sayfaları */}
        {/* <Route path="/sign-up" element={<SignUp />} /> */}
        <Route path="/sign-in" element={<SignIn />} />

        {/* Giriş yapmış kullanıcılar için layout ve iç sayfalar */}
        {isLoggedIn && (
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="wallets" element={<Wallets />} />
            <Route path="bank-accounts" element={<BankAccounts />} />
            {/* <Route path="transactions" element={<Transactions />} /> */}
            {/* <Route path="profile" element={<Profile />} /> */}
          </Route>
        )}
      </Routes>
    </Router>
  );
};

export default App;
