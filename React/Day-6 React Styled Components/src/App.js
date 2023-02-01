import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className='App'>

      <Button bgColor={"#00bfff"} color={"white"}>Primary Button</Button>

      <Button bgColor={"white"} color={"black"}>Default Button</Button>

      <Button bgColor={"white"} color={"black"} borderStyle={"dashed"}>Dashed Button</Button>

      <Button bgColor={"white"} color={"black"} borderStyle={"none"}>Text Button</Button>

      <Button bgColor={"white"} color={"#00e1ff"} borderStyle={"none"}>Link Button</Button>

    </div>
  );
}

export default App;
