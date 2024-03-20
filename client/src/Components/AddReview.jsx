import React, { useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantFinder from "../Apis/RestaurantFinder";
import { useNavigate } from "react-router-dom";

const AddReview = () => {
  const [name, SetName] = useState("");
  const [rating, SetRating] = useState("");
  const [review, SetReview] = useState("");
  const { id } = useParams();
  const navigation = useNavigate();
  const handlereview = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post(`${id}/Addreviews`, {
        name: name,
        rating: rating,
        content: review,
      });
      console.log(response);
      window.location.reload();
    } catch (error) {}
  };

  return (
    <div className="mb-2">
      <form action="">
        <div className="row">
          <div className="form-group col-8">
            <label htmlFor="name">Name</label>
            <input
              value={name}
              onChange={(e) => {
                SetName(e.target.value);
              }}
              id="name"
              placeholder="name"
              type="text"
              className="form-control"
            />
          </div>

          <div className="form-group col-4">
            <label htmlFor="rating">Rating</label>
            <select
              value={rating}
              onChange={(e) => {
                SetRating(e.target.value);
              }}
              id="rating"
              className="custom-select my-1 mr-sm-2"
              style={{ width: "100%", height: "60%" }}
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Review">Review</label>
          <textarea
            value={review}
            onChange={(e) => {
              SetReview(e.target.value);
            }}
            id="Review"
            cols="30"
            rows="10"
            className="form-control"
            style={{ marginBottom: "20px" }}
          ></textarea>

          <button
            type="submit"
            onClick={(e) => {
              handlereview(e);
            }}
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
