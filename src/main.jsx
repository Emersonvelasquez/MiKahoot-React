import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routekahoot from './routes/RoutesKahoot.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Context } from './context/Context.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context>
    <Routekahoot/>
    </Context>
  </StrictMode>,
)
