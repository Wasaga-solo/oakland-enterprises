import React, { Component } from 'react'
import { BrowserRouter as Router,
   Switch,
   Route
   } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './pages/Home'
import Chairs from './pages/product-ranges/Chairs'
import OfficeDesks from './pages/product-ranges/OfficeDesks'
import Tables from './pages/product-ranges/Tables'
import Sofas from './pages/product-ranges/Sofas'
import TVStands from './pages/product-ranges/TVStands'
import Education from './pages/sectors/Education'
import Hospitality from './pages/sectors/Hospitality'
import Kitchen from './pages/sectors/Kitchen'
import Office from './pages/sectors/Office'
import Vision from './pages/aboutUs/Vision'
import Mission from './pages/aboutUs/Mission'
import CoreValues from './pages/aboutUs/CoreValues'
import History from './pages/aboutUs/History'
import News from './pages/News'
import ContactUs from './pages/ContactUs'

export class App extends Component {
  render() {
    return (
        <Router>
        <Layout>
         <Switch>
        <Route path="/" exact render={(props)=><Home {...props}/>}/>
        <Route path="/chairs" exact render={(props)=><Chairs {...props}/>}/>
        <Route path="/officedesks" exact render={(props)=><OfficeDesks {...props}/>}/>
        <Route path="/sofas" exact render={(props)=><Sofas {...props}/>}/>
        <Route path="/tables" exact render={(props)=><Tables {...props}/>}/>
        <Route path="/tvstands" exact render={(props)=><TVStands {...props}/>}/>
        <Route path="/education" exact render={(props)=><Education {...props}/>}/>
        <Route path="/hospitality" exact render={(props)=><Hospitality {...props}/>}/>
        <Route path="/kitchen" exact render={(props)=><Kitchen {...props}/>}/>
        <Route path="/office" exact render={(props)=><Office {...props}/>}/>
        <Route path="/vision" exact render={(props)=><Vision {...props}/>}/>
        <Route path="/mission" exact render={(props)=><Mission {...props}/>}/>
        <Route path="/corevalues" exact render={(props)=><CoreValues {...props}/>}/>
        <Route path="/history" exact render={(props)=><History {...props}/>}/>
        <Route path="/news" exact render={(props)=><News {...props}/>}/>
        <Route path="/contact" exact render={(props)=><ContactUs {...props}/>}/>
          </Switch>
        </Layout>
        </Router>

    )
  }
}

export default App


