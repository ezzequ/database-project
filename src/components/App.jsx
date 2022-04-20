import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../App.css";
import Header from "./Header";
import Login from "./Login";
import OfflineFeed from "./OfflineFeed";
import OnlineFeed from "./OnlineFeed";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      <OnlineFeed />
      <OfflineFeed />
    </div>
  );
}

export default App;
