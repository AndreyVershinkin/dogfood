import Card from '../Card/card';
import './index.css';
import data from '../../assets/data.json'

const CardList = () => {
	return (
		<div className='cards'>
			{
				data.map(i => <Card {...i} />)
			}
		</div>
	);
};

export default CardList;
