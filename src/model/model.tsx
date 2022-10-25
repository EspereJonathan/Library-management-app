
import { RouteComponentProps} from 'react-router-dom';



export interface ISetSignedInProp  {
  setIsSignedIn:React.Dispatch<React.SetStateAction<boolean>>;
}



export interface IMenuProps extends RouteComponentProps<any>  {
  name:string;
  url:string;
}


export interface Iadmin {
  username:string,
  password:string
}

export interface ISignProps {
  admin: Iadmin;
  onAdminChange:(event: React.ChangeEvent<HTMLInputElement>) => void;
  SignIn:(event: React.ChangeEvent<HTMLFormElement>) => void;
}

export interface IModal {
  property:string;
  input0?:string;
  input1:string;
  input2?:string;
  input3?:string;
  inputType0?:string;
  inputType1:string;
  inputType2?:string;
  inputType3?:string;
  TypeofSelect?:string;
  InputPh0?:string;
  InputPh1:string;
  InputPh2?:string; 
  InputPh3?:string; 
  handleChange:(event: React.ChangeEvent<any>) => void;
  handleSubmit:(event: React.ChangeEvent<any>) => void;
  SelectRequireBool?:boolean;
  selectDisplay?:string;
  selectValue1?:string;
  selectValue2?:string;
  handleSelectChange?: (event: React.ChangeEvent<any>) => void;
  initialiseState:() => void;
  
}

export interface ISearchSection {
  InputName1:string;
  InputType1:string;
  InputPh1:string;
  InputName2?:string;
  InputType2?:string;
  InputPh2?:string;
  SearchInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  SearchRequest: () => void;
  Search?: string;
  mappedTable:JSX.Element[];
  theadID?:string;
  thead1?:string;
  thead2?:string;
  thead3?:string;
                                             
}

