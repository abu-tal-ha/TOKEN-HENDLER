/* eslint-disable react/prop-types */
 
function StatusCart(props) {
  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden mb-6">
        <div className={`${props.bgColor} text-white px-3 py-5 text-2xl flex justify-between mb-6`}>
            <span className="block">Active Token</span>
            <span className="block">5</span>
        </div>

        <ul>
            <li className="flex w-100 p-3 rounded-sm  mx-4 mb-3 bg-gray-200">
                <div>
                    <p className="text-3xl">Abu Talha</p>
                    <span>01606997818</span>
                </div>
                <button className={`${props.bgColor} text-white ml-auto text-lg font-bold px-3`}>Token No 01</button>
            </li>
        </ul>
    </div>
    
  )
}

export default StatusCart