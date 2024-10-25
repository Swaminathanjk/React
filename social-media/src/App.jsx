import { useState } from "react";
import "./App.css";
import PostListProvider from "./components/Context/post-context";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
function App() {
  // const [currtab, setcurrtab] = useState("home");
  // const [currpath, setcurrpath] = useState("/home");
  return (
    <PostListProvider>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Header />
          <div className="homepage">
            {/* {currtab === "home" ? <Postpage /> : <New_post />} */}
            {/* {currpath === "/home" ? <Postpage /> : currpath==="/newpost" && <New_post />} */}
            <Outlet />
            <Footer />
          </div>
        </div>
        
      </div>
    </PostListProvider>
  );
}

export default App;
