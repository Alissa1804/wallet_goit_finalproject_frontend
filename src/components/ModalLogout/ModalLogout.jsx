import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { toggleModalOpen } from '../../redux/global/global-slice';
import styles from './ModalLogout.module.css';

export const ModalLogout = () => {
  const isModalOpen = useSelector(state => state.global.isModalOpen);
  const dispatch = useDispatch();

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      dispatch(toggleModalOpen());
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
      {isModalOpen && (
        <div className={styles.overlay} onClick={handleBackdropClick}>
          <div className={styles.modal__container}>
            <p className={styles.text}>Are you sure you want to log out?</p>
            <div className={styles.button__container}>
              <button
                title="logout"
                className={styles.button}
                onClick={() => {
                  dispatch(toggleModalOpen());
                }}
              >
                LOGOUT
              </button>
              <button
                title="cancel"
                className={styles.button}
                onClick={() => {
                  dispatch(toggleModalOpen());
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
