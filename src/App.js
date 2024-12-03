import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import FirstPage from "./Pages/FirstPage";
import FirstQuestion from "./Pages/FirstQuestion";
import SecondQuestion from "./Pages/SecondQuestion";
import ThirdQuestion from "./Pages/ThirdQuestion";
import ThankYou from "./Pages/ThankYou";
import Result from "./Pages/Result";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" Component={FirstPage} />
          <Route exact path="/firstQuestion" Component={FirstQuestion} />
          <Route exact path="/secondQuestion" Component={SecondQuestion} />
          <Route exact path="/thirdQuestion" Component={ThirdQuestion} />
          <Route exact path="/thankYou" Component={ThankYou} />
          <Route exact path="/result" Component={Result} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
