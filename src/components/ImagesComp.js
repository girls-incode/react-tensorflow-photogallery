import React, { Component } from 'react';

export default class ImagesComp extends Component {
  constructor(props) {
    super(props);
    console.log('1 constructor...');
    this.state = { timing: null, count: 0 };
    this.handleImg = this.handleImg.bind(this);
  }

  componentDidMount() {
    console.log('3 componentDidMount...');
    this.setState({
      timing: setInterval(() => {
        this.setState({ count: this.state.count + 1 });
      }, 2000),
    });
  }

  componentWillUnmount() {
    console.log('5 componentWillUnmount...');
    clearInterval(this.state.timing);
  }

  componentDidUpdate() {
    console.log('4 componentDidUpdate...');
  }

  handleImg() {
    this.setState({ count: 0 });
  }

  render() {
    console.log('2 component Render...');
    return (
      <div>
        <div className='flex'>
          <svg
            className='animate-spin h-5 w-5 mr-3 bg-indigo-600'
            viewBox='0 0 24 24'
          ></svg>
          {this.state.count}
        </div>
        <img
          className='rounded-lg md:w-56'
          src='https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80'
          width='448'
          height='299'
          alt=''
          onClick={this.handleImg}
        />
      </div>
    );
  }
}
