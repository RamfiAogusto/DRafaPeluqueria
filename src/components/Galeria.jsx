import React from "react";
import "../index.css";
/* import Aboutimg from "../assets/Aboutimg.webp"; */
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

function Galeria() {
    const images = [
        {
            original: "https://picsum.photos/id/1/200/300",
            thumbnail: "https://picsum.photos/id/1/200/300",
        },
        {
            original: "https://picsum.photos/id/1/218/303",
            thumbnail: "https://picsum.photos/id/1/218/303",
        },
        {
            original: "https://picsum.photos/id/1/200/300",
            thumbnail: "https://picsum.photos/id/1/200/300",
        },
        
    ];
    return (
        <div id="Galeria" className="bg-base-300">
            <ImageGallery 
                items={images} 
                slideDuration={1000}
                showThumbnails={false}
                autoPlay= {true}
            />
            
        </div>
    );
}

export default Galeria;
