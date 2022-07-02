import React from "react";
import pic from "../assets/img1.png";
export default function Main({ prod }) {
  return (
    <div className="col-md-4">
      <div class="card">
        <img src={pic} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{prod.name}</h5>
          <p class="card-text">{prod.title}</p>
          <a href="#" class="btn btn-primary">
            PKR: {prod.price}
          </a>
        </div>
      </div>
    </div>
  );
}
