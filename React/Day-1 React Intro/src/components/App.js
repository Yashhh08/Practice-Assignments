import './App.css';
import ShowData from './ShowData';

function App() {

  const os = ["Android","Blackberry","Iphone","Windows Phone"];

  const mobileManufacturers = ["Samsung","HTC","Micromax","Apple"];

  return (
    <>

    <h1>Mobile Operating System</h1>

    <ShowData data={os}/>

    <h1>Mobile Manufacturers</h1>

    <ShowData data={mobileManufacturers}/>

    </>

  )
}

export default App;
