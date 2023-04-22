import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';

export const AddTransactionStyled = styled(Form)`

.modal__container {
  overflow:auto;
    position: absolute;
    top: 60px;
    left: 0px;
    margin-bottom: 40px;
    width: 100%;
    height: calc(100% - 100px);
    padding: 20px;
    background-color: rgb(255, 255, 255);
    z-index: 102;
    /* text-align: center; */
    background-color: var(--secondary-background-color);
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    
    
    

    font-size: 30px;
    line-height: calc(1.5);
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;
    /* padding:40px 73px; */

    
  /* flex-direction: column;
  justify-content: center;
  align-items: center;
  & > *:not(:last-child) {
    margin-bottom: 40px;} */
    

    
  }

  .main__title{
        font-family: Poppins, "Montserrat Alternates";
    text-align: center;
    font-weight: 400;
    font-size: 24px;
    line-height: calc(1.5);
  }

  .modal__container_transaction{
        display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
}
  
/* &.switcher{
  width: 235px;
    height: 46px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    font-weight: 700;
    font-size: 16px;
    line-height: calc(1.5);
    color: rgb(224, 224, 224);
} */

  
/* @media screen and (max-width: 767px) {
      padding: 0 8px 8px;
    
  .amount-date-wrapper {
    
   margin-bottom:40px
  }
  

  .amount{
     margin-bottom:40px;
     padding: 0px ;
  }

  .btns-wrapper {
    width: 1000%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

 
} */

  

  



 
  & .switcher {
    width: 235px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    font-size: 16px;
    line-height: calc(24 / 16);
    color: #e0e0e0;
&:not(:last-child) {
    margin-bottom: 40px;
  }

    & .income {
      color: #24cca7;
      transition: color 0.4s ease-in-out;
    }
    & .expense {
      color: #ff6596;
      transition: color 0.4s ease-in-out;
    }
    &__box {
      position: relative;
      display: inline-block;
      width: 80px;
      height: 40px;
    }
    &__checkbox {
      opacity: 0;
      width: 0;
      height: 0;
    }
    &__toggle {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ffffff;
      border-radius: 30px;
      border: 1px solid #e0e0e0;
      transition: transform 0.4s ease-in-out;
      -webkit-transition: transform 0.4s ease-in-out;
      cursor: pointer;
      &:before {
        position: absolute;
        content: '';
        height: 44px;
        width: 44px;
        left: -4px;
        bottom: -3px;
        border-radius: 50%;
        box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
        background-color: #24cca7;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 768 768'%3E%3Cpath d='M607.5 415.5h-192v192h-63v-192h-192v-63h192v-192h63v192h192v63z'/%3E%3C/svg%3E");
        transition: transform 0.4s ease-in-out;
        -webkit-transition: transform 0.4s ease-in-out;
      }
    }
    &__checkbox:checked + .switcher__toggle:before {
      background-color: #ff6596;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 768 768'%3E%3Cpath d='M607.5 415.5h-447v-63h447v63z'/%3E%3C/svg%3E");
      box-shadow: 0px 6px 15px rgba(255, 101, 150, 0.5);
      -webkit-transform: translateX(44px);
      -ms-transform: translateX(44px);
      transform: translateX(44px);
    }
  }
  & textarea {
    resize: none;
     &:not(:last-child) {
    margin-bottom: 40px;
  }
  }
  
  & input,
  & select {
    max-height: 32px;
  }
  & input,
  & textarea,
  & select {
    font-family: inherit;
    width: 100%;
    padding: 0 20px 8px;
    color: #000000;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #e0e0e0;
    font-weight: 400;
    font-size: 18px;
    line-height: calc(27 / 18);
   

 
    @media screen and (min-width: 768px) {
      
      padding: 0 8px 8px;
    }
    
    &:focus {
      outline: none;
    }
    &:-webkit-autofill {
      box-shadow: 0 0 0 30px #ffffff inset;
    }
    &::placeholder {
      color: #bdbdbd;
    }
  }


  & .category-wrapper {
    width: 100%;
    transition: margin 0.4s ease;
    &.isHidden {
      margin-bottom: 0;
    }
  }
  .category-wrapper:not(:last-child) {
    margin-bottom: 40px;
  }

  .textarea:not(:last-child) {
    margin-bottom: 40px;
  }

  & .amount-date-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px 0px;
    &:not(:last-child) {
      margin-bottom: 40px;
    }

    & .amount-wrapper,
    & .date-wrapper {
      position: relative;
    }
    & .amount {
      font-weight: 700;
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        /* display: none; */
        -webkit-appearance: none;
        -moz-appearance: textfield;
      
      }
    }

    
    }

    @media screen and (min-width: 768px) {
      .modal__container{
          height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 540px;
    min-height: 508px;
    padding: 40px 73px;
    border-radius: 20px;
}
.amount-date-wrapper{
      flex-direction: row;
      align-items: center;
      gap: 0 32px;
      & .amount-wrapper {
        width: calc((100% - 30px) / 2);
      }
      & .date-wrapper {
        width: calc((100% - 30px) / 2);
      }
      & .amount {
        width: 100%;
        text-align: center;
      }
      & .date {
        width: 100%;
      }
    }}
    
  
  & .btns-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .modal__container_transaction {
    position: relative;
  }



  .text {
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 22px;
    line-height: 1.5;
    color: var(--dark-text-color);
    
  }

  .button__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    gap: 20px;
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 300px;
    padding: 10px;
    height: 50px;
    border-radius: 20px;
    background-color: transparent;
    font-family: 'Circe';
    font-size: 18px;
    cursor: pointer;
    margin:0px;
      transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .button:hover {
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}
  .button:first-child {
    /* margin-top: 30px; */
    border: 1px solid var(--green-color);
    background-color: var(--green-color);
    color: var(--light-text-color);
  }

  .button:last-child {
    /* margin-top: 20px; */
    border: 1px solid var(--accent-text-color);
    color: var(--accent-text-color);
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    backdrop-filter: blur(3px);
    z-index: 1200;
  }





`;

// .modal__container {

//     margin: 50px 40px;
//     /* text-align: center; */
//     background-color: var(--secondary-background-color);
//     border-radius: 20px;
//     box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

//     font-family: 'Poppins';
//     font-style: normal;
//     font-weight: 400;
//     font-size: 30px;
//     line-height: 45px;
//     display: flex;
//     align-items: center;

//     font-size: 30px;
//     line-height: calc(1.5);

//     width: 540px;
//     min-height: 508px;
//   }


export const ErrorMessageStyled = styled(ErrorMessage)`
  position: absolute;
  top: 36px;
  left: 0;
  color: #ff3333;
`;
