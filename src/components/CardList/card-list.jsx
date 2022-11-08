import Card from '../Card/card';
import './index.css';


const CardList = ({ goods }) => {
	return (
		<div className='cards'>
			{
				goods.map(i => <Card {...i} />)
			}
		</div>
	);
};

export default CardList;
