import React from 'react'
import { Carousel } from 'react-bootstrap'

import './Carousel.css'

import imageslide from '../../../images/bg.jpg'
import imageslide1 from '../../../images/bg2.jpg'
import imageslide2 from '../../../images/bg3.jpg'

function ControlledCarousel() {
    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex, e) => {
    //     setIndex(selectedIndex);
    // };

    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://png.pngtree.com/thumb_back/fh260/background/20200805/pngtree-covid-background-vector-design-with-face-mask-image_384913.jpg'
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>
                        Face Mask
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://image.freepik.com/free-vector/coronavirus-protection-background-with-face-mask_23-2148687016.jpg'
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3></h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://image.freepik.com/free-vector/coronavirus-protection-background-with-mask_23-2148671755.jpg'
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>HeadPhone</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
}

export default ControlledCarousel;