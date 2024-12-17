import Card from '../Card'
import './Time.css'

const Time = (props) => {
    return(
        (props.colaboradores.length > 0) ? <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='cards'>
                {props.colaboradores.map( coloborador => <Card key={coloborador.nome} corDeFundo={props.corPrimaria} nome={coloborador.nome} cargo={coloborador.cargo} imagem={coloborador.imagem}/>)}
            </div>
        </section>
        : ''
    )
}

export default Time