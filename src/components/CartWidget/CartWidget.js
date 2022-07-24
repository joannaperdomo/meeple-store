import carrito from './carrito-de-compras.png';
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import './CartWidget.css'

export default function CartWidget () {
    return <div className='carrito'>
        <img src={carrito} alt="carrito de compras"/>
        <ItemListContainer greeting='¡Hola!'></ItemListContainer>
        </div>
}