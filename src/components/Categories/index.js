import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const Categories = ({categories}) => {
    const {length} = categories;

    return (
        <Breadcrumb 
            tag="nav" 
            listTag="div" 
            listClassName="p-0 mb-0"
            aria-label=">">
            {
                categories.map((category, index) => (
                    <BreadcrumbItem 
                        key={`category${index}`}
                        tag="span"
                        >
                        <small 
                            className={`extra-light ${(index+1) === length ? "font-weight-bold" : ""}`}>
                            {category}
                        </small>
                    </BreadcrumbItem>
                ))
            }
        </Breadcrumb>
    );
};

export default Categories;