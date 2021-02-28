import React from 'react';
import useFetch from "../hooks/useFetch";

const detailUrl = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/';

export default function Details(props) {
    const {id, name} = props.item;
    const [{data: details, loading, error}] = useFetch(`${detailUrl}${id}.json`, {id, name});

    if (loading)
        return <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
            </div>
            <p>Loading</p></div>;

    if (error)
        return <div className="card"><p>Error! {error}</p></div>;

    return (
        <div className="card">
            <img className="card-img-top" src={details.avatar} alt={details.name}/>
            <div className="card-body">
                <h5 className="card-title">{details.name}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">City: {details.details.city}</li>
                <li className="list-group-item">Company: {details.details.company}</li>
                <li className="list-group-item">Position: {details.details.position}</li>
            </ul>
        </div>
    );
}
