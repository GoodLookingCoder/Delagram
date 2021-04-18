import Context from "./context/context"
import SignUp from "./Components/signup/signup"

import './App.css';

function App() {
  return (
    <Context>
      <SignUp/>
    </Context>
  );
}

export default App;