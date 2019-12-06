import React from "react";
import image1 from "../../images/home/images/blog/01.jpg";
import image2 from "../../images/home/images/02.jpg";
import image3 from "../../images/home/images/04.jpg";
import "../../styles/home/article.css";

const Article = () => {
  return (
    <div className="container-art">
      <center>
        <div className="title">
          <h1>Our Latest Articles</h1>
          <hr />
        </div>
      </center>
      <div className="art-container">
        <div className="contain-item">
          <img className="art-image" src={image1} alt="" />
          <button className="art-btn1">Business</button>
          <h2>Does Your Life Lack Meaning</h2>
          <p>i truly believe Sixtus's words are true.</p>
          <div className="more">
            <h3>21 october 2019</h3>
            <h4 className="more-btn">
              Read More <button>></button>
            </h4>
          </div>
        </div>
        <div className="contain-item">
          <img className="art-image" src={image3} alt="" />
          <button className="art-btn1">Business</button>
          <h2>Supercharge Your Motivation</h2>
          <p>We also know those epic stories, those modern-day.</p>
          <div className="more">
            <h4>21 october 2019</h4>
            <h4 className="more-btn">
              Read More <button>></button>
            </h4>
          </div>
        </div>
        <div className="contain-item">
          <img className="art-image" src={image2} alt="" />
          <button className="art-btn1">Business</button>
          <h2>Helen Keller A Teller & A Seller</h2>
          <p>i truly believe Sixtus's words are true.</p>
          <div className="more">
            <h4>21 october 2019</h4>
            <h4 className="more-btn">
              Read More <button>></button>
            </h4>
          </div>
        </div>
      </div>
      <button className="more-articles-btn">More Article</button>
    </div>
  );
};
export default Article;
