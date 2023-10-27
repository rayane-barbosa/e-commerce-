import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

interface ImageData {
  url: string;
}

interface State {
  imagesData: ImageData[];
}

const id = 0;

class BannerCarousel extends Component<{}, State> {
  state: State = {
    imagesData: [],
  };

  componentDidMount(): void {
    const url =
      "https://api.thecatapi.com/v1/images/search?limit=10&page=10&order=Desc";
    const api_key = "DEMO_API_KEY";

    fetch(url, {
      headers: {
        "x-api-key": api_key,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let imagesData = data;
        this.setState({ imagesData });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <Carousel
        autoPlay
        infiniteLoop
        interval={5000}
        showThumbs={false}
        dynamicHeight
      >
        {this.state.imagesData.map((imageData) => (
          <div key={id}>
            <Image
              src={imageData.url}
              alt="catImage"
              width={2000}
              height={800}
            />
          </div>
        ))}
      </Carousel>
    );
  }
}

export default BannerCarousel;
