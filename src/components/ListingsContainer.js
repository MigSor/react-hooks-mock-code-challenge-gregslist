import React from "react";
import ListingCard from "./ListingCard";
import { useEffect, useState } from "react";

function ListingsContainer() {
   const [listings, setListings] = useState([]);
   useEffect(() => {
      fetch("http://localhost:6001/listings")
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setListings(data);
         });
   }, []);
   return (
      <main>
         <ul className="cards">
            {listings.map((listing) => {
               return <ListingCard key={listing.id} listing={listing} />;
            })}
         </ul>
      </main>
   );
}

export default ListingsContainer;
