import React from 'react';
import Spinner from 'react-spinkit';
import styles from './Spinner.module.css';

const SpinnerLoader = () => (
  <Spinner
    className={styles.spinner}
    name="ball-grid-pulse"
    color="green"
    fadeIn="none"
  />
);

export default SpinnerLoader;
