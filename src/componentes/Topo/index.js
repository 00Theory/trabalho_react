import './Topo.css'
import { NavLink } from 'react-router-dom'

const MenuTopo = () => {
    return (
        <div className='menu-topo'>
            <NavLink to='/' style={{
                textDecoration: 'none',
                display: 'flex',
                backgroundColor: '#6E44C3',
                padding: '80px',
                flexWrap: 'wrap',
                fontFamily: 'Montserrat',
                justifyContent: 'center',
                maxWidth: '100%'
         }} 
         end>
                <img src='/imagens/Logo-2.png' alt='logo' />
                <h1>Valino Games</h1>
            </NavLink>
        </div>
    )
}

export default MenuTopo