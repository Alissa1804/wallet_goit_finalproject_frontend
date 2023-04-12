// import React from 'react';
import { useDispatch } from 'react-redux';
import styles from '../AddBtn/AddTransactionBtn.styled.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';


export function AddTransactionBtn() {
  const dispatch = useDispatch()
    // const isOpen = useSelector(state => state.modalReducer);
  
  function isModalAddTransactionOpen(state) {
      state.isModalOpen = !state.isModalOpen;
    }

    return (
        <div className={styles.eee}><AddCircleIcon
              className={styles.addButton}
              style={{ color: '#e0e0e0' }}
            />
        <button className = {styles.addButton}
            type='button' aria-label='add transaction button'
            onClick={() => {
                dispatch(isModalAddTransactionOpen)
            
            }}
          
        >
add transaction button
            </button>
            </div>
        
    )
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