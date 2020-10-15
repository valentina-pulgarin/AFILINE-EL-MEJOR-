import React from "react";
import "./Estadísticas.css";
import Navbar from "./Navbar";

export const Estadisticas = () => {
  return (
    <React.Fragment>
      <Navbar titulo="Estadísticas" />
      <h1>Estadísticas</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="fecha">Digite la fecha del balance deseado</p>
            <input max="2020-12-31" min="2020-01-01" type="date" />
          </div>
        </div>
        <div className="est-btn">
          <button
            type="btn"
            className="btn-est btn btn-lg active btn-block rounded-pill text-white"
          >
            Calcular
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Estadisticas;
