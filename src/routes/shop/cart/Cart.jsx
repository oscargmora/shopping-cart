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
                                <div className={cartStyles.pricing}>
                                    <p>{basket[key][1]}</p>
                                    <p>${basket[key][3]}</p>
                                    <Counter dataId={basket[key][0]} basket={basket} startingNumber={basket[key][0]} />
                                </div>
                                <button className={cartStyles.updateCartButton} onClick={(e) => addToBasket(key, Number(e.target.previousSibling.firstChild.nextSibling.nextSibling.firstChild.nextSibling.innerText), key[1], key[2], key[3])}>Update Cart</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className={cartStyles.checkoutButtonContainer}>
                <button className={cartStyles.checkoutButton}>Checkout</button>
            </div>
        </>
    )
}

Cart.propTypes = {
    addToBasket: PropTypes.func,
    basket: PropTypes.object,
}

export default Cart;