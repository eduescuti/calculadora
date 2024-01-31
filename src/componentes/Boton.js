

function Boton(props) {

    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };

    return (
        <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`}
            onClick={() => props.manejarClick(props.texto)}>

            {props.texto}
        </div>
    );
}

export default Boton;