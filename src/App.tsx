import { useState } from 'react';
import { CarCard } from './components/CarCard';
import { CarModal } from './components/CarModal';
import { Spinner } from './components/Spinner';

function App() {
	const [showModal, setShowModal] = useState(false);
	const [loading, setLoading] = useState(false);

	const openModal = () => {
		setShowModal(true);
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	};

	const closeModal = () => {
		setShowModal(false);
	};
	return (
		<div className="flex flex-wrap justify-center">
			<CarCard openModal={ openModal }/>
			<CarModal showModal={showModal} closeModal={ closeModal } />
			{loading && <Spinner />}
		</div>
	);
}

export default App;


