import { useState } from "react";
import Table from "./Table"

const Restaurant = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="restaurant-container">
      <span>{data.restaurant_name}</span>
      <span>${data.average_cost}</span>
      <span>{data.Hours}</span>
      <span>{data.Phone}</span>
      <span>{data.Location}</span>
      <span>{data.Services}</span>
      <div>
        <span>{data.Amenities}</span>
        <button type="button"
          onClick={()=> setIsOpen(prev => prev === true ? false : true)}>
          {isOpen === true ? <span>&#8593;</span> : <span>&#8595;</span>}
        </button>
      </div>
      {isOpen ? <Table resName={data.restaurant_name} /> : null}
    </div>
  );
}
 
export default Restaurant;