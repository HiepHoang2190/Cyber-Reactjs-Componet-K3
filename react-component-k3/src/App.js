import React, { Component } from 'react';
import UserProfile from './FormValidation/UserProfile/UserProfile';
import DemoHookUseState from './Hooks/DemoHookUseState';
import ToDoList from './JSS_StyledComponent/BaiTapStyledComponent/ToDoList/ToDoList';
import DemoJSS from './JSS_StyledComponent/DemoJSS/DemoJSS';
import DemoTheme from './JSS_StyledComponent/Theme/DemoTheme';
import LifeCycleReact from './LifeCycleReact/LifeCycleReact';
import DemoHookUseEffect from './Hooks/DemoHookUseEffect';
import DemoHookUseCallBack from './Hooks/DemoHookUseCallBack';



class App extends Component {
  render() {
    return (
      <div>
        {/* <UserProfile /> */}
        {/* <DemoJSS /> */}
        {/* <DemoTheme /> */}
        {/* <ToDoList /> */}
        {/* <LifeCycleReact /> */}
        {/* <DemoHookUseState /> */}
        {/* <DemoHookUseEffect /> */}
        <DemoHookUseCallBack />
      </div>
    );
  }
}

export default App;