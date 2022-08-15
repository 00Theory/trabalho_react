import Botao from "../Botao"
import "./EspacoBotoes.css"

const EspacoBotoes = () => {

    const jogos = [
        {
          nome: 'Não Nomeado',
          imagem: '/imagens/grazinha.png',
          link: '/nao-nomeado',
        },
        {
          nome: 'Dash and Get Out',
          imagem: '/imagens/dashAndGetOut.png',
          link:'/dash-and-get-out',
        },
        {
          nome: 'Square Problems',
          imagem: '/imagens/squareProblems.png',
          link:'/square-problems',
        },
        {
          nome: 'Pech',
          imagem: '/imagens/pech.png',
          link:'/pech',
        },
        {
          nome: 'Save Vein',
          imagem: '/imagens/saveVein.png',
          link:'/save-vein',
        },
        {
          nome: 'Lights Come Back',
          imagem: 'imagens/lightsComeBack.png',
          link:'/lights-come-back',
        }
      ]

    return(
        <section className='espaco-botoes'>
            {jogos.map(jogo => <Botao 
            key={jogo.nome} 
            nome={jogo.nome} 
            imagem={jogo.imagem}
            link={jogo.link}
            />)}
        </section>
    )
}

export default EspacoBotoes