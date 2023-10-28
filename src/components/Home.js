import React from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
  const carouselStyle = {
    maxWidth: '600px', 
    margin: '0 auto', 
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto', 
  };

  return (
    <div>
      <Carousel style={carouselStyle}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Hotdog_-_Evan_Swigart.jpg"
            alt="First Slide"
            style={imageStyle}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Hamburger_%2812164386105%29.jpg"
            alt="Second Slide"
            style={imageStyle}
          />
        </Carousel.Item>
      </Carousel>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate dignissim suspendisse in est ante. Egestas diam in arcu cursus euismod quis viverra nibh. Neque sodales ut etiam sit amet. Tempor id eu nisl nunc mi ipsum faucibus. Diam donec adipiscing tristique risus nec feugiat in fermentum. Sed viverra tellus in hac habitasse platea dictumst. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Sagittis purus sit amet volutpat consequat mauris nunc. Consectetur purus ut faucibus pulvinar elementum. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Vivamus at augue eget arcu dictum varius. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Condimentum lacinia quis vel eros donec ac. Tellus at urna condimentum mattis pellentesque id nibh tortor id. Sodales ut eu sem integer vitae. Sit amet dictum sit amet justo donec enim. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus.
      </p>
    </div>
  );
};

export default Home;
