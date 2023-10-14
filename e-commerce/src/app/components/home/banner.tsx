import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';


class BannerCarousel extends Component {
    render() {
        return (
            <Carousel autoPlay infiniteLoop	 interval={3000} thumbWidth={100} dynamicHeight>
                <div>
                    <img src="https://ideogram.ai/api/images/direct/g8D1XSbNQOKAdlf8UuBbpw" width={300} />
                    <p className="legend"  >Legend 1</p>
                </div>
                <div>
                    <img src="https://ideogram.ai/api/images/direct/EF670bA4SY6jV7f5nw2lZw" width={300} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://ideogram.ai/api/images/direct/EF670bA4SY6jV7f5nw2lZw" width={300} />
                    <p className="legend">Legend 3</p>                    
                </div>
                <div>
                    <img src="https://ideogram.ai/api/images/direct/g8D1XSbNQOKAdlf8UuBbpw" width={300} />
                    <p className="legend"  >Legend 1</p>
                </div>
                <div>
                    <img src="https://ideogram.ai/api/images/direct/g8D1XSbNQOKAdlf8UuBbpw" width={300}/>
                    <p className="legend"  >Legend 1</p>
                </div>
                <div>
                    <img src="https://ideogram.ai/api/images/direct/g8D1XSbNQOKAdlf8UuBbpw" width={300} />
                    <p className="legend"  >Legend 1</p>
                </div>
                <div>
                    <img src="https://ideogram.ai/api/images/direct/g8D1XSbNQOKAdlf8UuBbpw" width={300} />
                    <p className="legend"  >Legend 1</p>
                </div>
                <div>
                    <img src="https://ideogram.ai/api/images/direct/g8D1XSbNQOKAdlf8UuBbpw" width={300} />
                    <p className="legend"  >Legend 1</p>
                </div>
            </Carousel>
        );

    }
}

export default BannerCarousel;

