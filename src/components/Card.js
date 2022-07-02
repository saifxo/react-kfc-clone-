import React from "react";
import pic from "../assets/img1.png";
import {Link} from "react-router-dom"

export default function Card({ prod }) {
  return (
    
    <div className="col-md-4">
      <Link to={`/detail/${prod.id}`} >
      <div className="card">
        <img src={pic} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{prod.name}</h5>
          <p className="card-text">{prod.title}</p>
          <a href="#" className="btn btn-primary">
            PKR: {prod.price}
          </a>
        </div>
      </div>
      </Link>
    </div>
    
    
  );
}
