import Header from "../../header/Header";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Header />
            <h3>Stop Shop</h3>
            <p>The place for all your needs!</p>
            <Link to='/catalogue'>Shop Now!</Link>
        </>
    )
}

export default Home;