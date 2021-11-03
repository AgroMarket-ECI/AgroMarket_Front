import UserContext from "./context/UserContext";
import { axios } from "axios";

export const ServiceApi = () =>{

    var token = "";

    const getToken = () =>{
        return token;
    }

    const setToken = (varToken) =>{
        token=varToken;
    }

    const getHeader = () =>{
        const header = {
            "Content-type" : "application/json",
            "Authentication" : "Bearer " + token
        }
        
        return header
    }
    
    
    const serviceRest = (rest,uri,datas) =>{
            axios({
                method: rest,
                headers: getHeader(),
                url: "http://localhost:"+ uri,
                data: datas
            })
    }
    return(
        <UserContext.Provider value={{
            serviceRest,
            setToken,
            getToken
        }}>
            {props.children}
        </UserContext.Provider>
    )
}
export default ServiceApi;
