
import {Route,Redirect} from 'react-router-dom';

const useAuth =({isAuthenticated,...props})=>{
     
    if (!isAuthenticated) {
        return (
            <Redirect to="/"/>
            )

    }
    return <Route {...props} />        
        
}

/*function useAuth(initialValue) {

const [isAuthenticated, setIsAuthenticated] = useState(initialValue);

    function login () {
        setTimeout(()=>{
            setIsAuthenticated(true);

        },1000)
    };
  
    function logout  () {
        setTimeout(()=>{
            setIsAuthenticated(false);

        },1000)
    };
  

    return (
        [isAuthenticated, login,logout]
    )
}
*/
export default useAuth