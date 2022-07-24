import './ItemListContainer.css'

export default function ItemListContainer (props) {
    return (
        <div className='itemlistcontainer'>
            {props.greeting}
        </div>
    )
}