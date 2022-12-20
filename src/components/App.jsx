import React, { useEffect, useState } from "react";
import people from "../data";
import Item from "./Item";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = people.length - 1;

  const handlePrev = () =>
    setCurrentIndex(currentIndex === 0 ? maxIndex : currentIndex - 1);
  const handleNext = () =>
    setCurrentIndex(currentIndex === maxIndex ? 0 : currentIndex + 1);

  useEffect(() => {
    const id = setInterval(handleNext, 5000);

    return () => {
      clearInterval(id);
    };
  }, [currentIndex]);

  return (
    <div className="outer-container">
      <div className="inner-container">
        <div className="title">
          <span>/</span>
          <h1>Carousel</h1>
        </div>
        <div className="items-container">
          {people.map((person, index) => {
            const { image, name, title, quote } = person;
            let className = "next";

            if (index === currentIndex) {
              className = "active";
            }
            if (
              index === currentIndex - 1 ||
              (index === maxIndex && currentIndex === 0)
            ) {
              className = "prev";
            }

            return (
              <Item
                key={index}
                image={image}
                name={name}
                title={title}
                quote={quote}
                className={className}
              />
            );
          })}
          <button className="prev-btn" onClick={handlePrev}>
            {"<"}
          </button>
          <button className="next-btn" onClick={handleNext}>
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
