import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home/_Home";
import Error404 from "./Error404";

// firebase SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBucJeJS8ZkDNBp3OySO3WrL6nfnI_euOk",
  authDomain: "wagmibanners.firebaseapp.com",
  projectId: "wagmibanners",
  storageBucket: "wagmibanners.appspot.com",
  messagingSenderId: "993427127429",
  appId: "1:993427127429:web:dd9eedfcf78728f62ebdec",
  measurementId: "G-K26TFBNTCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/404">
          <Error404 />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
