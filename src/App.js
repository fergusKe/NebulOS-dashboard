import React from 'react'
import axios from 'axios'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/login/login'
import Sign from './pages/sign/sign'
// import UserAdmin from './pages/userAdmin'
import Overview from './pages/overview/overview'
import Setting from './pages/setting/setting'
import ReportCart from './pages/ReportCart/reportCart'
import Report from './pages/report/report'
import MemberReport from './pages/member-report/member-report'
import User from './pages/user/user'
import PromotionOverview from './pages/PromotionOverview/PromotionOverview'
import AdminProductLaunch from './pages/AdminProductLaunch/AdminProductLaunch'
import Bpmn from './pages/Bpmn/Bpmn'

import 'antd/dist/antd.css'
import './App.scss'

// import bpmn_starter from './pages/Bpmn/diagram/starter.bpmn'
// /public/diagram/starter.bpmn
// axios.get('https://cdn.staticaly.com/gh/bpmn-io/bpmn-js-examples/dfceecba/starter/diagram.bpmn')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });

  // const diagramXML = ''

// const tdPath = '/affiliate'
// const tdPath = ''

const App = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" render={() => <ReportCart rolePath="/user-admin/" />} />
      {/* <Route exact path="/login" component={Login} />
      <Route exact path="/sign" component={Sign} /> */}
      {/* user-admin */}
      <Route exact path="/user-admin/bpmn" render={() => <Bpmn rolePath="/user-admin/" url="https://cdn.staticaly.com/gh/bpmn-io/bpmn-js-examples/dfceecba/starter/diagram.bpmn" />} />
      <Route exact path="/user-admin/report" render={() => <PromotionOverview rolePath="/user-admin/" />} />
      <Route exact path="/user-admin/overview" render={() => <Overview rolePath="/user-admin/" />} />
      <Route exact path="/user-admin/product" render={() => <AdminProductLaunch rolePath="/user-admin/" />} />
      <Route exact path="/user-admin/setting" render={() => <Setting rolePath="/user-admin/" />} />
      <Route exact path="/user-admin/reportCart" render={() => <ReportCart rolePath="/user-admin/" />} />
      <Route exact path="/user-admin/report" render={() => <Report rolePath="/user-admin/" />} />
      <Route exact path="/user-admin/member-report" render={() => <MemberReport rolePath="/user-admin/" />} />
      <Route exact path="/user-admin/user" render={() => <User rolePath="/user-admin/" />} />
      {/* manager-admin */}
      <Route exact path="/manager-admin/overview" render={() => <Overview rolePath="/manager-admin/" />} />
      <Route exact path="/manager-admin/setting" render={() => <Setting rolePath="/manager-admin/" />} />
      <Route exact path="/manager-admin/reportCart" render={() => <ReportCart rolePath="/manager-admin/" />} />
      <Route exact path="/manager-admin/report" render={() => <Report rolePath="/manager-admin/" />} />
      <Route exact path="/manager-admin/user" render={() => <User rolePath="/manager-admin/" />} />
    </Switch>
  </HashRouter>
)

export default App
