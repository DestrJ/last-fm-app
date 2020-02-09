import React from "react";

export const getImageFromArray = (images, alt) => {
    let image = '';
    if (Array.isArray(images) && images.length) {
        const imageUrl = images[(images.length - 1)]['#text'];

        if ( imageUrl ) {
            image = (<img src={imageUrl} alt={alt} />);
        }
    }
    return image;
};