import { useEffect } from 'react'
import useSWR from 'swr'

const Table = ({ resName }) => {

  const tables = "https://booking-app.herokuapp.com/admin/tables"
  
  // Fetch function
   const fetcher = () => fetch(tables).then(res => res.json())
  
   // swr for caching layer 
   const { data } = useSWR(tables, fetcher)

   useEffect(()=>{
    console.log('data changed');
   }, [data])

  return (
    <div className='tableContainer'>
      <h4 style={{textAlign: 'center'}}>Table number: { data ? data.filter((i)=> i.restaurant_name === resName)[0].table_number : <h2>No tables</h2>}</h4>
      <h4 style={{textAlign: 'center'}}>Booked: { data ? data.filter((i)=> i.restaurant_name === resName)[0].booked === false ? '❌' : '✅' : null}</h4>
    </div>
  );
}
 
export default Table;