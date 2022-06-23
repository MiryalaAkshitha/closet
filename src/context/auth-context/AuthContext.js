import { createContext,useContext,useReducer } from "react";
const AuthContext=createContext()
const useAuth=()=>useContext(AuthContext)
const AuthProvider=({children})=>{
    const [authObject,authObjectDispatch]=useReducer((state,action)=>{
        switch(action.type){
            case "SET_AUTH":
                return{...state,isAuth:action.payload}
        }
    })


    return(
    <AuthContext.Provider value={{authObject,authObjectDispatch}}>{children}</AuthContext.Provider>
    )
}
export {AuthProvider,useAuth}