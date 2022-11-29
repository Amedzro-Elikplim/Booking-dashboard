const Restaurant = ({ data }) => {
  return (
    <div className="restaurant-container">
      <span>{data.restaurant_name}</span>
      <span>${data.average_cost}</span>
      <span>{data.Hours}</span>
      <span>{data.Phone}</span>
      <span>{data.Location}</span>
      <span>{data.Services}</span>
      <span>{data.Amenities}</span>
    </div>
  );
}
 
export default Restaurant;