import React from 'react';
import { Container } from 'reactstrap';
import Categories from '../components/Categories';

const ContentLayout = (props) => (
    <>
        <Container className="my-3 px-0">
            {/* <Categories categories={["Electrónica, Audio y video", "iPod", "Reproductores", "iPod touch", "32 GB"]} /> */}
            <Categories categories={props.categories} />
        </Container>
        <Container className="bg-white">
            {props.children}
        </Container>
    </>
);

export default ContentLayout;