import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { Button } from 'antd';
import { Element } from 'rc-scroll-anim';
import { Link } from 'react-router-dom';
import { assets } from '../data';


import banner from '../../../assets/images/undraw_good_doggy_4wfq.svg';

class Banner extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    isMobile: PropTypes.bool,
    navToShadow: PropTypes.func,
  }
  static defaultProps = {
    className: 'banner',
  }
  render() {
    const { className, isMobile, navToShadow } = this.props;
    return (
      <Element component="section" className={`${className}-wrapper page`} onChange={navToShadow}>
        <div className={className}>
          <div className={`${className}-img-wrapper`}>
            <img width="95%" src={banner} alt="" />
          </div>
          <QueueAnim
            type={isMobile ? 'bottom' : 'right'}
            className={`${className}-text-wrapper`}
            delay={300}
          >
            <h1 key="h1">Encontre Seu pet</h1>
            <p className="main-info" key="p">
              Conectando pessoas e animais
            </p>
            <Link to="pets" href="#" key="a">
              <Button type="primary">Encontrar</Button>
            </Link>
          </QueueAnim>
        </div>
      </Element>
    );
  }
}

export default Banner;
