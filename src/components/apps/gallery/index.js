import React, { useEffect, useState, useRef } from "react";
import "./index.sass";
import Thumbnail from "./thumbnail";

const PER_PAGE = 6;

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [sliceIndex, setSliceIndex] = useState(0);
  const [paginated, setPaginated] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const ref = useRef();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );

      setImages(await response.json());
    };

    getData();
  }, []);

  useEffect(() => {
    const setPagination = () => {
      setPaginated(images.slice(sliceIndex, sliceIndex + PER_PAGE));
      setSliceIndex(sliceIndex + PER_PAGE);
    };

    setPagination();
    setSelectedImage(images[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const handleScroll = () => {
    if (ref.current) {
      const { scrollLeft, scrollWidth, clientWidth } = ref.current;

      if (scrollLeft + clientWidth > scrollWidth * 0.9) {
        setPaginated([
          ...paginated,
          ...images.slice(sliceIndex, sliceIndex + PER_PAGE),
        ]);
        setSliceIndex(sliceIndex + PER_PAGE);
      }
    }
  };

  return (
    <div className="gallery">
      <img
        className="image-view"
        src={selectedImage?.url}
        alt={selectedImage?.name}
      />

      <ul className="image-view__track" ref={ref} onScroll={handleScroll}>
        {paginated.map(({ thumbnailUrl, title, url }) => {
          return (
            <Thumbnail
              onClick={handleClick}
              {...{ thumbnailUrl, title, url }}
              key={url}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Gallery;
