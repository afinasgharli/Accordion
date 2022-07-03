import React, { useState } from "react";

import { data } from "../data/data";

const Accordion = (props) => {
  const [state, setState] = useState(null);

  const [readMore, setReadMore] = useState(false);

  const handleEvent = (index) => {
    if (state == index) {
      setState(null);
    } else {
      setState(index);
    }
    setReadMore(false)
  };

  return (
    <div className="accordion">
      <ul>
        {data.map((item, index) => (
          <li key={index} className="item">
            <div
              className="accordion-heading"
              onClick={() => handleEvent(index)}
            >
              <span className="icon">
                <i className="fa-solid fa-plus"></i>
              </span>
              <h5 className="h5"> {item.question}</h5>
            </div>{" "}
            {state === index ? (
              <div>
                <div className="accordion-body">
                  <h6 className="h6"> {item.answer.titleFirst}</h6>
                  <p className="p"> {item.answer.textFirst}</p>
                  <h6 className="h6"> {item.answer.titleSecond}</h6>
                  <p className="p"> {item.answer.textSecond}</p>{" "}
                  <button className="btn" onClick={()=> readMore ? setReadMore(false) : setReadMore(true)}>
                    Read more
                  </button>
                  {readMore ? (
                    <p className="p read-more">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae veniam dolores quasi voluptates. Odit id, reiciendis nesciunt ex suscipit, aliquam molestiae error tenetur expedita qui, at odio facilis distinctio consectetur voluptates impedit maiores alias corporis consequatur nulla. Animi consequuntur officia a necessitatibus illum atque debitis quam. Neque voluptate repellendus, assumenda consequatur earum nisi. Unde vero modi enim libero distinctio blanditiis sint explicabo quia assumenda, temporibus, minus est soluta! Quasi maiores rem eligendi placeat fuga voluptatem quo! Consequatur architecto repudiandae, adipisci harum vel nulla vero illum voluptatem, cupiditate voluptates dolorem neque?</p>
                  ) :null}
                </div>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
