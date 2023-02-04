import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/addContact" element={<AddContact/>}/>
        <Route path="/contactList" element={<ContactList/>} />
      </Routes>
    </div>
  );
}

export default App;
