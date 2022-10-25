import axios from "axios";
import { SetSignedInActionTypes } from "../../store/actionTypes";

//when componentDidMount LoadToken and stay signed in
const LoadToken = (setIsSignedInTrue: () => SetSignedInActionTypes) => {
    try{
        const token = window.sessionStorage.getItem('token');
        if(token ) {
            const fetch = async() =>{
            const res = await axios({
                url: 'http://localhost:5000/signin',
                method: 'post',
                headers: {
                'Content-Type': 'application/json',
                'authorization': token
                }
            });
            if(res.status===200 && res.data){
                setIsSignedInTrue;
            } else {console.error()};
            }
            fetch();
        }
    } catch {console.error()}
}

export default LoadToken;
