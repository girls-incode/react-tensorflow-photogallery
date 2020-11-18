import './assets/css/style.css';
import './App.css';
import { Component } from 'react';
import ImagesComp from './components/ImagesComp';

class AppComp extends Component {
  constructor(props) {
    super(props);

    this.state = { title: props.msg, showImg: false };
  }

  handleClick = () => {
    this.setState({ showImg: !this.state.showImg, title: 'back nigfht' });
  };

  componentDidMount() {
    this.setState({ title: 'loadedddd' });
  }

  render() {
    return (
      <div className='App'>
        {this.state.title}
        {this.state.showImg && <ImagesComp />}
        <button
          onClick={this.handleClick}
          className='mt-5 bg-yellow-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
        >
          Press
        </button>
      </div>
    );
  }
}
export default AppComp;
