import React from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import Header from './Header';
import TaskListContextProvider from '../context/TaskListContext'
import "../App.css";

const App = () => {
  return(

    <TaskListContextProvider>
    <div className="github"> 
      <a href="https://github.com/Viraaaj/My-Tasks" target="_blanck">My-Tasks/Viraj</a> 
    </div>

      <div className="container">
        <div className="app-wrapper">
          <Header/>

          <div className="main">
              <TaskForm/>
              <TaskList/>
          </div>

          {/* <div className="github"> <a href="https://github.com/Viraaaj/My-Tasks" target="_blanck">My-Tasks/Viraj</a> </div> */}
          
    
        </div>
      </div>
    </TaskListContextProvider>
    
  ) 
}

export default App
