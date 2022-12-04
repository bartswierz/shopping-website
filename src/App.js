import "./App.scss";
// import Navigation from "./components/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
// import Directory from "./components/directory/directory.component";
import Homepage from "./components/routes/homepage/homepage.component";

const App = () => {
  return (
    <Routes>
      {/* At the default path, display The Homepage Component */}
      <Route path="/" element={<Homepage />}></Route>
    </Routes>
  );
};

export default App;
