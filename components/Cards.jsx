import React from 'react';
import styles from '../styles/Cards.module.css';
import Image from 'next/image';
import p1 from '../public/assets/1.webp';
import p2 from '../public/assets/2.webp';
import p3 from '../public/assets/3.webp';
import p4 from '../public/assets/4.webp';
import p5 from '../public/assets/5.webp';
import p6 from '../public/assets/6.webp';
import p7 from '../public/assets/7.webp';
import p8 from '../public/assets/8.webp';
import p9 from '../public/assets/9.webp';
import p10 from '../public/assets/10.webp';
import p11 from '../public/assets/11.webp';
import p12 from '../public/assets/12.webp';
import Link from 'next/link';


const Cards = () => {
  return (
    <div>
    <div className={styles.containerapp}>
      <div className={styles.card}>
        <Image src={p1} alt="Luxury Villa" className={styles.image} />
        <div className={styles.details}>
          <h2>Luxury Villa</h2>
          <p className={styles.price}>$200/night</p>
          <div className={styles.rating}>
            {/* Render rating stars here */}
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <Image src={p2} alt="Cozy Cabin" className={styles.image} />
        <div className={styles.details}>
          <h2>Cozy Cabin</h2>
          <p className={styles.price}>$100/night</p>
          <div className={styles.rating}>
            {/* Render rating stars here */}
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <Image src={p3} alt="Cozy Cabin" className={styles.image} />
        <div className={styles.details}>
          <h2>Cozy Cabin</h2>
          <p className={styles.price}>$100/night</p>
          <div className={styles.rating}>
            {/* Render rating stars here */}
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <Image src={p4} alt="Cozy Cabin" className={styles.image} />
        <div className={styles.details}>
          <h2>Cozy Cabin</h2>
          <p className={styles.price}>$100/night</p>
          <div className={styles.rating}>
            {/* Render rating stars here */}
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <Image src={p5} alt="Cozy Cabin" className={styles.image} />
        <div className={styles.details}>
          <h2>Cozy Cabin</h2>
          <p className={styles.price}>$100/night</p>
          <div className={styles.rating}>
            {/* Render rating stars here */}
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <Image src={p6} alt="Cozy Cabin" className={styles.image} />
        <div className={styles.details}>
          <h2>Cozy Cabin</h2>
          <p className={styles.price}>$100/night</p>
          <div className={styles.rating}>
            {/* Render rating stars here */}
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <Image src={p7} alt="Cozy Cabin" className={styles.image} />
        <div className={styles.details}>
          <h2>Cozy Cabin</h2>
          <p className={styles.price}>$100/night</p>
          <div className={styles.rating}>
            {/* Render rating stars here */}
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <Image src={p8} alt="Cozy Cabin" className={styles.image} />
        <div className={styles.details}>
          <h2>Cozy Cabin</h2>
          <p className={styles.price}>$100/night</p>
          <div className={styles.rating}>
            {/* Render rating stars here */}
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <Image src={p9} alt="Cozy Cabin" className={styles.image} />
        <div className={styles.details}>
          <h2>Cozy Cabin</h2>
          <p className={styles.price}>$100/night</p>
          <div className={styles.rating}>
            {/* Render rating stars here */}
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <Image src={p10} alt="Cozy Cabin" className={styles.image} />
        <div className={styles.details}>
          <h2>Cozy Cabin</h2>
          <p className={styles.price}>$100/night</p>
          <div className={styles.rating}>
            {/* Render rating stars here */}
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <Image src={p11} alt="Cozy Cabin" className={styles.image} />
        <div className={styles.details}>
          <h2>Cozy Cabin</h2>
          <p className={styles.price}>$100/night</p>
          <div className={styles.rating}>
            {/* Render rating stars here */}
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <Image src={p12} alt="Cozy Cabin" className={styles.image} />
        <div className={styles.details}>
          <h2>Cozy Cabin</h2>
          <p className={styles.price}>$100/night</p>
          <div className={styles.rating}>
            {/* Render rating stars here */}
          </div>
        </div>
      </div>
      {/* Add more cards as needed */}
    </div>
    <div className={styles.moresection}>
        <h2>Continue exploring Countryside</h2>
        <div className={styles.show}>
            <Link href="/home">Show more</Link>
        </div>
    </div>
    </div>
    
  )
}

export default Cards;