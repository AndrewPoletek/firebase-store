import SignUp from "../../components/SignUp/SignUp.component";
import SignIn from "../../components/SignIn/SignIn.component";

const Authentication = () =>{
    return(
        <div style={{display: "flex", flexDirection: "column", justifyContent:"center"}}>
            <div><h1>Authentication</h1></div>
            <div style={{display: "flex", justifyContent:"center"}}>
                <SignIn/>
                <SignUp/>
            </div>
        </div>
    )
}

export default Authentication