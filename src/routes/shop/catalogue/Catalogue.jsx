import { useEffect, useState } from "react";
import Header from "../../../header/Header";
import { getRequestWithNativeFetch } from "./FetchData";
import { Counter } from "../Counter";
import catalogueStyles from './catalogue.module.css';

const Catalogue = () => {
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
            <h3>Catalogue Page</h3>

            {loading && (
                <div>Loading Catalogue...</div>
            )}

            {error && <div>{error}</div>}

            <ul>
                {
                    items && items.map(({id, title, image, price}) => (
                        <li className={catalogueStyles.item} key={id}>
                            <img className={catalogueStyles.img} src={image} />
                            <p>{title}</p>
                            <p>{price}</p>
                            <Counter />
                            <button>Add To Cart</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Catalogue;