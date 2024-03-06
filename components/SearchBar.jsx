import React from 'react';
import styles from '../styles/SearchBar.module.css';
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
    return (
        <div className={styles.con}>
            <div className={styles.SearchBar}>
                    <div className={styles.searchcon}>
                    <input type="text" placeholder="Location" className={styles.input} />
                            <input type="date" placeholder="Check-in" className={styles.input} />
                            <input type="date" placeholder="Check-out" className={styles.input} />
                            <input type="number" placeholder="Guests" className={styles.input} />
                            <button className={styles.button}><CiSearch size={24} /></button>
                    </div>
            </div>
            <hr className={styles.hr} />
        </div>
    )
}

export default SearchBar;