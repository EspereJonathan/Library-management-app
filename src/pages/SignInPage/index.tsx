import React, { useState } from 'react';
import SignInForm from '../../components/SignInForm';
import SignInRequest from '../../api/SignInRequest';
import {ISetSignedInProp, Iadmin} from '../../model/model'
import { useDispatch } from 'react-redux';
import { setIsSignedInTrue } from '../../store/actions';

const SignIn : React.FC= () => {
  const dispatch = useDispatch();
  const [admin, setAdmin] = useState<Iadmin>({ username: '', password: ''});

  const onAdminChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setAdmin({...admin, [name]: value });
  };

  const SignIn = (event:React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    SignInRequest('http://127.0.0.1:8080/signin', admin, dispatch(setIsSignedInTrue))
  }

  return (
    <SignInForm onAdminChange={onAdminChange} admin={admin} SignIn={SignIn} />
  )
}

export default SignIn;
