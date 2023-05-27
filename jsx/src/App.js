import './App.css';

// Aprendendo sobre o arquivo JSX //
// Uma expressão em JS deve ser feita em '{}', como funções //
// Utiliza também tags para renderizar HTML //

function App() {
  const name = 'Guilherme' // Declaramos uma variável constante //
  let url = 'https://streetleague.com.br/wp-content/uploads/2019/01/2018_LuanOliveira_propage_actionshot.jpg'

  function mult(a, b){
    return (a * b)
  }
  return (
    <div className='App'>
      <h2>Aqui é um arquivo JSX</h2>
      <p>Olá, {name}</p> {/*Chamando uma variável (Constante), criada acima*/}
      <p>Soma: {2+2}</p> {/*Aqui invocamos função nativa do JS*/}
      <p>Multiplicação com função: {mult(3, 2)}</p> {/*Aqui invocamos uma função criada acima*/}
      <img src={url} alt="Luan Oliveira BluntFS" /> {/*Ao invés de colocar diretamente o link na propriedade da imagem, chamamos uma varíavel, com o valor necessário*/}
    </div>
  );
}

export default App;
