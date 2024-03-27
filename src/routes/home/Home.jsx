import Header from "../../header/Header";
import { Link } from 'react-router-dom';
import homeStyles from './home.module.css'

const Home = () => {
    return (
        <>
            <Header />
            <div className={homeStyles.home}>
                <h3 className={homeStyles.h3}>Stop Shop</h3>
                <p className={homeStyles.p}>The place for all your needs!</p>
                <Link to='/catalogue' className={homeStyles.link}><button className={homeStyles.button}>Shop Now!</button></Link>
            </div>
        </>
    )
}

export default Home;