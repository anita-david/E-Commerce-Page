import { useState } from "react";
import type { MouseEvent } from "react";
import image1 from "../../assets/images/image-product-1.jpg";
import image2 from "../../assets/images/image-product-2.jpg";
import image3 from "../../assets/images/image-product-3.jpg";
import image4 from "../../assets/images/image-product-4.jpg";

import thumbnail1 from "../../assets/images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../../assets/images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../../assets/images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../../assets/images/image-product-4-thumbnail.jpg";

const images: string[] = [image1, image2, image3, image4];
const thumbnails: string[] = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];

function ProductGallery() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const openLightbox = () => setIsLightboxOpen(true);
  const closeLightbox = () => setIsLightboxOpen(false);

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative">
      {/* Main image */}
      <div className="w-full lg:w-[400px] mt-6 lg:mt-13 lg:ml-40 rounded-2xl relative">
        <img
          className="rounded-2xl cursor-pointer"
          src={images[currentIndex]}
          alt="Product"
          onClick={() => {
            if (window.innerWidth >= 1024) openLightbox(); // only desktop
          }}
        />

        {/* Arrows for small screens only */}
        <button
          className="absolute top-1/2 left-3 -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center lg:hidden"
          onClick={prevImage}
        >
          ‹
        </button>
        <button
          className="absolute top-1/2 right-3 -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center lg:hidden"
          onClick={nextImage}
        >
          ›
        </button>
      </div>

      {/* Thumbnails - only on large screens */}
      <div className="hidden lg:flex gap-6 mt-4 ml-50 pb-20 justify-center">
        {thumbnails.map((thumb, index) => (
          <img
            key={index}
            src={thumb}
            alt={`Thumbnail ${index + 1}`}
            className={`w-20 rounded-lg cursor-pointer hover:opacity-70 
              ${currentIndex === index ? "ring-2 ring-orange-500 opacity-70" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Lightbox - only large screens */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 overflow-y-auto bg-black/80 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <div
            className="relative"
            onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-1 text-black bg-white rounded-full h-10 w-10 text-2xl"
              onClick={closeLightbox}
            >
              ✕
            </button>

            <div className="flex items-center">
              <button
                className="text-black text-3xl px-4 bg-white rounded-full h-10 w-10"
                onClick={prevImage}
              >
                ‹
              </button>

              <img
                src={images[currentIndex]}
                alt="Lightbox Product"
                className="rounded-2xl max-w-[400px]"
              />

              <button
                className="text-black bg-white rounded-full w-10 h-10 text-3xl px-4"
                onClick={nextImage}
              >
                ›
              </button>
            </div>

            <div className="flex gap-4 mt-6 justify-center">
              {thumbnails.map((thumb, index) => (
                <img
                  key={index}
                  src={thumb}
                  alt={`Lightbox Thumbnail ${index + 1}`}
                  className={`w-20 rounded-lg cursor-pointer hover:opacity-70 
                    ${currentIndex === index ? "ring-2 ring-orange-500 opacity-70" : ""}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductGallery;
