import React from 'react';
import Carousel from 'react-multi-carousel';
import './Sliders.css';
import 'react-multi-carousel/lib/styles.css';
import workshop1 from '../../../images/center1.jpg';
import workshop2 from '../../../images/center2.jpg';
import workshop3 from '../../../images/center3.jpg';
import workshop4 from '../../../images/center4.jpg';
import workshop5 from '../../../images/center5.jpg';
import workshop6 from '../../../images/center6.jpg';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Sliders = () => {
    return (
        <section className="slider text-white py-5">
            <div className="container">
                <h3 className="text-center text-2xl fw-bold">Our <span className="txt-color">Labrador</span> Picture</h3>
                <div className="row">
                    <div className="col-12">
                        <Carousel
                            swipeable={false}
                            draggable={false}
                            showDots={true}
                            responsive={responsive}
                            ssr={true}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={2000}
                            keyBoardControl={true}
                            customTransition="all 1s linear"
                            transitionDuration={3000}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                            className="py-5"
                        >
                            <div className="p-3"><img class="img-fluid" src={workshop1} alt="" /></div>
                            <div className="p-3"><img class="img-fluid" src={workshop2} alt="" /></div>
                            <div className="p-3"><img class="img-fluid" src={workshop3} alt="" /></div>
                            <div className="p-3"><img class="img-fluid" src={workshop4} alt="" /></div>
                            <div className="p-3"><img class="img-fluid" src={workshop5} alt="" /></div>
                            <div className="p-3"><img class="img-fluid" src={workshop6} alt="" /></div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sliders;