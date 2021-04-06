import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { RouterConfig } from './navegation/RouterConfig';
import {Provider} from "react-redux"
import {store} from "./redux/store"
function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <RouterConfig/>
        </BrowserRouter>
      </Provider>
     
    </div>
  );
}

export default App;
