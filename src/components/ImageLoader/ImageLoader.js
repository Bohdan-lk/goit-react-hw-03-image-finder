import React, { Component } from 'react';
import styles from './ImageLoader.module.css';

const LOADED = {};

export default class ImageLoader extends Component {
  state = {
    loaded: LOADED[this.props.src],
  };

  static defaultProps = {
    className: '',
    loadingClassName: styles.imgLoading,
    loadedClassName: styles.imgLoaded,
  };

  onLoad = () => {
    LOADED[this.props.src] = true;
    this.setState(() => ({ loaded: true }));
  };

  render() {
    let { className, loadedClassName, loadingClassName } = this.props;

    className = `${className} ${
      this.state.loaded ? loadedClassName : loadingClassName
    }`;

    return (
      <img
        src={this.props.src}
        onClick={this.props.onClick}
        className={className}
        onLoad={this.onLoad}
        alt="fullscreenimage"
      />
    );
  }
}
