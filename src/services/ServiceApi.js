import UserContext from "./context/UserContext";
import  axios  from "axios";

export const ServiceApi = (props) =>{

    var token = "";

    const GetToken = () =>{
        return token;
    }

    const SetToken = (varToken) =>{
        token=varToken;
        console.log(token);
    }

    
    
    function ServiceRest (rest,uri,datas,callback){
        const header = {
            "Content-type" : "application/json",
            "Authorization" : "Bearer " + token
        }
                axios({
                method: rest,
                headers: header,
                url: "http://localhost:8080/"+ uri,
                data: datas
            }).then((data)=>{
                callback(data.data)
            })
    
    }


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
