import { SetSignedInActionTypes } from '../../store/actionTypes';
import { Iadmin } from './../../model/model';
import axios from "axios";

const SaveTokenToSession = (token:string) => window.sessionStorage.setItem('token', token)

const SignInRequest = async (url:string, user:Iadmin, Setfn:()=>SetSignedInActionTypes) => {
    try {  
        const res = await axios({
          url: url,
          method: 'post',
          data: user
      });
        if(res.status===200 && res.data.length>=1){
          await Setfn;
          const token = res.data;
          SaveTokenToSession(token);
        } else {console.error(); alert('wrong password or barcode')};
    } 
    catch {console.error(); alert('wrong password or barcode')}
  }

export default SignInRequest;
