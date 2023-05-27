function Infos({name}) { // Trazemos o props criado lá no App para ser recebido nesse componente //
	
	function gerarInfos(algumNome) { // Função comum de receber um parâmetro e escreve-lo //
		return `Olá, ${algumNome}, beleza?` 
}
	return <>
			{name && <p>{gerarInfos(name)}</p>} 
		   </>
}

export default Infos