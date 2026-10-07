import "./deconnexion.css";

export default function Deconnexion() {
  let connected = false;
  if (localStorage.getItem("token")) connected = true;

  const disconnect = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  if (connected)
    return (
      <button onClick={disconnect} className="disconnect-button">
        Deconnexion
      </button>
    );
  return <></>;
}
