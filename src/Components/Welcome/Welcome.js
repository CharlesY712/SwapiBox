import React from "react";
import PropTypes from 'prop-types';
import "./Welcome.css";


const Welcome = ({crawl}) => {
  return (
    <div className="welcome">
      <section className="star-wars">
        <div className="crawl">
          <div className="title">
            <p>Episode {crawl.episode}  ({crawl.release})</p>
            <h1>{crawl.title}</h1>
          </div>
          <p>{crawl.crawl}</p>
        </div>
      </section>
    </div>
  );
};

export default Welcome;

Welcome.propTypes = {
  crawl: PropTypes.object
};