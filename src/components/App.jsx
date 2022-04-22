import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../App.css";
import Header from "./Header";
import Login from "./Login";
import OfflineFeed from "./OfflineFeed";
import OnlineFeed from "./OnlineFeed";
import MyPosts from "./MyPosts";
import CreatePost from "./CreatePost";
import CreateAccount from "./CreateAccount";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/offline" element={<OfflineFeed />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/online" element={<OnlineFeed />}></Route>
          <Route path="/createAccount" element={<CreateAccount />}></Route>
          <Route path="/myposts" element={<MyPosts />}></Route>
          <Route path="/createpost" element={<CreatePost />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
