import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { toggleEditTransactionModalOpen } from '../../redux/global/global-slice';
// import styles from './EditTransaction.module.css';
import { selectIsEditTransactionModalOpen } from 'redux/global/global-selectors';
import { Formik, Field } from 'formik';
import { useMediaQuery } from 'react-responsive';
import { date, object, string } from 'yup';
import {
  ErrorMessageStyled,
  EditTransactionStyled,
} from './EditTransaction.styled';
import DateComponent from '../AddTransaction/DateComponent/DateComponent';
import SelectComponent from '../AddTransaction/SelectComponent/SelectComponent';
import { getCategories } from 'redux/categories/categories-operations';
import { selectCategories } from 'redux/categories/categories-selectors';
import { editTransaction } from 'redux/transactions/transactions-operations';
import { selectToken } from 'redux/auth/auth-selectors';
import { getTransactions } from 'redux/transactions/transactions-operations';
import { getCurrentUser } from 'redux/user/user-operations';
import { selectTransactions } from 'redux/transactions/transactions-selectors';
import { selectId } from 'redux/auth/auth-selectors';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function decapitalizeFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

const TRANSACTION_TYPE = {
  EXPENSE: 'EXPENSE',
  INCOME: 'INCOME',
};

export const EditTransaction = ({ id }) => {
  const isEditTransactionModalOpen = useSelector(
    selectIsEditTransactionModalOpen
  );
  const categories = useSelector(selectCategories);
  const token = useSelector(selectToken);
  const transactions = useSelector(selectTransactions);
  const owner = useSelector(selectId);
  const transaction = transactions.find(el => el._id === id);
  const category = transaction.category
    ? categories.find(
        el => el.category === decapitalizeFirstLetter(transaction.category)
      )
    : null;
  console.log('categories:', categories);
  console.log('transaction.category:', transaction.category);
  console.log('category.id', category?.id);
  const [transactionState, setTransactionState] = useState({
    type:
      transaction.type === true
        ? TRANSACTION_TYPE.INCOME
        : TRANSACTION_TYPE.EXPENSE,
    categoryId: category ? category.id : null,
    category: category ? transaction.category : null,
    amount: transaction.amount.toString(),
    date: new Date(transaction.date),
    comment:
      transaction.comment && transaction.comment.trim() !== ''
        ? transaction.comment
        : ' ',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isEditTransactionModalOpen) return;

    if (!Array.isArray(categories) || categories.length === 0) {
      dispatch(getCategories());
    }
  }, [isEditTransactionModalOpen, categories, dispatch]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      dispatch(toggleEditTransactionModalOpen());
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        dispatch(toggleEditTransactionModalOpen());
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch]);

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const handleCheckboxChange = event => {
    if (transactionState.type === TRANSACTION_TYPE.EXPENSE) {
      setTransactionState(prev => ({ ...prev, type: TRANSACTION_TYPE.INCOME }));
      event.target.removeAttribute('checked', 'true');
    } else {
      setTransactionState(prev => ({
        ...prev,
        type: TRANSACTION_TYPE.EXPENSE,
      }));
      event.target.setAttribute('checked', 'true');
    }
  };

  const handleSelectChange = categoryId => {
    setTransactionState(prev => ({ ...prev, categoryId }));
  };

  const handleDateChange = selectedDate => {
    setTransactionState(prev => ({ ...prev, date: selectedDate._d }));
  };

  const handleSubmit = (values, actions) => {
    const { amount, comment } = values;
    const month = transactionState.date.getMonth() + 1;
    const year = transactionState.date.getFullYear();

    let selectedCategoryName = 'Income';

    if (transactionState.type === TRANSACTION_TYPE.EXPENSE) {
      const selectedCategory = categories.find(
        el => el.id === transactionState.categoryId
      );

      selectedCategoryName = capitalizeFirstLetter(selectedCategory.category);
    }

    const formData = {
      category: selectedCategoryName,
      type: transactionState.type === TRANSACTION_TYPE.INCOME ? true : false,
      date: transactionState.date,
      month,
      year,
      comment: comment.trim() !== '' ? comment : ' ',
      amount: Number(amount),
      owner: owner,
    };

    dispatch(editTransaction({ id: transaction._id, transaction: formData }));
    setTransactionState(prev => ({
      ...prev,
      type: TRANSACTION_TYPE.EXPENSE,
    }));
    actions.resetForm();
    dispatch(toggleEditTransactionModalOpen());
    dispatch(getTransactions({ token }));
    dispatch(getCurrentUser({ token }));
  };

  let validationSchema = object({
    amount: string()
      .required('Required')
      .max(16, 'Must be 16 characters maximum'),
    date: date()
      .required('Required')
      .default(() => new Date()),
    type: string().required('Required'),
  });

  console.log('transactionState', transactionState);
  return (
    <Formik
      initialValues={transactionState}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      onChange={({ nextValues }) => {
        console.log('nextValues', nextValues);
        setTransactionState(prev => ({ ...prev, nextValues }));
      }}
    >
      <EditTransactionStyled className="modal-form">
        {isEditTransactionModalOpen && (
          <div className="overlay" onClick={handleBackdropClick}>
            <div className="modal__container">
              <div className="modal__container_transaction">
                Edit transaction
                <div className="switcher" style={{ position: 'relative' }}>
                  <span
                    className={
                      transactionState.type === TRANSACTION_TYPE.INCOME
                        ? 'income'
                        : ''
                    }
                  >
                    Income
                  </span>
                  <label className="switcher__box">
                    <Field
                      type="checkbox"
                      name="type"
                      onChange={handleCheckboxChange}
                      className="switcher__checkbox"
                      checked={
                        transactionState.type === TRANSACTION_TYPE.EXPENSE
                          ? true
                          : false
                      }
                    />
                    <span className="switcher__toggle"></span>
                  </label>
                  <span
                    className={
                      transactionState.type === TRANSACTION_TYPE.EXPENSE
                        ? 'expense'
                        : ''
                    }
                  >
                    Expense
                  </span>
                </div>
                {transactionState.type === TRANSACTION_TYPE.EXPENSE && (
                  <div className="category-wrapper">
                    <label>
                      <Field
                        as="select"
                        name="category"
                        placeholder="Select a category"
                        component={SelectComponent}
                        options={categories.map(option => {
                          return {
                            value: option.id,
                            label: option.category,
                          };
                        })}
                        onChange={option => {
                          handleSelectChange(option.value);
                        }}
                      />
                    </label>
                  </div>
                )}
                <div className="amount-date-wrapper">
                  <div className="amount-wrapper">
                    <label>
                      <Field
                        type="number"
                        placeholder="0.00"
                        name="amount"
                        className="amount"
                      />
                    </label>
                    <ErrorMessageStyled name="amount" component="div" />
                  </div>

                  <div className="date-wrapper">
                    <label>
                      <Field
                        as="date"
                        component={DateComponent}
                        className="date"
                        name="date"
                        dateFormat="DD.MM.YYYY"
                        timeFormat={false}
                        value={transactionState.date}
                        onChange={handleDateChange}
                      />
                    </label>
                    <ErrorMessageStyled name="date" component="div" />
                  </div>
                </div>
                <Field
                  as="textarea"
                  rows={isMobile ? '5' : '1'}
                  type="text"
                  placeholder="Comment"
                  name="comment"
                />
                <div className="button__container">
                  <button title="add" className="button" type="submit">
                    ADD
                  </button>
                  <button
                    title="cancel"
                    className="button"
                    onClick={() => {
                      dispatch(toggleEditTransactionModalOpen());
                    }}
                  >
                    CANCEL
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </EditTransactionStyled>
    </Formik>
  );
};
