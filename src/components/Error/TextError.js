import React from 'react'
import PropTypes from 'prop-types';
import styles from './TextError.module.css';

const TextError = props => {
  const { children } = props;
  return <p className={styles.text}>{children}</p>;
};

TextError.propTypes = {
  children: PropTypes.string.isRequired,
};

export default TextError;
