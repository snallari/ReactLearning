import logo from './logo.svg';
import './App.css';
import "./components/Greet"
import Greet from './components/Greet';
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionalComponent from './components/FunctionalComponent'
import ClassClick from './components/ClassClick';
import ClickBinding from './components/ClickBinding';
import Parent from './components/ParentChild/Parent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameDashboard/NameList';
import FormComponent from './components/Forms/FormComponent';
import { Fragment } from 'react';
import Fragments from './components/Fragments/Fragments';
import LifeCycle from './components/LifeCycle';
import RefsDemo from './components/RefsDemo';
import ParentRef from './components/Refs/ParentRef';
import Portals from './components/Portals/Portals';
import ErrorTest from './components/ErrorBoundry/ErrorTest';
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry';
import CounterClick from './components/RenderProps/CounterClick';
import  CounterHover from './components/RenderProps/CounterHover';
import Wraper from './components/RenderProps/Wraper';
import ComponentA from './components/Context/ComponentA';
import { UserProvider } from './components/Context/useContext';

import ParentPost from './components/API/ParentPost';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GetPost from './components/API/GetPostList/GetPost';
import CreatePost from './components/API/Dialogs/CreatePost';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { createTheme } from '@material-ui/core/styles';
import PostDetailsContainer from './components/API/Details/PostDetailsContainer';
import ClassesTheme from './components/API/ClassesTheme';
// function App() {
//   return (
//     <div className="App">
//        {/*<Greet name="shruti" heroName="Mom">
//         <p>This is me</p>
//       </Greet>
//       <Greet name="vin" heroName="friends">
//         <button>Party</button>
//       </Greet>
//       <Greet name="sanch" heroName="Mama"/>
//       <Welcome name="shruti" heroName="Mom">
//         <p>This is me</p>
//       </Welcome>
//       <Welcome name="vin" heroName="friends">
//         <button>Party</button>
//       </Welcome>
//        <Welcome name="sanch" heroName="Mama"/>
//       <Hello/> 
//       <Message/>
//       <Counter/> 
//       <FunctionalComponent/>
//       <ClassClick/> 
//       <ClickBinding/>
//       <Parent/>
//       <UserGreeting/>
//       <NameList/>
//       <FormComponent/>
//   <LifeCycle/>
//       <RefsDemo/>
//       <ParentRef/>
//       <Portals/>
//   <ErrorBoundry>  <ErrorTest name="joker"/></ErrorBoundry>  
//       <ErrorTest name="jokers"/>
//       <ErrorTest name="jokerss"/>
//       <CounterClick/>
//       <HoverClick god={"sai"}/>
//      <Wraper renderMe={(count, incrementcount)=><CounterClick counter={count} updateCounter={incrementcount}/> }/>
//      <Wraper renderMe={(count, incrementcount)=><CounterHover counter={count} updateCounter={incrementcount}/>} />
//     <UserProvider value={{name:"text"}, {age:"16"}}> 
//      <ComponentA/> 
//      </UserProvider> 
//      <GetPost/>
//      <CreatePost/> */}
//      <ParentPost/>
//     </div>
//   );
// }

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#002699',
//     },
//     secondary: {
//       main: '#ff9900',
//     },
//     error: {
//       main: '#ff0000',
//     },
//     background: {
//       default: '#fff',
//     },
//   },
//   overrides: {
//     MuiTimeline: {
//       root: {
//         backgroundColor: 'red',
//       },
//     },
//   }
// });

const App = () => (
  <ThemeProvider theme={ClassesTheme}>
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/">
            <ParentPost />
        </Route>
        <Route path="/posts">
            <ParentPost />
        </Route>
        <Route path="/postDetails">
           <PostDetailsContainer/>
        </Route>
      </Switch>
    </Suspense>
  </Router>
  </ThemeProvider>
);

export default App;
