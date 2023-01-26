
import s from './index.module.css';


export const CartItem = ({ productsCart }) => {
   return (
      <>
         {!productsCart.length && <NotFound buttonText='На главнуюг' title="В корзине нет товаров" buttonAction={() => navigate('/catalog')} />}
         <div className={s.cartList}>
            {
               productsCart.map((item, index) => <CartItem key={item._id} allData={item} {...item} />)
            }
         </div>
      </>
   );
};


