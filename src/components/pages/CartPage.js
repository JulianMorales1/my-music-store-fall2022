
import { Link } from 'react-router-dom'
const CartPage = ({ cartItems, emptyHandler }) => {


    const clickHandler = (e) => {

    }
    return (
        <div>
            <h2>Cart Page</h2>
            {cartItems.map(cartItem => {
                return (
                    <li>
                        <strong>{cartItem.title} </strong> <button class='btn btn-danger' id={cartItem.id} onClick={clickHandler}>Remove</button>
                    </li>
                )
            })}

            <div>
                <button onClick={(e) => { emptyHandler() }}>Empty Cart</button>
                <Link to='/'>
                    <button >Home</button>
                </Link>
            </div>
        </div>
    )
}

export default CartPage