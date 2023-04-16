import { useSelector, useDispatch } from 'react-redux';
import { useEffect,useState } from 'react';
import { toggleTransactionModalOpen } from '../../redux/global/global-slice';
import styles from './AddTransaction.module.css';
import { selectIsTransactionModalOpen } from 'redux/global/global-selectors';
// import { Field } from 'formik';


export const AddTransaction = () => {
  const isTransactionModalOpen = useSelector(selectIsTransactionModalOpen);
  const dispatch = useDispatch();

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      dispatch(toggleTransactionModalOpen());
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        dispatch(toggleTransactionModalOpen());
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch]);




  const currentDay = () => {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;
  const today = year + "-" + month + "-" + day;
  return today;
  };
  
  const [date, setDate] = useState(currentDay());

    const handleChange = {
    // category: ({ target: { value } }) => {
    //   setCategory(value);
    // },
    date: ({ target: { value } }) => {
      setDate(value);
    },
    // comment: ({ target: { value } }) => {
    //   setComment(value);
    // },
  };

 

  return (
    <>
      {isTransactionModalOpen && (
        <div className={styles.overlay} onClick={handleBackdropClick}>
          <div className={styles.modal__container}>
          <div className={styles.modal__container_transaction}>Add transaction

            {/* <div className={styles.switcher} >
              <span >
            
              </span>
              <label className={styles.switcher__box}>
              {/* <Field
                  type="checkbox"
                  name="type"
                  // onChange={handleCheckboxChange}
                  className={styles.switcher__checkbox}
              // checked={transactionState.type === 'EXPENSE' ? true : false}
            /> */}
                {/* <span className={styles.switcher__toggle}>

                </span>
              </label> */}
               {/* <span
            className={transactionState.type === 'EXPENSE' ? 'expense' : ''}
          >
            {t('modalAddTransactionOutcomesType')}
          </span> */}
            {/* </div> */} 

            <form className={styles.form_wrapper}>
                <div className={styles.switcher}
                  style={{ position: 'relative' }}
              >
                <span className={styles.income}>Income</span>
                <label className={styles.switcher_wrapper}>
                  <input name='type' type='checkbox' className={styles.switcher_checkbox}
                    value='EXPENSE' checked='true' />
                  <span className={styles.switcher_toggle}></span>
                </label>
                <span className={styles.expense}>Expense</span>
              </div>

              <div className={styles.category_wrapper}>
                <label>
                  <div className={styles.category_conteiner}>
                    <span>
                      
                    </span>
                    <div className={styles.category_control}>
                      <div className={styles.category_control_field}>
                          <div className={styles.category_control_field_placeholder}
                          as="select"
              name="category">
                          Select a category
                        </div>
                        <div className={styles.category_control_field_placeholder_selectCategory}>
                          <input className={styles.category_input}>
                          </input>
                        </div>
                        
                      </div>
                      <div className={styles.category_menu}>
                        <span>

                        </span>

                        <div className={styles.category_menu_down}>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 17 17" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g></g><path d="M16.354 5.075l-7.855 7.854-7.853-7.854 0.707-0.707 7.145 7.146 7.148-7.147 0.708 0.708z"></path></svg>
                        </div>

                      </div>
                  </div>
                  </div>
              </label>
              </div>

              <div className={styles.amount_date_wrapper}>
                <div className={styles.amount_wrapper}>
                  <label>
                    <input className={styles.amount_input}
                    type="number"
                placeholder="0.00"
                name="amount"
                    >
                    </input>
                  </label>
                </div>
                <div className={styles.date_wrapper}>
                  <label>
                      <div className={styles.date_svg}>
                        
                        <input className={styles.date_input}
                          
                date={date} setDate={handleChange.date}
                
                name="date"
                dateFormat="DD.MM.YYYY"
             
             
                    >
                      </input>
                      </div>
                  </label>
                </div>

              </div>

                <textarea name="comment" rows="1" type="text" placeholder="Comment"
                className={styles.textarea}>

              </textarea>




          {/* <form>
              <form className={styles.form}
                type="number"
                placeholder="0.00"
                name="amount">
              </form>

              <form className={styles.form_date}
                name="date"
                dateFormat="DD.MM.YYYY"
                timeFormat='false'>
              </form>
              </form>
                <span className={styles.span}>
              <textarea type="text" name="comment"
              className={styles.textarea}>
                
              </textarea>
                </span>

                <span>
                  <label>
                    
                  </label>
                </span> */}
              
            




            <div className={styles.button__container}>
              <button
                title="add"
                className={styles.button}
                onClick={() => {
                  dispatch(toggleTransactionModalOpen());
                }}
              >
                ADD
              </button>
              <button
                title="cancel"
                className={styles.button}
                onClick={() => {
                  dispatch(toggleTransactionModalOpen());
                }}
              >
                CANCEL
              </button>
            </div>
              </form>
              </div>
          </div>
        </div>
      )}
    </>
  );
};
