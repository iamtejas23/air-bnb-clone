import React from 'react';
import Image from 'next/image';
import { FaFilter } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa6";
import styles from '../styles/Categories.module.css';
import beach from '../public/assets/sunrise.svg';
import country from '../public/assets/countryside.png';
import castle from '../public/assets/castle.png';
import lux from '../public/assets/room-service.png';
import farm from '../public/assets/farm.png';
import sailboat from '../public/assets/sailboat.png';
import rooms from '../public/assets/living-room.png';
import grapes from '../public/assets/grapes.png';
import lake from '../public/assets/lake.png';
import beachh from '../public/assets/beachh.png';

const Categories = () => {
  return (
    <div>
      <div className={styles.Categories}>
        <a><Image src={beach} alt="" />Amazing View</a>        
        <a><Image src={country} alt="" />Countryside</a>        
        <a><Image src={castle} alt="" />Castle</a>        
        <a><Image src={lux} alt="" />Luxe</a>        
        <a><Image src={farm} alt="" />Farm</a>        
        <a><Image src={sailboat} alt="" />Boats</a>        
        <a><Image src={rooms} alt="" />Rooms</a>        
        <a><Image src={grapes} alt="" />Vineyards</a>        
        <a><Image src={lake} alt="" />Lake</a>        
        <a><Image src={beachh} alt="" />Beach</a>     
        <div className={styles.functions}>
            <div className={styles.f1}><FaFilter /> Filters</div>    
            <div className={styles.s1}>Display total before taxes <FaToggleOn size={26} /></div>    
        </div>   
      </div>
      <hr className={styles.hr} />
    </div>
  )
}

export default Categories;