import React from 'react';
import Input from '../Styled-Input';
import { Button } from 'react-bootstrap';
import "./index.scss"
import { ISignProps } from '../../model/model';

const SignInForm: React.SFC<ISignProps> = ({admin, onAdminChange, SignIn }) => 
      
    <div className="BlockForForm">
      <span>Library Management System</span>
        <form  onSubmit={SignIn}>
          <Input name='barcode' type='text' onChange={onAdminChange} value={admin.username} placeholder='Staff Barcode' required/>
          <Input name='password' type='password' value={admin.password} onChange={onAdminChange} placeholder='password' autoComplete="off" required/>
          <Button variant="secondary" size="sm"  type='submit' > 
            Sign in 
          </Button>
        </form>
    </div>

export default SignInForm;