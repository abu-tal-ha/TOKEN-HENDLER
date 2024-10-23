import { useState } from "react";
import H1 from "../../H1/H1";

function FormArea() {

  let [num, setNum] = useState(0);
  let [show, setShow] = useState(false);
  
  let clickHandler = () => {
    setNum (function(int) {
      return int +1;
    });
  } 


  // let showModalHandler = () => {
  //   setShow(true);
  // }

  // let closeModalHandler = () => {
  //   setShow(false);
  // }
  
  return (
    <div>
    <div className="bg-white shadow-sm	p-4 rounded-lg">
        <input type="text" placeholder="Name" className="input input-bordered w-full" />
        <small className="pb-3 text-red-500 hidden">Something is going wrong</small>
        <input type="text" placeholder="Phone" className="input input-bordered w-full mt-3" />
        <small className="pb-3 text-red-500 hidden">Something is going wrong</small>
        <input type="text" placeholder="Active" className="input input-bordered w-full mt-3" />
        <small className="pb-3 text-red-500 hidden">Something is going wrong</small>

        <button onClick={clickHandler} className="mt-3 btn btn-accent" >Add Token {num}</button>
        <button onClick={() => setShow(true)} className="btn btn-outline btn-warning">Show Modal</button>
    </div>
    <H1 dataNum={num} />



    <div className={!show ? 'hidden' : ''}>
      <div className="fixed top-0 left-0 z-10 w-full h-screen flex justify-center bg-gray-400 items-center">
        <div className="w-1/2 bg-white p-5 rounded-md shadow-md">
          <h2 className="text-3xl">Token Modal Created by react js</h2>
          <button onClick={() => setShow(false)} className="btn btn-error text-white">Close</button>
        </div>
      </div>
    </div>

    </div>
  )
}

export default FormArea