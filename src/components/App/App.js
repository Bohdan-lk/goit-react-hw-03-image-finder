import React, { Component } from 'react';
import SpinnerLoader from '../Spinner/Spinner';
import Modal from '../Modal/Modal';
import SearchForm from '../SearchForm/SearchForm';
import Button from '../Button/Button';
import Gallery from '../Gallery/Gallery';
import TextError from '../Error/TextError';
import styles from './App.module.css';
import fetchedImages from '../../services/Api';

export default class App extends Component {
  state = {
    images: [],
    Loading: false,
    error: null,
    notFound: false,
    page: 1,
    isModal: false,
    fullviewimg: '',
    value: '',
  };


  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;


    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
    if (prevState.images.length > 12) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;
    this.setState({Loading:true });

    fetchedImages
      .fetchImagesWithQuery(searchQuery, page)
      .then((images) => {
        if (images.length === 0) {
          return this.setState({ images: [], notFound: true });
        }
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
          notFound: false,
          error: null,
        }));}
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({Loading:false }));
  };

  handleSearchFormSubmit = (query) => {
    this.setState({
      searchQuery: query,
      page: 1,
      images: [],
    });
  };

  scrollPage = async () => {
    this.setState((state) => ({
      page: state.page + 1,
    }));
    await this.fetchImages();
  };


  handleCloseModal = () => this.setState({ isModal: false });

  handleOpenModal = fullviewimg =>
    this.setState({ isModal: true, fullviewimg });


  render() {
    const {
      images,
      Loading,
      error,
      notFound,
      isModal,
      fullviewimg,
    } = this.state;
    return (
      <div className={styles.app}>
        <SearchForm onSubmit={this.handleSearchFormSubmit}/>
        {!!images.length && (
          <>
            <Gallery items={images} onClick={this.handleOpenModal}/>
            <Button onClick={this.scrollPage}/>
          </>
        )}
        {Loading && <SpinnerLoader />}
        {notFound && <TextError>Not Found images! </TextError>}
        {error && <TextError>Whoops, something went wrong: {error.message} </TextError>}
        {isModal && (
          <Modal onClose={this.handleCloseModal} imgUrl={fullviewimg} />
        )}
      </div>
    );
  }
}

