import React, { useState } from 'react';
import {
  Container,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    id: 1,
    src: '/imgHistoria/img-shopping.png',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    id: 2,
    src: '/imgHistoria/img-index-2.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
   {
    id: 3,
    src: '/imgHistoria/img-index-3.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
   {
    id: 4,
    src: '/imgHistoria/img-index-4.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
   {
    id: 5,
    src: '/imgHistoria/img-index-5.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
        <CarouselItem
            className="custom-tag"
            tag="div"
            key={item.id}
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
        >
        <img 
        src={item.src} 
        alt={item.altText}
        width='100%' />
            {/* <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption}/> */}
        </CarouselItem>
    );
  });

  return (
    <>
      <style>
        {
          `.custom-tag {
              max-width: 100%;
              height: 600px;
              background: black;
            }
            @media (max-width:600px){
                .custom-tag{
                    height: 400px;
                }
            }
            @media (max-width:500px){
                .custom-tag{
                    height: 330px;
                }
            }
            @media (max-width:400px){
                .custom-tag{
                    height: 250px;
                }
            }
            `
        }
      </style>
      <Container>
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Anterior" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Proximo" onClickHandler={next} />
        </Carousel>
      </Container>
    </>
  );
}

export default Example;