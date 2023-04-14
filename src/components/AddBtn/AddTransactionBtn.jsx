// import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../AddBtn/AddTransactionBtn.module.css';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import btn from '../../images/btn.svg';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { toggleTransactionModalOpen } from 'redux/global/global-slice';
import { AddTransaction } from 'components/AddTransaction/AddTransaction';

export function AddTransactionBtn() {
  const dispatch = useDispatch();
  // const isOpen = useSelector(state => state.modalReducer);
  const isTransactionModalOpen = useSelector(
    state => state.global.isTransactionModalOpen
  );
  const handleClick = () => {
    dispatch(toggleTransactionModalOpen());
  };

  return (
    <>
      <button
        className={styles.addButton}
        type="button"
        aria-label="add transaction button"
        onClick={handleClick}
      >
        <BsFillPlusCircleFill size={44} />
        {/* <img src={btn} alt="" width={44} height={44} /> */}

        {/* <AddCircleIcon sx={{ color: '#24CCA7', fontSize: 44, }} /> */}
      </button>
      {isTransactionModalOpen && <AddTransaction />}
    </>
  );
}

// import { useDispatch } from 'react-redux';

// export function AddTransactionBtn() {
//   const dispatch = useDispatch();

//   return (
//       <button className={styles.eee}
//      type='button' >
//      hello
//     </button>
//   );
// }

// export function AddTransactionBtn() {
//     // const dispatch = useDispatch()

//     return (
//         <div className={styles.eee}><AddCircleIcon
//               className={styles.addButton}
//               style={{ color: '#e0e0e0' }}
//             />
//         <button className={styles.eee}>

//             </button>
//             </div>

//     )
// }
