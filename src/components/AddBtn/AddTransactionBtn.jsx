// import React from 'react';
import { useDispatch } from 'react-redux';
import styles from '../AddBtn/AddTransactionBtn.module.css';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import btn from '../../images/btn.svg';
import { BsFillPlusCircleFill } from 'react-icons/bs'

export function AddTransactionBtn() {
  const dispatch = useDispatch();
  // const isOpen = useSelector(state => state.modalReducer);

  function isModalAddTransactionOpen(state) {
    state.isModalOpen = !state.isModalOpen;
  }

  return (
    <>
      <button
        className={styles.addButton}
        type="button"
        aria-label="add transaction button"
        onClick={() => {
          dispatch(isModalAddTransactionOpen);
        }}
      >
        <BsFillPlusCircleFill size={44} />
        {/* <img src={btn} alt="" width={44} height={44} /> */}

        {/* <AddCircleIcon sx={{ color: '#24CCA7', fontSize: 44, }} /> */}
      </button>
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
