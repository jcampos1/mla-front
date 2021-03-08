import React from 'react';

const Description = ({description}) => (
    <div className="description">
        <span className="h3 font-weight-normal mb-4">
            Descripción
        </span>
        <p className="text-muted">
            {description}
        </p>
    </div>
);

export default Description;