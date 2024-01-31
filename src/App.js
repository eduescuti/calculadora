import './css/App.css';
import Boton from './componentes/Boton'

function App() {
	return (
		<div className="App">
			<div className='contenedorCalculadora'>

				<Boton texto="1" />
				<Boton texto="2" />
				<Boton texto="3" />
				<Boton texto="4" />
				<Boton texto="5" />
				<Boton texto="6" />
				<Boton texto="7" />
				<Boton texto="8" />
				<Boton texto="9" />
				<Boton texto="0" />
			</div>

		</div>
	);
}

export default App;
