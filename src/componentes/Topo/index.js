import './Topo.css'
import { NavLink } from 'react-router-dom'

const MenuTopo = () => {
    return (
        <header className='menu-topo'>
            <NavLink to='/' style={{
                textDecoration: 'none',
                display: 'flex',
                backgroundColor: '#6E44C3',
                padding: '120px',
                flexWrap: 'wrap',
                fontFamily: 'Montserrat',
                justifyContent: 'center',
                maxWidth: '100%'
         }} 
         end>
                <img src='/imagens/Logo-2.png' alt='logo' />
                <h1>Valino Games</h1>
            </NavLink>
        </header>
    )
}

export default MenuTopo