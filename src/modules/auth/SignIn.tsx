import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleSignIn = async () => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "user@example.com",
          password: "password",
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const user = { id: data.id, name: data.name, email: data.email };
        setUser(user); // Context'e kullanıcı verisini set ediyoruz
        navigate("/dashboard");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default SignIn;
