import Footer from "./components/Footer";

import Header from "./components/Header";
import Main from "./components/Main";
import { useState } from "react";


function App() {
  const [open,setOpen]=useState(false);

  return (
    <div className={open===true ? `App w-screen h-screen overflow-y-hidden`:`App w-screen h-screen` }>
   
      <Header open={open} setOpen={setOpen}/>

      <Main/>

      <Footer/>
      
    </div>
  );
}

export default App;
