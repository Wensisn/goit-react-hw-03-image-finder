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
  };

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const responce = await axios.get(
        `${BASE_URL}?key=${API_KEY}&q=yellow+flowers&image_type=photo`
      );

      this.setState({ photos: responce.data });
    } catch (error) {}

    this.setState({ loading: false });
  }

  selectPhoto = options => {
    console.log(options);
  };

  // buildSelectOptions = () => {
  //   return this.state.photos.hits.map(photo => ({
  //     value: photo.id,
  //     label: photo.tags,
  //   }));
  // };

  render() {
    const option = this.state.photos.map(photo => ({
      value: photo.id,
      label: photo.tags,
    }));

    return (
      <>
        <Select options={option} onChange={this.selectPhoto} />
        {this.state.loading && <div>Загружаем...</div>}
        {this.state.photos && <div>Hello</div>}
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
