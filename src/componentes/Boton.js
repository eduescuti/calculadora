import '../css/Boton.css'

function Boton(props) {

    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };

    return (
        <div className={esOperador(props.texto) ? 'operador' : 'boton-contenedor'}
            onClick={() => props.manejarClick(props.texto)}>

            {props.texto}
        </div>
    );
}

export default Boton;