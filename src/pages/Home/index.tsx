import { Link } from "react-router-dom";

import "./styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Desafio Github API</h1>
      <h2>DevSuperior - Escola de programação</h2>
      <Link to="/searchprofile">
        <button className="btn btn-primary btn-lg text-secondary start-button">
          Começar
        </button>
      </Link>
    </div>
  );
};

export default Home;
