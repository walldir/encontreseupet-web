import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { page4, assets } from '../data';

export default function Page4(props) {
  const children = page4.map((item, i) => (
    <QueueAnim type="bottom" key={i.toString()}>
      <img key="user" className="user" src='https://avatars2.githubusercontent.com/u/8962359?s=460&u=b99ab990e0619625acbc578007185c272c029718&v=4' alt="" />
      <div key="comment" className="comment">
        {!props.isMobile && <img src={`${assets}/image/home/comments-leftpad-abd23.svg`} alt="" />}
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec libero lobortis, hendrerit tortor ut, elementum elit. Vivamus pellentesque diam ut pharetra facilisis.</span>
      </div>
      <h4>Lorem</h4>
      <p>Loren ipsum</p>
    </QueueAnim>
  ));
  return (
    <OverPack component="section" className="page-wrapper page4">
      <QueueAnim
        type="bottom"
        className="page text-center"
        leaveReverse
        key="a"
      >
        <div key="1" className="carousel-wrapper">
          <Carousel effect={props.isMobile ? 'scrollx' : 'fade'}>
            {children}
          </Carousel>
        </div>
      </QueueAnim>
    </OverPack>
  );
}

Page4.propTypes = {
  isMobile: PropTypes.bool,
};
