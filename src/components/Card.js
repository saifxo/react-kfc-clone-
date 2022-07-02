import React from "react";
import pic from "../assets/img1.png";
import {Link} from "react-router-dom"

export default function Card({ prod }) {
  return (
    
    <div className="col-md-4">
      <Link to={`/detail/${prod.id}`} >
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
      </Link>
    </div>
    
    
  );
}
