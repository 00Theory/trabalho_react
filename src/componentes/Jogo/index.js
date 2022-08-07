import './Jogo.css'

const Jogo = (props) => {
    return(
        <div className='jogo'>
            <div className='titulo-jogo'>
                <h2>
                    {props.titulo}
                </h2>
            </div>
            <div className='conjunto'>
                <div className='parte-1'>
                    <img src={props.imagem1} alt={props.titulo} />
                    <p className='texto-jogo'>
                        {props.texto1}
                    </p>
                </div>
                <div className='imagem-meio'>
                    <img src={props.imagemMeio} alt={props.titulo}/>
                </div>
                <div className='parte-2'>
                    <img src={props.imagem2} alt={props.titulo} />
                    <p className='texto-jogo'>
                        {props.texto2}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Jogo