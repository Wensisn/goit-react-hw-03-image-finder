import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import fetchImages from './FetchImages/FetchImages';
import { Button } from './Button/Button';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    photos: [],
    loadedAllPages: false,
    isLoading: false,
    error: null,
    ShowModal: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      await this.loadImages();
    }
  }

  changeSearchQuery = searchQuery => {
    if (searchQuery !== this.state.searchQuery) {
      this.setState({
        searchQuery,
        photos: [],
        page: 1,
        loadedAllPages: false,
        error: null,
      });
    }
  };

  loadImages = async () => {
    const { searchQuery, page } = this.state;

    if (searchQuery.trim() !== '') {
      this.setState({ isLoading: true, error: null });

      try {
        const data = await fetchImages(searchQuery, page);

        this.setState(prevState => {
          const state = {
            photos: [...prevState.photos, ...data.hits],
            page: prevState.page + 1,
          };

          if (data.totalHits === state.photos.length) {
            state.loadedAllPages = true;
          }

          return state;
        });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  };

  openImage = id => {
    const ShowModal = this.state.photos.find(item => item.id === id);
    this.setState({ ShowModal });
  };

  closeImage = () => {
    this.setState({ ShowModal: null });
  };

  render() {
    const { photos, page, isLoading, ShowModal, loadedAllPages } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.changeSearchQuery} />

        {photos && (
          <ImageGallery
            photos={photos}
            page={page}
            onOpenImage={this.openImage}
          />
        )}

        {photos.length > 0 && !loadedAllPages && (
          <Button onClick={this.loadImages}>Load more</Button>
        )}

        {isLoading && <Loader />}

        {ShowModal && (
          <Modal onClose={this.closeImage}>
            {
              <img
                src={this.state.ShowModal.largeImageURL}
                alt={this.state.ShowModal.tags}
                width="100%"
              />
            }
          </Modal>
        )}
      </>
    );
  }
}
