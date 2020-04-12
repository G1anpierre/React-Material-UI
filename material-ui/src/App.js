import React, { Fragment } from 'react';
import './App.scss';


import {Header , Footer } from './components/Layouts';
import Exercises from './components/Exercises';
import { muscles, exercises} from './store';




class App extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      exercises,
      exercise: {},
      category: 'back'
    }
  }

  getExercisesByMuscles() {
    return Object.entries(
        this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise

        exercises[muscles] = exercises[muscles] 
        ? [...exercises[muscles], exercise] 
        : [exercise]

        return exercises
      }, {})
    )
  }

  handleCategorySelected = category => {
    this.setState({
      category
    })
  }
  
  handleExerciseSelected = id => {
    
    this.setState(({ exercises}) => {
      exercise: exercises.find(ex => ex.id === id);
    })
  }
  

  render( ) {

    

    const styles = {
      fontFamily: 'sans-serif',
      textAlign: 'center'
    }  

    console.log(this.getExercisesByMuscles());
    const exercises = this.getExercisesByMuscles();
    const { category, exercise } = this.state; 
    
    return (
        <Fragment>
          <Header />
          {/* <div style={styles}>
            <Hello name="CodeSandbox" />
            <h2>Hello from Code Sandbox {'\u2728'}</h2> 
          </div> */}
          <Exercises 
            exercise={exercise}
            exercises={exercises}
            category={category}
            onSelect={this.handleExerciseSelected}
          />

          <Footer 
            category = {category}
            muscles = {muscles}
            onSelect = {this.handleCategorySelected}
            
          />
        </Fragment>
    );
  }
  
}

export default App;
