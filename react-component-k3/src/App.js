import React, { Component } from 'react';
import UserProfile from './FormValidation/UserProfile/UserProfile';
import ToDoList from './JSS_StyledComponent/BaiTapStyledComponent/ToDoList/ToDoList';
import DemoJSS from './JSS_StyledComponent/DemoJSS/DemoJSS';
import DemoTheme from './JSS_StyledComponent/Theme/DemoTheme';
import LifeCycleReact from './LifeCycleReact/LifeCycleReact';



class App extends Component {
  render() {
    return (
      <div>
        {/* <UserProfile /> */}
        {/* <DemoJSS /> */}
        {/* <DemoTheme /> */}
        {/* <ToDoList /> */}
        <LifeCycleReact />
      </div>
    );
  }
}

export default App;