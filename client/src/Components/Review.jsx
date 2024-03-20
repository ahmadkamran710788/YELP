import React from "react";
import StarRating from "./StarRating";

const Review = ({ reviews }) => {
  return (
    <div className="row row-cols-3 mb-3">
      {reviews.map((item) => {
        return (
          <div
            key={item.id}
            className="card text-white bg-primary mb-3 mr-3"
            style={{ maxWidth: "30%", marginRight: "30px" }}
          >
            <div className="card-header d-flex justify-content-between">
              <span>{item.name}</span>
              <span>
                <StarRating rating={item.rating} />
              </span>
            </div>
            <div className="card-body">
              <p className="card-text">{item.content}</p>
            </div>
          </div>
        );
      })}

      {/* <div
        className="card text-white bg-primary mb-3 mr-3"
        style={{ maxWidth: "30%", marginRight: "30px" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>Ahmad</span>
          <span>
            <StarRating rating={3} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">this restaurant was awesome</p>
        </div>
      </div>

      <div
        className="card text-white bg-primary mb-3 mr-4"
        style={{ maxWidth: "30%", marginRight: "30px" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>Ahmad</span>
          <span>
            <StarRating rating={3} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">this restaurant was awesome</p>
        </div>
      </div>

      <div
        className="card text-white bg-primary mb-3 mr-4"
        style={{ maxWidth: "30%", marginRight: "30px" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>Ahmad</span>
          <span>
            <StarRating rating={3} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">this restaurant was awesome</p>
        </div>
      </div>

      <div
        className="card text-white bg-primary mb-3"
        style={{ maxWidth: "30%" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>Ahmad</span>
          <span>
            <StarRating rating={3} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">this restaurant was awesome</p>
        </div>
      </div> */}
    </div>
  );
};

export default Review;
