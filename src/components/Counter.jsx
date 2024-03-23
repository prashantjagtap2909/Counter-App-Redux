import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset } from '../redux/slices/CounterSlice';

const Counter = () => {

  const count = useSelector((state) =>state.counter.value);
   const dispatch = useDispatch();

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10" > 
       <div className="text-[#0395d4] font-medium text-2xl"> Increment && Decrement</div>
       <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
      
      <button className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl" onClick={() => dispatch(decrement())}>
        -
      </button>
      
      <div className="font-bold gap-12 text-5xl">{count}</div>
      
      <button className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl" onClick={() => dispatch(increment())}>
        +
      </button>
      
      </div>

      <button onClick={() => dispatch(reset())} className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg"> Reset </button>
     
     
    </div>
  )
}

export default Counter
