import { useState } from "react";

export default function ChangePasswordForm() {
  const [email, setEmail] = useState("admin@admin.fr");
  const [password, setPassword] = useState("");
  const [new_password, setNewPassword] = useState("");
  const [password_confirm, setPasswordConfirm] = useState("");

  const handle_change = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("new_password", new_password);
    formData.append("password_confirm", password_confirm);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/change_password/`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          method: "POST",
          body: formData,
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      console.log("Changed password:", data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="new_password">New password:</label>
      <input
        type="password"
        name="new_password"
        value={new_password}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <label htmlFor="password_confirm">New password:</label>
      <input
        type="password"
        name="password_confirm"
        value={password_confirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <input
        type="submit"
        value="Changer le mot de passe"
        onClick={handle_change}
      ></input>
    </form>
  );
}
