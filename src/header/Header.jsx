import { Link } from 'react-router-dom';
import shoppingCart from '../assets/shopping-cart.png';
import headerStyles from './header.module.css';

const Header = () => {
    return (
        <div className={headerStyles.headerContainer}>
            <header className={headerStyles.header}>
                <h1>Fake Store</h1>
                <div className={headerStyles.headerMain}>
                    <Link to='/'>Home</Link>
                    <Link to='/catalogue'>Catalogue</Link>
                </div>
                <Link to='/cart'><img className={headerStyles.shoppingCart} src={shoppingCart} /></Link>
            </header>
            <hr />
        </div>
    )
}

export default Header;
