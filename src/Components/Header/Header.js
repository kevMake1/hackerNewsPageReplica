import React, {useContext} from 'react'
import SearchContext from '../../context/SearchContext'

import "./header.css"

export default function Header() {

    const { setSearchValue } = useContext(SearchContext);

    const inputChangedHandler = (e)=>{
        const value = e.target.value;
        setSearchValue(value);
    }

    return (
        <div className="Header">
            <h3>Hacker News</h3>
            <input onChange={inputChangedHandler} />
            <h5>by Kevaughn</h5>
        </div>
    )
}
