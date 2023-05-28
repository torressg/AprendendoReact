import { useState } from 'react'

export function Condicional() {
    const [email, setEmail] = useState('') // esse hook é feito para pegar o valor do input //
    const [userEmail, setUserEmail] = useState() // esse hook é feito para receber e armazenar o valor do input //
    const [userExists, setUserExists] = useState(false)

    function enviarEmail(e) {  // abrimos um método para receber info do input //
        e.preventDefault() // função para não atualizar a página //
        setUserEmail(email)// Damos o valor para o setUserEmail com o valor que o setEmail pegou quando o botão for clicado //
        setUserExists(true)
    }
    function limparEmail(e) {
        e.preventDefault()
        setUserEmail(' ') // Por darmos o valor vazio aqui, o setUserEmail fica 'false' o que faz com que a condicional não seja ativada //
        setUserExists(false)
    }


    return (
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input
                    type="email"
                    placeholder='Digite o seu e-mail...'
                    onChange={(e) => setEmail(e.target.value)}
                /> {/* Damos a order de pegar o valor do input via o evento criado lá em cima */}
                <button type='submit' onClick={enviarEmail}>Enviar E-mail</button>
                {userExists && ( // Aqui dizemos 'se o userEmail for 'true'', ou seja, ter um valor, ele imprime a div abaixo //
                    <div>
                        <p>O E-mail cadastrado é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar E-mail</button>
                    </div>
                )}
            </form>
        </div>
    )
}