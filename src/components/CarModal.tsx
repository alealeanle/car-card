import React from 'react';
import styles from './CarModal.module.scss';
import btnBackImage from '../assets/images/svg/btnBack.svg';
import carImage from '../assets/images/Kia.jpg';
import arrowDown from '../assets/images/svg/arrowDown.svg';
import car1 from '../assets/images/car1.png';
import car2 from '../assets/images/car2.png';
import car3 from '../assets/images/car3.png';
import map from '../assets/images/svg/map.svg';
import watch from '../assets/images/svg/watch.svg';

interface CarModalProps {
	showModal: boolean;
	closeModal: () => void;
}

const CarModal: React.FC<CarModalProps> = ({ showModal, closeModal, }) => {
	return (
		<>
			{showModal && (
				<div className={styles.modal}>
					<div className={styles.btnBackWrap}>
						<div className={styles.btnBackCont}>
							<button
								className={styles.btnBack}
								onClick={closeModal}
							>
								<img src={btnBackImage} alt="btnBackImage" className={styles.btnBackImg} />
							</button>
						</div>
					</div>


					
					<div className={styles.carInfo}>
						<div className={styles.carData}>
							<div className={styles.carData__title}>Kia Presto 2019</div>
							<div className={styles.carData__items}>
								<div className={styles.carData__item}>
									<div className={styles.item__key}>Марка</div>
									<div className={styles.item__value}>Kia</div>
								</div>
								<div className={styles.carData__item}>
									<div className={styles.item__key}>Модель</div>
									<div className={styles.item__value}>Presto</div>
								</div>
								<div className={styles.carData__item}>
									<div className={styles.item__key}>Пробег</div>
									<div className={styles.item__value}>500 км</div>
								</div>
								<div className={styles.carData__item}>
									<div className={styles.item__key}>Год</div>
									<div className={styles.item__value}>2019</div>
								</div>
								<div className={styles.carData__item}>
									<div className={styles.item__key}>Комиссия парка</div>
									<div className={styles.item__value}>0.1%</div>
								</div>
								<div className={styles.carData__item}>
									<div className={styles.item__key}>Коробка передач</div>
									<div className={styles.item__value}>Автомат</div>
								</div>
								<div className={styles.carData__item}>
									<div className={styles.item__key}>Тип топлива</div>
									<div className={styles.item__value}>Бензин</div>
								</div>
								<div className={styles.carData__item}>
									<div className={styles.item__key}>Название парка</div>
									<div className={styles.item__value}>Predator</div>
								</div>
							</div>
						</div>
						<div className={styles.carPrice}>
							<div className={styles.carPrice__title}>Выберите стоимость и схему дней</div>
							<div className={styles.carPrice__main}>
								<div className={styles.carPrice__scheme}>
									<div className={styles.carPrice__total}>1 650 ₽</div>
									<div className={styles.carPrice__days}>7 раб. / 0 вых.</div>
								</div>
								<button className={styles.carPrice__arrowDown}>
									<img src={arrowDown} alt="arrowDown" />
								</button>
							</div>
							<button className={styles.carBtn}>Забронировать</button>
						</div>
					</div>




					<div className={styles.main}>
						<div className={styles.mainImageWrap}>
							<img className={styles.mainImage} src={carImage} alt="carImage" />
							<div className={styles.carsWrap}>
								<button className={styles.carWrap}>  {/*<a href></a>*/}
									<img className={styles.car} src={car1} alt="" />
								</button>
								<button className={styles.carWrap}>  {/*<a href></a>*/}
									<img className={styles.car} src={car2} alt="" />
								</button>
								<button className={styles.carWrap}>  {/*<a href></a>*/}
									<img className={styles.car} src={car3} alt="" />
								</button>
							</div>
						</div>

						<div className={styles.mainInfo}>
							<div className={styles.mainAbout}>
								<div className={styles.mainLocation}>
									<div className={styles.mainTitle}>Адрес парка</div>
									<div className={styles.mainAdress}>
										<img src={map} alt="map" className={styles.mainAdressIcon} />
										<a href="https://2gis.ru/moscow/inside/4504235282622939/firm/70000001039179434?m=37.576219%2C55.868875%2F17.62" rel="noreferrer" target='_blank' className={styles.mainAdressText}>Москва, ул. Поморская 15с1, 127410</a>
									</div>
								</div>
								<div className={styles.mainShedule}>
									<div className={styles.mainSheduleTitle}>График работы</div>
									<div className={styles.mainSheduleItem}>
										<div className={styles.mainSheduleWeekdays}>
											<img src={watch} alt="watch" className={styles.mainSheduleIcon} />
											<div className={styles.mainSheduleText}>Пн - Пт: 10:00 - 22:00</div>
										</div>
										<div className={styles.mainSheduleWeekends}>Сб - Вс: выходной</div>
									</div>
								</div>
							</div>
							<div className={styles.mainTel}>
								<div className={styles.mainTelTitle}>Телефон</div>
								<a href="tel:+79991234567" className={styles.tel}>+7(999) 123-45-67</a>
							</div>
							<div className={styles.aboutPark}>
								<div className={styles.mainParkTitle}>О парке</div>
								<button className={styles.arrowDown}>
									<img src={arrowDown} alt="arrowDown" />
								</button>
							</div>
							<div className={styles.seeSimilarWrap}>
								<button className={styles.seeSimilar}>Смотреть похожие</button>
							</div>
							
						</div>
					</div>







				</div>
			)}
		</>
	);
};

export { CarModal };