import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../App.css";
import Login from "./Login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
