import React from 'react';

const Thumbnail = ({
    picture,
    title
}) => {
    return (
        <img 
            className="thumbnail"
            src={picture}
            alt={title}
            width="180"
            height="180" />
    );
}

export default Thumbnail;