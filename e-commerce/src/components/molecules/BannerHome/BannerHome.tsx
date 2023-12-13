import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { fetchImages } from "@/Api/Api";

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
    fetchImages()
      .then((imagesData) => {
        this.setState({ imagesData });
      })
      .catch((error) => {
        console.error(error);
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
