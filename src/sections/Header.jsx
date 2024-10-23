

function Header() {
  return (
    <header className="py-6 bg-gray-300 ">
        <div className="max-w-screen-xl	mx-auto flex justify-between items-center">
            <a className="text-5xl font-bold font-lato text-[#61DAFB]" href="#">TOKEN HENDLER</a>
            <ul className="flex ml-3">
                <li className="ml-3 font-medium hover:text-red-700">Home</li>
                <li className="ml-3 font-medium hover:text-red-700">About</li>
                <li className="ml-3 font-medium hover:text-red-700">Services</li>
                <li className="ml-3 font-medium hover:text-red-700">Gallery</li>
                <li className="ml-3 font-medium hover:text-red-700">Contact</li>
            </ul>
        </div>

    </header>
    
  )
  
   
  

  
}

export default Header