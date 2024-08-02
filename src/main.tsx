import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./redux/store/store"
import App from "./App"
import './style/App.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)


