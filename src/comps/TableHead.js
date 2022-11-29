const TableHead = () => {
  const rows = ['Name', 'Avg cost', 'Hours', 'Phone', 'Location', 'Services', 'Amenities']
  return (
    <div className="restaurant-container">
      {rows.map((i) => <span>{i}</span>)}
    </div>
  );
}
 
export default TableHead;