import React, {useState} from 'react';
import useFetch from "../hooks/useFetch";
import Details from "./Details";

const listUrl = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json';

export default function List() {
    const [detailItem, setDetailItem] = useState(null);
    const [{data: list, loading, error}] = useFetch(listUrl, []);

    if (loading)
        return <p>Loading</p>;

    if (error)
        return <p>Error! {error}</p>

    return (
        <div className="wrapper">
            <div className="card">
                <ul className="list-group list-group-flush">
                    {list.map(item => <li className="list-group-item" key={item.id}
                                          onClick={() => setDetailItem(item)}>{item.id} - {item.name}</li>)}
                </ul>
            </div>
            {detailItem && <Details item={detailItem}/>}
        </div>
    );
}
