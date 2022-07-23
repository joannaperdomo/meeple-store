import logo from './die.png';

function NavBar() {
    return (
        <div className='nav-bar'>
            <img  className='App-logo' src={logo} alt="" />
            <ul>
                <li>Nosotros</li>
                <li>Tienda</li>
                <li>Mi Perfil</li>
                <li>Cuenta</li>
            </ul>  
        </div>
    );
}

export default NavBar;

