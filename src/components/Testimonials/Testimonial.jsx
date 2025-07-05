import React from 'react';
import Slider from 'react-slick';
import './Testimonial.css'; // Custom styles for slick dots

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, earum dolores veritatis eius dolorem quis natus error rem possimus ea.",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Alex",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, earum dolores veritatis eius dolorem quis natus error rem possimus ea.",
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Vikram",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, earum dolores veritatis eius dolorem quis natus error rem possimus ea.",
    img: "https://randomuser.me/api/portraits/men/65.jpg"
  },
  {
    id: 4,
    name: "Arjun",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, earum dolores veritatis eius dolorem quis natus error rem possimus ea.",
    img: "https://randomuser.me/api/portraits/men/77.jpg"
  },
  {
    id: 5,
    name: "Priya",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, earum dolores veritatis eius dolorem quis natus error rem possimus ea.",
    img: "https://randomuser.me/api/portraits/women/25.jpg"
  }
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="py-12 px-4 bg-gradient-to-t from-white to-gray-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">What our customers are saying</p>
          <h1 data-aos="fade-up" className="text-4xl font-extrabold">Testimonials</h1>
          <p data-aos="fade-up" className="text-sm text-gray-500 dark:text-gray-300 mt-2">
            Hear from those who’ve experienced our service. These kind words keep us inspired!
          </p>
        </div>

        <div data-aos="zoom-in" className="relative dark:text-white">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6 px-2" key={data.id}>
                <div className="bg-white dark:bg-slate-700/60 backdrop-blur-md border border-gray-200 dark:border-slate-600 shadow-xl hover:shadow-2xl transition-all duration-300 p-6 rounded-2xl flex flex-col items-center text-center relative">
                  <p className="absolute text-primary text-6xl top-2 left-4 font-serif opacity-20 select-none">&ldquo;</p>
                  <img src={data.img} alt={data.name} className="rounded-full w-24 h-24 border-4 border-primary shadow-md mb-4" />
                  <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-3">{data.text}</p>
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{data.name}</h2>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;