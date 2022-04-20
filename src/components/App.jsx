import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../App.css";
import Login from "./Login";
import MyPosts from "./MyPosts";
import CreatePost from "./CreatePost";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/myposts" element={<MyPosts />}></Route>
          <Route path="/createpost" element={<CreatePost />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
