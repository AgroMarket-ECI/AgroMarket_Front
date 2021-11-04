import UserContext from "./context/UserContext";
import  axios  from "axios";

export const ServiceApi = (props) =>{

    var token = "";

    const GetToken = () =>{
        return token;
    }

    const SetToken = (varToken) =>{
        token=varToken;
    }

    
    
    function ServiceRest (rest,uri,datas){
        const header = {
            "Content-type" : "application/json",
            "Authorization" : "Bearer " + token
        }
        axios({
            method: rest,
            headers: header,
            url: "https://agromarketeci.herokuapp.com/v1/health",
            data: datas
        });
    };


    return(
        <UserContext.Provider value={{
            ServiceRest,
            GetToken,
            SetToken
        }}>
            { props.children }
        </UserContext.Provider>
    )
}
export default ServiceApi;
