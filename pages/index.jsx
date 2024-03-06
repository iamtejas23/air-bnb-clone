import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import Cards from '../components/Cards';
import Future from '../components/Future';
import favicon from '../public/assets/favicon.ico';

const index = () => {
    return (
        <>
            <Head>
                <link rel="icon" href={favicon} />
            </Head>
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