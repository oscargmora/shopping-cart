import Header from "../../../header/Header";
import PropTypes from 'prop-types';
import { Counter } from "../counter/Counter";
import cartStyles from './cart.module.css';

const Cart = ({addToBasket, basket}) => {
    return (
        <>
            <Header />
            <div className={cartStyles.ulContainer}>
                <ul className={cartStyles.ul}>
                    {
                        Object.keys(basket).map(key => (
                            <li className={cartStyles.item} key={key}>
                                <img className={cartStyles.img} src={basket[key][2]} />
                                <div>
                                    <p>{basket[key][1]}</p>
                                    <p>{basket[key][3]}</p>
                                    <Counter dataId={basket[key][0]} basket={basket} startingNumber={basket[key][0]} />
                                </div>
                                <button onClick={(e) => addToBasket(key, Number(e.target.previousSibling.firstChild.nextSibling.innerText), key[1], key[2], key[3])}>Update Cart</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <button>Checkout</button>
        </>
    )
}

Cart.propTypes = {
    addToBasket: PropTypes.func.isRequired,
    basket: PropTypes.object.isRequired,
}

export default Cart;