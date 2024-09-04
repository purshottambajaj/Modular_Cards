import React from 'react';
import { FaArrowRight,FaArrowLeft } from "react-icons/fa6";

const MultiCardCarousel = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const cards = [
    {
      image: 'https://t4.ftcdn.net/jpg/02/81/89/73/360_F_281897358_3rj9ZBSZHo5s0L1ug7uuIHadSxh9Cc75.jpg',
    },
    {
      image: 'https://t4.ftcdn.net/jpg/02/81/89/73/360_F_281897358_3rj9ZBSZHo5s0L1ug7uuIHadSxh9Cc75.jpg',
    },
    {
      image: 'https://t4.ftcdn.net/jpg/02/81/89/73/360_F_281897358_3rj9ZBSZHo5s0L1ug7uuIHadSxh9Cc75.jpg',
    },
    {
      image: 'https://t4.ftcdn.net/jpg/02/81/89/73/360_F_281897358_3rj9ZBSZHo5s0L1ug7uuIHadSxh9Cc75.jpg',
    },
    {
      image: 'https://media.istockphoto.com/id/511061090/photo/business-office-building-in-london-england.jpg?s=612x612&w=0&k=20&c=nYAn4JKoCqO1hMTjZiND1PAIWoABuy1BwH1MhaEoG6w=',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  // Use conditional logic to reset index to create an infinite loop
  React.useEffect(() => {
    if (currentIndex > cards.length - 3) {
      setCurrentIndex(0);
    }
  }, [currentIndex, cards.length]);

  return (
    <div className="flex flex-col items-center p-4 bg-[#363C43] m-5 text-white rounded-2xl shadow-lg max-w-4xl ">
      <div className="flex justify-between items-center w-full mb-4 px-4">
      <button className="w-36 h-10 rounded-full bg-black relative  flex items-center justify-center shadow-lg text-white"
              style={{ boxShadow: '0 0 10px rgba(173, 216, 230, 0.7)' }}
            >
          <span className="mr-2"> Gallery </span>
          
        </button>
     
        <button className="w-40 h-10 rounded-full bg-custom-add relative right-5 flex items-center justify-center shadow-lg text-white"
              style={{ boxShadow: '0 0 10px rgba(173, 216, 230, 0.7)' }}
            >
          <span className="mr-2"> + ADD IMAGE </span>
          
        </button>
        <div className="">
          <button className="w-6 h-6 rounded-full bg-custom-dark relative right-10" onClick={handlePrev}>
          <button
              className="w-10 h-10 rounded-full relative right-2.5 bg-custom-dark flex items-center justify-center shadow-lg text-gray-400"
              style={{ boxShadow: '0 0 10px rgba(173, 216, 230, 0.7)' }}
            >
              <FaArrowLeft />
            </button>
          </button>
          
          <button className="w-8 h-15 rounded-full bg-custom-dark relative -left-2.5" onClick={handleNext}>
            <button
              className="w-10 h-10 rounded-full bg-custom-dark relative left-1 flex items-center justify-center shadow-lg text-gray-400"
              style={{ boxShadow: '0 0 10px rgba(173, 216, 230, 0.7)' }}
            >
              <FaArrowRight />
            </button>
          </button>
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="relative  bg-transparent max-w-6xl">
          <div
            className="flex transition-transform duration-500 ease-in-out "
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)`}} 
          >
            {cards.map((card, index) => (
              <div className="flex-none w-1/3 p-4 rounded-lg shadow-md" key={index}>
                <img
  className="w-full object-cover mb-4 rounded-lg h-40 max-w-lg transition-transform duration-300 cursor-pointer filter grayscale hover:grayscale-0 hover:scale-110 hover:-rotate-3"
  src={card.image}
  alt="Card"
/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiCardCarousel;
