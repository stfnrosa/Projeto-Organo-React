import Colaborador from '../Colaborador/Colaborador'
import './Time.css'

const Time = (props) => {
    const cssFundo = { backgroundColor: props.corSecundaria }
    const cssBorda = { borderColor: props.corPrimaria }

    return (
        (props.colaboradores.length > 0) && <section className="time" style={cssFundo}>
            <h3 style={cssBorda}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador => <Colaborador 
                key={colaborador.nome} 
                nome={colaborador.nome} 
                cargo={colaborador.cargo} 
                imagem={colaborador.imagem} 
                corDeFundo={props.corPrimaria} />)}
            </div>
        </section>
    )
}

export default Time