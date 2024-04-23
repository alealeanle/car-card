import React from 'react';
import carImage from '../assets/images/Kia.jpg';
import styles from './CarCard.module.scss';

interface CarCardProps {
	openModal: () => void
}

const CarCard: React.FC<CarCardProps> = ({ openModal }) => {

	return (
		<div className={styles.carCard}>
			<div className={styles.carCard__imageWrap}>
				<img className={styles.carCard__image} src={carImage} alt="Car" />
			</div>
			<div className={styles.carCard__body}>
				<div className={styles.carCard__text}>
					<div className={styles.carCard__title}>Title</div>
					<p className={styles.carCard__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel qui deserunt tempora atque dolor voluptate.</p>
				</div>
				<div className={styles.carCard__btnWrap}>
					<button
						className={styles.carCard__btn}
						onClick={openModal}
					>
						Подробнее
					</button>
				</div>
			</div>
		</div>
	);
};

export {CarCard}