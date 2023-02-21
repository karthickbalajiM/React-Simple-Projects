import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setAciveIndex] = useState(null);
  const onTitleClick = (index) => {
    // console.log(`clicked on title `, index);
    setAciveIndex(index);
  };
  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active':"";
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <React.Fragment className="ui styled accordion">
      {" "}
      {renderedItems}
      <h2>{activeIndex}</h2>
    </React.Fragment>
  );
};
export default Accordion;
