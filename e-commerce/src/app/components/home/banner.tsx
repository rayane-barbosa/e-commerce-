import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';


class BannerCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="https://i.imgur.com/4wg8bZs.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://i.imgur.com/4wg8bZs.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://i.imgur.com/4wg8bZs.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );

    }
}

export default BannerCarousel;

