import '../css/Boton.css'

function Boton(props) {

    function esOperador(valor) {

        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };

    function esClear(valor) {
        return valor === 'Clear';
    };

    if (esClear(props.texto)) {

        return (
            <div className='clear'
                onClick={() => props.manejarClick(props.texto)}>

                {props.texto}
            </div>
        );

    } else {

        return (
            <div className={esOperador(props.texto) ? 'operador' : 'boton-contenedor'}
                onClick={() => props.manejarClick(props.texto)}>

                {props.texto}
            </div>
        );
    }
}

export default Boton;