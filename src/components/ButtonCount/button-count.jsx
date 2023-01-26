import { useState } from 'react';
import s from './index.module.css';

export function ButtonCount({ amount = 0, handleIncrement, handleDecrement, handleCountChange }) {
   const [value, setValue] = useState(amount);

   return (
      <div className={s.wrap}>
         <button className={s.minus} onClick={() => {
            handleDecrement && handleDecrement();
            setValue(prevState => prevState - 1)
         }}
            disabled={value <= 1}>-</button>
         <input type="number" value={value} className={s.num} onChange={(e) => {
            const countInCart = Number(e.target.value)
            if (countInCart > 0) {
               handleCountChange && handleCountChange();
               setValue(countInCart);
            } else {
               handleCountChange && handleCountChange(1);
               setValue(1);
            }
         }} />
         <button className={s.plus} onClick={() => {
            handleIncrement && handleIncrement();
            setValue(prevState => prevState + 1)
         }}>+</button>
      </div>
   )
}