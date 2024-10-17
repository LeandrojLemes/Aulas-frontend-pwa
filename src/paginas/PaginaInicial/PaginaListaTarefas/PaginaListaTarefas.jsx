import { useState } from "react";
import BotaoCustomizado from "../../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../../comum/componentes/Principal/Principal";

import { AiFillRest } from "react-icons/ai";

const PaginaListaTarefas = () => {
  const [descricao, setDescricao] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const adicionarNaLista = () => {
    if (descricao && descricao.trim()) {
      tarefas.push(descricao);
      setTarefas([...tarefas]);
      setDescricao("");
      document.getElementById("campoDescricao").focus();
    } else {
      alert("Preencha o campo descricao");
    }
  };
  const removerDaLista = (index) => {
    tarefas.splice(index, 1);
    setTarefas([...tarefas]);
  };

  return (
    <Principal titulo="Lista de Tarefas" voltarPara="/">
      <div>
        <input
          id="campoDescricao"
          type="text"
          placeholder="Descrição da Tarefa"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              adicionarNaLista();
            }
          }}
        />

        <BotaoCustomizado aoClicar={adicionarNaLista}>+</BotaoCustomizado>
      </div>

      <ul>
        {tarefas.map((item, index) => {
          return (
            <li key={index}>
              {item}
              <AiFillRest
                color="gray"
                size={20}
                onClick={() => removerDaLista(index)}
              />
            </li>
          );
        })}
      </ul>
    </Principal>
  );
};

export default PaginaListaTarefas;
