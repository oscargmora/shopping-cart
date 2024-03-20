import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Header from "../../../header/Header";
import { getRequestWithNativeFetch } from "./FetchData";
import { Counter } from "../counter/Counter";
import catalogueStyles from './catalogue.module.css';

const Catalogue = ({ addToBasket, basket }) => {
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItems = async() => {
            try {
                const itemsData = await getRequestWithNativeFetch(
                    'https://fakestoreapi.com/products'
                );
                setItems(itemsData);
                setError(null);
            } catch (err) {
                setError(err.message);
                setItems(null);
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    return (
        <>
            <Header />

            <div className={catalogueStyles.ulContainer}>
                {loading && (
                    <div>Loading Catalogue...</div>
                )}

                {error && <div>{error}</div>}

                <ul className={catalogueStyles.ul}>
                    {
                        items && items.map(({id, title, image, price}) => (
                            <li className={catalogueStyles.item} key={id}>
                                <img className={catalogueStyles.img} src={image} />
                                <p className={catalogueStyles.title}>{title}</p>
                                <p>${price}</p>
                                <Counter dataId={id} basket={basket} />
                                <button onClick={(e) => addToBasket(id, Number(e.target.previousSibling.firstChild.nextSibling.innerText), title, image, price)}>Add To Cart</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

Catalogue.propTypes = {
    addToBasket: PropTypes.func.isRequired,
    basket: PropTypes.object.isRequired,
}

export default Catalogue;