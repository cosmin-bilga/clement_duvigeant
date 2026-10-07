import { useState } from "react";
import { useNavigate } from "react-router";
import "./auth.css";

export default function Auth() {
  const [email, setEmail] = useState("admin@admin.fr");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handle_login = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    try {
      const response = await fetch(
        "http://localhost/clement_duvigeant/backend/auth/",
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      console.log("Logged in:", data);
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="auth-container">
      <h1>Connexion</h1>
      <form className="auth-form">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Mot de passe:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/*    <label htmlFor="new_password">New password:</label>
      <input type="password" name="new_password" placeholder="New Password" />
      <label htmlFor="confirm_password">New password:</label>
      <input
        type="password"
        name="confirm_password"
        placeholder="Confirm Password"
      /> */}
        <input
          type="submit"
          className="connexion-button"
          value="Se connecter"
          onClick={handle_login}
        ></input>
      </form>
    </div>
  );
}
