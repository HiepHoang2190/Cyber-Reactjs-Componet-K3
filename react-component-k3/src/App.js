import React, { Component } from 'react';
import UserProfile from './FormValidation/UserProfile/UserProfile';
import DemoHookUseState from './Hooks/DemoHookUseState';
import ToDoList from './JSS_StyledComponent/BaiTapStyledComponent/ToDoList/ToDoList';
import DemoJSS from './JSS_StyledComponent/DemoJSS/DemoJSS';
import DemoTheme from './JSS_StyledComponent/Theme/DemoTheme';
import LifeCycleReact from './LifeCycleReact/LifeCycleReact';
import DemoHookUseEffect from './Hooks/DemoHookUseEffect';
import DemoHookUseCallBack from './Hooks/DemoHookUseCallBack';
import DemoHookUseMemo from './Hooks/DemoHookUseMemo';
import DemoUseRef from './Hooks/DemoUseRef';
import DemoUseReducer from './Hooks/DemoUseReducer';
import DemoUseContext from './Hooks/DemoUseContext';
import ContextProvider from './Hooks/Context/ContextProvider';



class App extends Component {
  render() {
    return (
      <ContextProvider>
        {/* <UserProfile /> */}
        {/* <DemoJSS /> */}
        {/* <DemoTheme /> */}
        {/* <ToDoList /> */}
        {/* <LifeCycleReact /> */}
        {/* <DemoHookUseState /> */}
        {/* <DemoHookUseEffect /> */}
        {/* <DemoHookUseCallBack /> */}
        {/* <DemoHookUseMemo /> */}
        {/* <DemoUseRef /> */}
        {/* <DemoUseReducer /> */}
        <DemoUseContext />
      </ContextProvider>
    );
  }
}

export default App;