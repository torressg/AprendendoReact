import './App.css';
import DigaMeuNome from './components/DigaMeuNome';
import HelloWorld from './components/HelloWorld'; // Importamos o componente criado a parte para o App //

function App() {
  const nome = "Gabriela"
  return (
    <div className="App">
      <HelloWorld /> {/*Invocamos o componente, que renderizará o que foi declarado lá no arquivo dele*/}
      <DigaMeuNome nome="Guilherme"/> {/*Invocamos o componente, que renderizará o que foi declarado lá no arquivo dele, agora junto do props que declaramos lá no componente e atribuindo um valor a ele*/}
      <DigaMeuNome nome={nome}/>{/*Podemos passar variáveis para o pros*/}
    </div> 
  );
}

export default App;
