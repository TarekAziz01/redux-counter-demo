import { decrement, increment, incrementByValue } from "./redux/features/counterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hook"
//new project for redux//
function App() {
  const count = useAppSelector((state)=> state.counter.count)
  const dispatch = useAppDispatch()

  return (
  <div className="h-screen w-full flex justify-center items-center ">
      <div className="flex border border-gray-300 rounded-md p-10  ">

        <button onClick={() => dispatch(increment())} className="bg-green-500 px-3 py-2 rounded-md text-xl font-semibold text-white">Increment</button>
        
        <button onClick={() => dispatch(incrementByValue(5))} className="bg-green-300 px-3 py-2 rounded-md text-xl font-semibold text-white">IncrementBy5</button>
        
        <h1 className="text-3xl mx-10">{count}</h1>
        
        <button onClick={() => dispatch(decrement())} className="bg-red-500 px-3 py-2 rounded-md text-xl font-semibold text-white">Decrement</button>
        
    </div>
  </div>
  )
}

export default App
