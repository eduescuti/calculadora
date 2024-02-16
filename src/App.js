import './css/App.css';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

	const [input, setInput] = useState('');

	function asignarInput(valor) {

		if (valor === "Clear") {
			setInput("");
		} else {
			setInput(input + valor);
		}

	};

	function calcularResultado() {
		if (input) {
			setInput(evaluate(input));
		} else {
			setInput("Error");
		}
	};

	return (
		<div className="App">
			<div className='titulo'>
				CALCULADORA
			</div>
			<div className='contenedorCalculadora'>
				<Pantalla input={input} />
				<div className='fila'>
					<Boton manejarClick={asignarInput} texto="1" />
					<Boton manejarClick={asignarInput} texto="2" />
					<Boton manejarClick={asignarInput} texto="3" />
					<Boton manejarClick={asignarInput} texto="+" />
				</div>
				<div className='fila'>
					<Boton manejarClick={asignarInput} texto="4" />
					<Boton manejarClick={asignarInput} texto="5" />
					<Boton manejarClick={asignarInput} texto="6" />
					<Boton manejarClick={asignarInput} texto="-" />
				</div>
				<div className='fila'>
					<Boton manejarClick={asignarInput} texto="7" />
					<Boton manejarClick={asignarInput} texto="8" />
					<Boton manejarClick={asignarInput} texto="9" />
					<Boton manejarClick={asignarInput} texto="*" />
				</div>
				<div className='fila'>
					<Boton manejarClick={asignarInput} texto="." />
					<Boton manejarClick={asignarInput} texto="0" />
					<Boton manejarClick={calcularResultado} texto="=" />
					<Boton manejarClick={asignarInput} texto="/" />
				</div>
				<div className='botonClear'>
					<Boton manejarClick={asignarInput} texto="Clear" />
				</div>
			</div>

		</div>
	);
}

export default App;
