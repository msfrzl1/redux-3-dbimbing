import classes from './Counter.module.css';
import { increment, decrement, incrase, toggle } from '../features/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
   const counter_reducer = useSelector((state) => state.counter);
   const { counter, showCounter } = counter_reducer;
   const dispatch = useDispatch();

   return (
      <main className={classes.counter}>
         <h1>Redux Counter</h1>
         {showCounter && <span>{counter}</span>}
         <div>
            <button onClick={() => dispatch(increment(1))}>Increment</button>
            <button onClick={() => dispatch(incrase(10))}>Increase by 10</button>
            <button onClick={() => dispatch(decrement(1))}>Decrement</button>
         </div>
         <button onClick={() => dispatch(toggle())}>Toggle Counter</button>
      </main>
   );
};

export default Counter;
