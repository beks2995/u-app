"use client";
import React, { useState } from "react";
import "./style.css";
import Image from "next/image";

const Reviews = () => {
  const carouselData = [
    {
      id: 1,
      text1:
        "Сотрудничество с вашей компанией было превосходным опытом. Ваш профессионализм, креативный подход и способность слушать клиента действительно выделяют вас среди других. Результат - удивительное веб-приложение, которое превзошло все наши ожидания. Благодарим за отличную работу! ",
      imageSrc: "/reviews/reviews-img1.svg",
      name: "Екатерина Андреевна",
      text3: "Руководитель проектов",
    },
    {
      id: 2,
      text1:
        "Ваша команда вдохновляет и впечатляет. Благодаря вам, наше веб-приложение стало реальностью, превзошло наши ожидания и поддерживается на высшем уровне. Спасибо за отличную работу!",
      imageSrc: "/reviews/reviews-img2.svg",
      name: "Андрей Иванович",
      text3: "Руководитель проектов",
    },
    {
      id: 3,
      text1:
        "Профессионализм и инновации вашей команды сделали наше веб-приложение настоящим хитом. Спасибо за творческий подход и выдающийся результат!",
      imageSrc: "/reviews/reviews-img3.svg",
      name: "Максим Андреевич",
      text3: "Руководитель проектов",
    },
    // Добавьте другие слайды
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? carouselData.length - 1 : prevSlide - 1
    );
  };
  return (
    <div className="carousel-container">
      {carouselData.map((slide, index) => (
        <div
          key={slide.id}
          className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
        >
       <div className="text-box">
       <h5 className="slide-text" >{slide.text1}</h5>
       </div>
          <Image
            src={slide.imageSrc}
            width={80}
            height={80}
            alt={`Slide ${slide.id}`}
          />
          <h4 className="slide-text">{slide.name}</h4>
          <p className="slide-text">{slide.text3}</p>
        </div>
      ))}
      <button className="carousel-button-prev " onClick={prevSlide}>
        &lt;
      </button>
      <button className="carousel-button-next" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Reviews;

// import React from "react";
// import "./style.css";
// import Slider from "react-slick";
// import Image from "next/image";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Reviews = () => {
//     const reviewsData = [
//         {
//           id: 1,
//           imageSrc: "/path-to-your-image2.jpg",
//           text:
//             "Сотрудничество с вашей компанией было превосходным опытом. Ваш профессионализм, креативный подход и способность слушать клиента действительно выделяют вас среди других. Результат - удивительное веб-приложение, которое превзошло все наши ожидания. Благодарим за отличную работу!",
//           name: "Екатерина Андреевна",
//         },

//         // Добавьте другие отзывы
//       ];

//       const sliderSettings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: true,
//       };
//   return (
//     <Slider {...sliderSettings}>
//     {reviewsData.map((review) => (
//       <div key={review.id} className="reviews-card">
//         <h3>{review.text}</h3>
//         <div className="reviews-card-box">
//           <Image src={review.imageSrc} width={99} height={50} alt="group3" />
//           <p className="reviews-card-name">{review.name}</p>
//           <p className="reviews-card-text">{review.name}</p>
//         </div>
//       </div>
//     ))}
//   </Slider>
//   );
// };

// export default Reviews;
