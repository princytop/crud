 import {createBrowserRouter} from 'react-router-dom'
import Navbar from './Navbar'
import Userdata from './Userdata'
import Useradd from './Useradd'
import Userdetails from './Userdetails'
import Useredit from './Useredit'

 const Mainrouter = createBrowserRouter([
    {
        path:"/",
        element:<> <Navbar/>  <Userdata/> </>
    },
    {
        path:"/Useradd",
        element:<> <Navbar/>  <Useradd/> </>
    },
    {
        path:"/Userdetails/:idd",
        element:<> <Navbar/> <Userdetails/>  </>
    },
    {
        path:"/Useredit/:idd",
        element:<> <Navbar/>  <Useredit/> </>
    },
 ])

export default Mainrouter
