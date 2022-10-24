import { Component } from 'react';
import { BsFillPaletteFill } from 'react-icons/bs';
import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';
export class Loader extends Component {
  state = {
    loading: false,
  };
  render() {
    return (
      <>
        <div className={css.loading}>
          <ThreeDots
            height="80"
            width="800"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      </>
    );
  }
}
