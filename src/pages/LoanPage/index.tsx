import React, {useState} from 'react';
import SearchSection from '../../components/SearchSection';
import ModalButton from '../../components/ModalButton';
import SearchRequest from '../../api/SearchRequest';
import AddOrDeleteOrUpdateRequest from '../../api/AddOrDeleteOrUpdateRequest';


const LoanPage: React.FC = () => {
  //add/delete/search books from server
  const [fetchedData, setFetchedData] = useState([{id:"", dueDate:"", isbn:"", BookId:""}]);

  //add/delete/search books to server
  const [dataToServer, setDataToServer] = useState({id:"", dueDate:"", BookId:"", UserId:""});

  //when close button has been clicked on the modal, init state
  const HandleInitState = () => setDataToServer({id:"", dueDate:"", BookId:"", UserId:""});
  
  // data of the user borrowing a book from server
  const [userBorrowing, setUserBorrowing] = useState([{id:'', name:'', barcode:'', memberType:''}])


  const HandleDataToServer = (event:React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLFormElement>) => {
    const { value, name } = event.target;
    setDataToServer({...dataToServer, [name]: value });
  };


  //Api Requests
  const SearchUser = () => {
    SearchRequest('http://127.0.0.1:8080/loans/search', dataToServer, setFetchedData)
  }

  const GetUserBorrowingAbook = () => {
    SearchRequest('http://127.0.0.1:8080/loans/user', dataToServer, setUserBorrowing)
  }

  const addLoan = (event:React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    AddOrDeleteOrUpdateRequest(`http://127.0.0.1:8080/loans/book/${dataToServer.BookId}/user/${dataToServer.UserId}`, dataToServer, 'post', 'Successfully Added')
  }

  const UpdateLoan = (event:React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    AddOrDeleteOrUpdateRequest(`http://127.0.0.1:8080/loans/${dataToServer.id}`, dataToServer, 'put', 'Successfully updated')
  }

  const DeleteLoan = (event:React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    AddOrDeleteOrUpdateRequest('http://127.0.0.1:8080/loans/delete', dataToServer, 'delete', "Successfully Deleted")
  }

  // A user's loans to table
  const mappedLoans = fetchedData.map(({id, BookId, isbn, dueDate}) =>     
    <tr key={id}><th scope="row">{id}</th><td>{BookId}</td><td>{isbn}</td><td>{dueDate}</td></tr>);

  // users borrowing a book to table
  const mappedUsers = userBorrowing.map(({id, name, barcode, memberType}) =>     
    <tr key={id}><th scope="row">{id}</th><td>{name}</td><td>{barcode}</td><td>{ memberType}</td></tr>);


  return (
    <main>
      
      <section className={'cudButtons'}>
        <ModalButton property = "Add Loan"  initialiseState={HandleInitState}
          InputPh1='UserID' InputPh2='BookID' InputPh3='Due Date' input1="UserId" input2="BookId" 
          inputType1="text" inputType2="text" inputType3="DATE" selectDisplay = "none" input3="dueDate"
          handleChange={HandleDataToServer} handleSubmit={addLoan} inputType0="hidden"
        />

        <ModalButton property = "Update Loan"  initialiseState={HandleInitState}
          inputType0="text" InputPh0='LoanID' input0="id" InputPh1='Due Date' input1="dueDate"
          inputType1="date" inputType2="hidden" inputType3="hidden" selectDisplay = "none"
          handleChange={HandleDataToServer} handleSubmit={UpdateLoan}
        />

        <ModalButton property = "Remove Loan" 
          InputPh1='LoanID' input1="id" InputPh2='UserID' input2="UserId" initialiseState={HandleInitState}
          inputType1="text" inputType2="hidden" inputType3="hidden" inputType0="hidden"
          selectDisplay = "none" handleChange={HandleDataToServer} handleSubmit={DeleteLoan}
        />
      </section>

      <h5>User currently borrowing a Book</h5>
      <SearchSection 
        InputName1='bookID' InputType1='text' InputPh1='BookID'
        InputName2='barcode' InputType2='hidden' InputPh2='barcode'
        SearchInput={HandleDataToServer} SearchRequest={GetUserBorrowingAbook} mappedTable={mappedUsers}
        theadID='UserID' thead1="Name" thead2='Barcode' thead3='MemberType'
      />

      <h5>User’s current Loans</h5>
      <SearchSection 
        InputName1='userID' InputType1='text' InputPh1='UserID' InputType2='hidden' 
        SearchInput={HandleDataToServer} SearchRequest={SearchUser} mappedTable={mappedLoans}
        theadID='LoanID' thead1='BookID' thead2='ISBN' thead3='Due Date'
      />
    </main>
  );
}


export default LoanPage;
