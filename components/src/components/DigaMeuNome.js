function DigaMeuNome( props ){ // usamos esse 'props' para passar propriedades a essa funçao //
    return(
        <div>
            <p>Fala ai {props.nome}, de boa?</p> {/* Aqui nós chamamos a props que falamos la em cima, e juntamos com uma variável que queremos para dar o valor depois */}
        </div>
    )
}
// Nós podemos passar o props da seguinte forma também //
/*

function DigaMeuNome({ nome }) 
  E então na hora de invocar usar apenas o nome dado ao props:
    <p>Fala ai {nome}, de boa?</p>

*/

export default DigaMeuNome