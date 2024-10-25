import { useState } from "react";
import "./App.css";
import PostListProvider from "./components/Context/post-context";
import Footer from "./components/Footer";
import Header from "./components/Header";
import New_post from "./components/New_post";
import Postpage from "./components/postpage/Postpage";
import Sidebar from "./components/Sidebar";

function App() {
  const [currtab, setcurrtab] = useState("home");
  return (
    <PostListProvider>
      <div className="App">
        <Sidebar currtab={currtab} setcurrtab={setcurrtab} />
        <div className="content">
          <Header />
          <div className="homepage">
            {currtab === "home" ? <Postpage /> : <New_post />}
            <Footer />
          </div>
        </div>
      </div>
    </PostListProvider> 
  );
}

export default App;
