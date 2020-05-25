import React from 'react';
import { enquireScreen } from 'enquire-js';
import Header from '../Header/Header';
import Footer from '../../components/Footer/Footer';
import Banner from './components/Banner';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';

import './components/styles/home.less';
import './components/styles/responsive.less';

let isMobile = false;
enquireScreen((b) => {
  isMobile = b;
});


class Home extends React.PureComponent {
  state = {
    isMobile,
    showShadow: false,
  };

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
  }
  navToShadow = (e) => {
    this.setState({ showShadow: e.mode === 'leave' });
  }
  render() {
    return (
      [
        <Header className={this.state.showShadow ? 'show-shadow' : ''} />,
        <Banner isMobile={this.state.isMobile} navToShadow={this.navToShadow} />,
        <Section1 />,
        <Section2 />,
        <Section3 />,
        <Section4 isMobile={this.state.isMobile} />,
        <Footer />,
      ]
    );
  }
}
export default Home;
