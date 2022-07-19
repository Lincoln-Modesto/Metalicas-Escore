// cargas 
const peso_proprio_concreto = 25 //kn/m³
const cargas_adicionais = 7.627 //kn/m²

// carga admissivel escoras
const escoras = [{
  nome: 'escoraço',
  peso: 13.58 
},
{
  nome: 'escoraço_2',
  peso: 18.41
},
{
  nome: 'escora_2t',
  peso: 17.80
},
{
  nome: 'escora_deck',
  peso: 25.77
},
{
  nome: 'escora_pa',
  peso: 17.08
},
{
  nome: 'escora_pb',
  peso: 22.80
}] //kgf

// 1 - Cargas Atuantes

function calcula_carga_escora(pe_direito, capeamento){
  
  const arr = escoras
 	
	const escoraço = -285.71*pe_direito+1885.70
	const escoraço_2 = -597.08*pe_direito+2756.89
	const escora_2t = -416.666*pe_direito+3250
	const escora_deck = -571.42*pe_direito+4827.14
	const escora_pa = -447.15*pe_direito+3253.23
	const escora_pb = -261.43*pe_direito+2611.11
  
  const arrEscorasCarga = new Array(
    {nome: 'escoraço', value: escoraço},
    {nome: 'escoraço_2', value: escoraço_2}, 
    {nome: 'escora_2t', value: escora_2t}, 
    {nome: 'escora_deck', value: escora_deck}, 
    {nome: 'escora_pa', value: escora_pa}, 
    {nome: 'escora_pb', value: escoraço})

  	arr.map((item, i) => {
      arrEscorasCarga.forEach((EscoraCarga) => {
        if(item.nome === EscoraCarga.nome){
					escoras[i] = {
            ...item,
            carga_adimissivel: EscoraCarga.value,
            carga_minorada: (EscoraCarga.value)/1.5
          }
        }
      })
  	})
  
  //capeamento
  const escora_escolhida = calculo_carga_atuante(capeamento)
  console.log(escora_escolhida)
}
      
function calculo_carga_atuante(capeamento){
  //capeamento em cm
  const peso_proprio = ((capeamento*0.01)*peso_proprio_concreto)+(cargas_adicionais )
  
  const peso_proprio_majorado = peso_proprio*140 // kg/m²
  const escora_escolhida = escolhe_escora(peso_proprio_majorado)
  return escora_escolhida
}

function escolhe_escora(peso_proprio_majorado){
    const peso_escora = []
    
    const escoras_filtradas = escoras.filter((escora) => { 
      if(escora.carga_minorada > peso_proprio_majorado){
        peso_escora.push(escora.peso)
        return escora
      }
    })
    
    const value = Math.min(...peso_escora)
    const escora_selecionada = escoras_filtradas.filter((escora) => {
      return escora.peso === value
    })
  
  return escora_selecionada
}

calcula_carga_escora(3, 6)