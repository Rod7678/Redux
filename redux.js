import { createStoreHook } from 'react-redux'

const counterReducer = (state, action)=>{
    return {
        counter: state.counter + 1
    };
};

const store = createStoreHook(counterReducer);


