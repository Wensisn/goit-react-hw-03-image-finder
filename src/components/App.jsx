import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import fetchImages from './FetchImages/FetchImages';
import { Button } from './Button/Button';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    photos: [],
    loading: false,
    photoCard: null,
    loadedAllPages: false,
    isLoading: false,
    error: null,
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
        setTimeout(() => {
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
        }, 2000);
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  };

  // openImage = id => {
  //   const photoCard = this.state.photos.find(item => item.id === id);
  //   this.setState({ photoCard });
  //   console.log(photoCard);
  // };!!!!!

  render() {
    const { photos, searchQuery, isLoading, error } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.changeSearchQuery} />

        {photos && (
          <ImageGallery
            photos={this.state.photos}
            page={this.state.page}
            // onClick={this.openImage}!!!!!!
          />
        )}

        {this.state.photos.length > 0 && !this.state.loadedAllPages && (
          <Button onClick={this.loadImages}>Load more</Button>
        )}

        {isLoading && <Loader />}
      </>
    );
  }
}
