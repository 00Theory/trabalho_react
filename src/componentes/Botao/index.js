import './Botao.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Botao = ({ nome, imagem, link}) => {

    const navegar = useNavigate()

    function handleClick() {
        console.log('Botao')
        navegar(link);
    }

    return (
        <div className='botoes'>
            <button onClick={handleClick} key={nome}>
                <h2> {nome} </h2>
                <img src={imagem} alt={nome} />
            </button>
        </div>

    )
}

export default Botao