import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <header className='header'>
                <h1>Fake Store</h1>
                <div className='header-main'>
                    <Link to='/'>Home</Link>
                    <Link to='/shop'>Shop</Link>
                </div>
                <Link to='/cart'>Cart</Link>
            </header>
            <hr />
        </div>
    )
}

export default Header;
