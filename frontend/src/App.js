import Header from "./Componentes/Header";
import Menu   from "./Componentes/Menu";

function App() {
    return (
        <div className="App">
            <Header/>
            <div>
                <div>
                    <Menu/>
                </div>
                <div>
                    {/*Aqui los paneles*/}
                </div>
            </div>
        </div>
    );
}

export default App;
