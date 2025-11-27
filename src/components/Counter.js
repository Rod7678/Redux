import { Component } from 'react'
import { useSelector, useDispatch, connect} from 'react-redux';

import classes from './Counter.module.css';

// const Counter = () => {
//   const dispatch = useDispatch();
//   const counter = useSelector(state => state.counter);


//   const increamentHandler = ()=>{
//     dispatch({type: 'increament'});
//   }
//   const decrementHandler = ()=>{
//     dispatch({type: 'decrement'});
//   }
//   const toggleCounterHandler = () => {};

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{counter}</div>
//       <div>
//         <button onClick={increamentHandler}>Increment</button>
//         <button onClick={decrementHandler}>Decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

class Counter extends Component{
  increamentHandler(){
    this.props.increament();
  }
  decrementHandler(){
    this.props.decrement();
  }
  toggleCounterHandler(){}
  render(){
    return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{this.props.counter}</div>
      <div>
        <button onClick={this.increamentHandler.bind(this)}>Increment</button>
        <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
      </div>
      <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
}

const mapDispatchToProps = (dispatch)=>{
  return{
    increament: ()=>dispatch({type: 'increament'}),
    decrement: ()=>dispatch({type: 'decrement'})
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
