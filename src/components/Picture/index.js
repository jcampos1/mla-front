import React from 'react';

const Picture = ({
    picture,
    title
}) => {
    return (
        <img 
            className="picture"
            src={picture}
            alt={title}
            width="680"
            height="auto" />
    );
}

export default Picture;