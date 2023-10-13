import React from "react";
import { useState } from "react";

function ListingCard({ listing }) {
   const { description, image, location } = listing;
   const [isLiked, setIsLiked] = useState(false);

   function toggleLike(e) {
      e.stopPropagation();
      console.log("star clicked");
      setIsLiked(!isLiked);
   }
   return (
      <li className="card">
         <div className="image">
            <span className="price">$0</span>
            <img src={image} alt={description} />
         </div>
         <div className="details">
            {isLiked ? (
               <button className="emoji-button favorite active" onClick={(e) => toggleLike(e)}>
                  ★
               </button>
            ) : (
               <button className="emoji-button favorite" onClick={(e) => toggleLike(e)}>
                  ☆
               </button>
            )}
            <strong>{description}</strong>
            <span> · {location}</span>
            <button className="emoji-button delete">🗑</button>
         </div>
      </li>
   );
}

export default ListingCard;
