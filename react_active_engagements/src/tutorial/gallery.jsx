import React from 'react';
import './gallery.css';

const Gallery = ({ images }) => {
return (
<section className="gallery">
    {images.map((image, index) => (
    <div key={index} className="gallery-item">
        <img
        src={image.pictureURL}
        alt={image.altText}
        className="gallery-image"
        />
        <div className="image-overlay">
        <p className="image-name">{image.pictureName}</p>
        </div>
    </div>
    ))}
</section>
);
};

export default Gallery;
