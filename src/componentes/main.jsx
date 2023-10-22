import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { ApiProvider } from '../Context/Api'




ReactDOM.createRoot(document.getElementById('root')).render(
  <ApiProvider>
    <App/>
  </ApiProvider>
)
