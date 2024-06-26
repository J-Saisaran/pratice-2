
import './App.css'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Dashboard from './Dashboard'

import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Table from './Table';



function App() {


  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar/>
        <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar/>
          <div className="container-fluid">
            <Switch>
              <Route exact={true} path="/" component={Dashboard} />
              <Route exact={true} path = "/tables" component={Table} />
            </Switch>
            
          </div>
        </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
