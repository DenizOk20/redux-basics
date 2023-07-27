import { useDispatch, useSelector } from 'react-redux';
import {actions} from './store'

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
   
  const Increment = () => {
      dispatch(actions.Increment())
  }
  
  const Decrement = () => {
    dispatch(actions.Decrement())      
  }
  const AddBy = () => {
    dispatch(actions.AddBy(10))
  }

  return (
    <div className='flex justify-center items-center'>
      <div className='flex justify-center items-center p-5 flex-col w-[500px] bg-blue-950'>
        <div className='text-center'>
          <h2 className='font-bold text-[20px] text-slate-300 p-3'>Counter App</h2>
          <h2 className='text-[18px] rounded-full bg-slate-100 mb-2'>{counter}</h2>
        </div>
        <div className='flex flex-row mt-2'>
          <button className='mx-4 h-7 w-[100px] bg-yellow-300 px-2 rounded-[12px] hover:bg-blue-950 hover:text-white hover:border-2 hover:border-white' onClick={Increment}>Increase</button>
          <button className='mx-4 h-7 w-[100px] bg-yellow-300 px-2 rounded-[12px] hover:bg-blue-950 hover:text-white hover:border-2 hover:border-white ' onClick={Decrement}>Decrease</button>
          <button className='mx-4 h-7 w-[100px] bg-yellow-300 px-2 rounded-[12px] hover:bg-blue-950 hover:text-white hover:border-2 hover:border-white' onClick={AddBy}>Add  10</button>
        </div>
      </div>
    </div>
  );
}

export default App;
