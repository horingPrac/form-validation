import React,{Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nameEntered: '',
      isNameValid: false,
      emaildEntered: '',
      isEmailValid: false,
      phoneNumberEntered: '',
      isPhoneNumberValid: false
    }
  }

  validateName = nameEntered => {
    if(nameEntered.length > 1){
      this.setState({
        isNameValid: true,
        nameEntered
      });
    }else{
      this.setState({
        isNameValid: false,
        nameEntered
      });
    }
  };

  isEnteredNameValid = () => {
    const {nameEntered, isNameValid} = this.state;

    if (nameEntered) return isNameValid;
  };

  inputClassNameHelper = boolean => {
    switch(boolean){
      case true:
        return 'is-valid';
      case false:
        return 'is-invalid';
      default:
        return '';  
    }
  }

  render(){
    return(
      <div className="App">
        <form className="myForm">
          <div className="form-group">
            <label htmlFor="nameInput">이름</label>
            <input
              type="text"
              className={`form-control ${this.inputClassNameHelper(this.isEnteredNameValid())}`}
              id="nameInput"
              placeholder="홍길동"
              onChange={e => this.validateName(e.target.value)}
              required
            />  
          </div>
          <div className="form-group">
            <label htmlFor="emailInput">이메일</label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              aria-describedby="emailHelp"
              placeholder="abc@gmail.com"
            />  
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumberInput">휴대폰 번호</label>
            <input
              type="text"
              className="form-control"
              id="phoneNumberInput"
              placeholder="010-1234-1234"
            />  
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default App;
