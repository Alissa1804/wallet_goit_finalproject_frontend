import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { toggleModalOpen, setModalType } from '../../redux/global/global-slice';
import styles from '../ModalLogout/ModalLogout.module.css';
import { selectToken } from 'redux/auth/auth-selectors';
import { getTransactions } from 'redux/transactions/transactions-operations';
import { deleteTransaction } from 'redux/transactions/transactions-operations';
import { getCurrentUser } from 'redux/user/user-operations';

export const ModalDelete = ({ id }) => {
  const token = useSelector(selectToken);
  const isModalOpen = useSelector(state => state.global.isModalOpen);
  const modalType = useSelector(state => state.global.modalType);
  const dispatch = useDispatch();

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      dispatch(toggleModalOpen());
      dispatch(setModalType(null));
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        dispatch(toggleModalOpen());
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch]);

  return (
    <>
      {isModalOpen && modalType === 'delete' && (
        <div className={styles.overlay} onClick={handleBackdropClick}>
          <div className={styles.modal__container}>
            <p className={styles.text}>
              Are you sure you want to delete this transaction?
            </p>
            <div className={styles.button__container}>
              <button
                title="delete"
                className={styles.button}
                onClick={async () => {
                  await dispatch(deleteTransaction(id));
                  await dispatch(getTransactions({ token }));
                  dispatch(toggleModalOpen());
                  dispatch(setModalType(null));
                  dispatch(getCurrentUser({ token }));
                }}
              >
                DELETE
              </button>
              <button
                title="cancel"
                className={styles.button}
                onClick={() => {
                  dispatch(toggleModalOpen());
                  dispatch(setModalType(null));
                }}
              >
                CANCEL
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
