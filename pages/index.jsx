import React from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import Cards from '../components/Cards';
import Future from '../components/Future';


const index = () => {
    return (
        <>
            
            <div>
                <Navbar />
                <SearchBar/>
                <Categories />
                <Cards />
                <Future />
            </div>
        </>
    )
}

export default index;