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
import DemoReduxApp from './Hooks/DemoReduxApp';
import DemoUseSpring from './Hooks/ReactSpring/DemoUseSpring';
import Ex2UseSpring from './Hooks/ReactSpring/Ex2UseSpring';
import Ex3UseSpring from './Hooks/ReactSpring/Ex3UseSpring';
import Ex4UseTrail from './Hooks/ReactSpring/Ex4UseTrail';




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
        {/* <DemoUseContext /> */}
        {/* <DemoReduxApp /> */}
        {/* <DemoUseSpring /> */}
        {/* <Ex2UseSpring /> */}
        {/* <Ex3UseSpring /> */}
        <Ex4UseTrail />
      </ContextProvider>
    );
  }
}

export default App;