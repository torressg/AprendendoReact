function Form({ setName }){

    return(
        <div>
        <h1>Meu cadastro:</h1>
			<form> {/* Criação de formulário comúm, atribuindo o evento criado */}
				<div>
					<label htmlFor="name">Nome:</label>
					<input 
						type="text" 
						id="name" 
						name="name" 
						placeholder="Digite o seu nome" 
						onChange={(e) => setName(e.target.value)} // Resgata o valor do input //
					/>
				</div>
			</form>
		</div>
    )
}

export default Form