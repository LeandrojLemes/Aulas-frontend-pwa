import BotaoCustomizado from '../BotaoCustomizado/BotaoCustomizado';
import './Principal.css'

function Principal() {

    return <main className='principal_root'>
       <h1>Pincipal</h1>
        <BotaoCustomizado cor='primaria' aoClicar={() => alert('Clicou no botão')}>
            Botao Primário
        </BotaoCustomizado>


        <BotaoCustomizado cor='secundaria' aoClicar={() => alert('Clicou no botão')}>
        Botao Secundário
        </BotaoCustomizado>

        
        <BotaoCustomizado aoClicar={() => alert('Clicou no botão')}>
        Botao Padrão
        </BotaoCustomizado>

    </main>;

}

export default Principal;