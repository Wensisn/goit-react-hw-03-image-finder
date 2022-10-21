import { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '29490532-fde9d4c0daff56b8071258c00';

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_API_KEY;

export class App extends Component {
  state = {
    photos: [],
    loading: false,
    photoCard: null,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const responce = await axios.get(BASE_URL, {
        params: {
          key: API_KEY,
          per_page: 20,
        },
      });

      this.setState({ photos: responce.data.hits });
    } catch (error) {}

    this.setState({ loading: false });
  }

  selectPhoto = async (option, page) => {
    try {
      const responce = await axios.get(BASE_URL, {
        params: {
          key: API_KEY,
          q: option.value,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: 'true',
          page,
          per_page: 20,
        },
      });
      this.setState({ photoCard: responce.data.hits[10] });
      console.log(responce.data.hits[10]);
    } catch (error) {}
  };

  buildSelectOptions = () => {
    return this.state.photos.map(photo => ({
      value: photo.q,
      label: photo.tags,
    }));
  };

  render() {
    const option = this.buildSelectOptions();

    return (
      <>
        <Select options={option} onChange={this.selectPhoto} />
        {this.state.photoCard && (
          <div>
            CARD
            <img
              src={this.state.photoCard.webformatURL}
              width="480"
              alt={this.state.photoCard.tags}
            />
          </div>
        )}
        {this.state.loading && <div>Загружаем...</div>}
        {this.state.photos && <div></div>}
      </>
    );
  }
}

// try {
//   const responce = await axios.get(BASE_URL, {
//     params: {
//       key: API_KEY,
//     },
//   });

//   this.setState({ photos: responce.data });
// } catch (error) {}

// `${BASE_URL}?key=${API_KEY}&q=yellow+flowers&image_type=photo`;
