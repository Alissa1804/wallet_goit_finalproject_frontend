import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { toggleTransactionModalOpen } from '../../redux/global/global-slice';
import styles from './AddTransaction.module.css';
import { selectIsTransactionModalOpen } from 'redux/global/global-selectors';

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

  return (
    <>
      {isTransactionModalOpen && (
        <div className={styles.overlay} onClick={handleBackdropClick}>
          <div className={styles.modal__container}>
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
          </div>
        </div>
      )}
    </>
  );
};
