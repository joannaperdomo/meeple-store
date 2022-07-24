import logo from './dado-logo.svg';
import CartWidget  from '../CartWidget/CartWidget';
import './NavBar.css'

function NavBar() {
    return (
        <div className='nav-bar'>
            <div className="Logo-container">
                <img  className='App-logo' src={logo} alt="" />
                <h1>Meeple Store</h1>
            </div>
            <div className='link-container'>
                <ul>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Tienda</a></li>
                    <li><a href="#">Ofertas</a></li>
                    <li><a href="#">Mi perfil</a></li>
                </ul>
                <CartWidget></CartWidget>  
            </div>
        </div>
    );
}

export default NavBar;

