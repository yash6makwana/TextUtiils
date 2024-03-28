// import logo from "./logo.svg";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
// import About from "./components/About";
// import { useState } from "react";
// import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


// function App() {

//   const [mode, setMode] = useState('dark');

//   const [alert, setAlert] = useState(null);

//   const showAlert = (message, type) => {
//     setAlert({
//       msg:message,
//       type:type
//     })
//     setTimeout(() => {
//       setAlert(null);
//     }, 3000);
//   }

//   const toggleMode = () =>{
//     if(mode === 'light'){
//       setMode('dark');
//       document.body.style.backgroundColor = '#042743'; 
//       showAlert("Dark Mode has been Enabled...", "success")
//       document.title = "Dark Mode"
//       // setInterval(() => {
//       //   document.title = "Dark Mode Is Now"
//       // }, 2000);
//       // setInterval(() => {
//       //   document.title = "Dark Mode Is Now Insallation Now"
//       // }, 1500);
//     }
//     else{
//       setMode('light')
//       document.body.style.backgroundColor = 'white'; 
//       showAlert("Light Mode has been Enabled...", "success")
//       document.title = "Light Mode"
//       // setInterval(() => {
//       //   document.title = "Light Mode Is Now"
//       // }, 2000);
//       // setInterval(() => {
//       //   document.title = "Light Mode Is Now Insallation Now"
//       // }, 1500);
//     }
//   } 

//   return (
//     <>
//     <Router>
//     <Navbar title="Yash Makwana"  mode={mode}  toggleMode={toggleMode}/>
//     <Alert alert={alert}/>
//     <div className="container">
//       {/* <TextForm showAlert={showAlert}  heading="Enter the text to Analyze"/> */}
//     {/* { <About/> } */}
//     <Routes>
//           <Route path="/about">
//             <About />
//           </Route>
         
//           <Route path="/">
//           <TextForm showAlert={showAlert}  heading="Enter the text to Analyze"/>
//           </Route>
//     </Routes>
//     </div>
//     </Router>
//     </>
//   );
// }

// export default App ;



import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('dark');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'; 
      showAlert("Dark Mode has been Enabled...", "success")
      document.title = "Dark Mode"
              setInterval(() => {
                document.title = "Dark Mode Is Now"
              }, 2000);
              setInterval(() => {
                document.title = "Dark Mode Is Now Insallation Now"
              }, 1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'; 
      showAlert("Light Mode has been Enabled...", "success")
      document.title = "Light Mode"

    }
  } 

  return (
    <>
    <Router>
    <Navbar title="Yash Makwana"  mode={mode}  toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
      <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm showAlert={showAlert}  heading="Enter the text to Analyze"/>} />
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
