import { SidebarComponent } from "./component/Sidebar";
import './App.css';
import useSWR from 'swr'
import Restaurant from './comps/Restaurant';
import TableHead from './comps/TableHead';

const restaurants = "https://booking-app.herokuapp.com/admin/restaurants"
// const menus = "https://booking-app.herokuapp.com/admin/menus"
// const tables = "https://booking-app.herokuapp.com/admin/tables"


function App() {
  
  // Fetch function
  const fetcher = () => fetch(restaurants).then(res => res.json())
  
  // swr for caching layer 
  const { data, error } = useSWR(restaurants, fetcher)

  return (
    <>
    <SidebarComponent />
    <div className="App">
      {data ? <TableHead /> : <h1>{error}</h1>}
      {data ? data.map((i, index)=> <Restaurant data={i} key={i.restaurant_name + index} />) : <h1>{error}</h1>}
    </div>
    </>
  );
}

export default App;
