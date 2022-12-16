import UserContext from "./context/UserContext";
import  axios  from "axios";

export const ServiceApi = (props) =>{


    const GetToken = () =>{
        console.log("hola"+window.localStorage.getItem("token"));
        if(window.localStorage.getItem("token")==null){
            return "";
        }
        return window.localStorage.getItem("token");
    }

    const SetToken = (varToken) =>{
        window.localStorage.setItem("token",varToken);
    }

    function ServiceRest (rest,uri,datas,callback){
        const header = {
            "Content-type" : "application/json",
            "Authorization" : "Bearer " + GetToken()
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
