import { Link } from "react-router-dom";
import BotaoCustomizado from "../BotaoCustomizado/BotaoCustomizado";
import "./Principal.css";
import { TiArrowBack } from "react-icons/ti";

function Principal({ voltarPara, titulo, children }) {
  return (
    <main className="principal_root">
      <div className="principal_titulo">
        {voltarPara && (
          <Link to={voltarPara}>
            <TiArrowBack size={20} />
          </Link>
        )}

        <h1>{titulo}</h1>
      </div>

      {children}
    </main>
  );
}

export default Principal;
