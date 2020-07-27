import React from 'react';
import styles from './Header.css';
import Icon from '../../assets/ron.png';

const Header = () => {

  return (
    <section className={styles.Header}>
      <img width='500px' src={Icon} alt='ron swanson'/>
      <h1>I'm Bot Fucking Swanson</h1>
    </section>
  );

};

export default Header;
