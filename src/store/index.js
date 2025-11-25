const redux = require('redux');

const counterReducer = (state, action)=>{
    if(action.type === 'increament'){
        return {
            counter: state.counter + 1
        };
    }
    if(action.type === 'decrement'){
        return {
            counter: state.counter - 1
        };
    }

    return state;
}


const store = redux.createStore(counterReducer);

const counterSubscriber= ()=>{
    const latestState = store.getState();
    console.log(latestState);
    return latestState;
}

store.subscribe(counterSubscriber);
store.dispatch({type: 'increament'});
store.dispatch({type: 'decrement'});





