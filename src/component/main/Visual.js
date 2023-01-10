import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Anime from '../../asset/anime';
import pic1 from '../../img/slider/pic1.jpg';
import pic2 from '../../img/slider/pic2.jpg';
import pic3 from '../../img/slider/pic3.jpg';
import pic4 from '../../img/slider/pic4.jpg';
import pic5 from '../../img/slider/pic5.jpg';

function Visual() {
	const imgs = [pic1, pic2, pic3, pic4, pic5];
	const slider = useRef(null);
	const visualRef = useRef(null);
	const aside = useRef(null);
	const [IsOff, setIsOff] = useState('');
	const [PrevOn, setPrevOn] = useState('');
	const [NextOn, setNextOn] = useState('');
	const viewSpeed = 500;

	const openBox = (e) => {
		e.preventDefault();
		aside.current.style.display = 'block';

		const [_top, _right, _bottom, _left, _box] = aside.current.children;

		setIsOff('off');

		new Anime(_top, {
			prop: 'width',
			value: '100%',
			duration: viewSpeed,
			callback: () => {
				new Anime(_right, {
					prop: 'height',
					value: '100%',
					duration: viewSpeed,
					callback: () => {
						new Anime(_bottom, {
							prop: 'width',
							value: '100%',
							duration: viewSpeed,
							callback: () => {
								new Anime(_left, {
									prop: 'height',
									value: '100%',
									duration: viewSpeed,
									callback: () => {
										new Anime(_box, {
											prop: 'opacity',
											value: 1,
											duration: viewSpeed,
										});
									},
								});
							},
						});
					},
				});
			},
		});
	};

	const closeBox = (e) => {
		e.preventDefault();
		const [_top, _right, _bottom, _left, _box] = aside.current.children;

		new Anime(_box, {
			prop: 'opacity',
			value: 0,
			duration: viewSpeed,
			callback: () => {
				new Anime(_top, { prop: 'width', value: '0%', duration: viewSpeed });
				new Anime(_right, { prop: 'height', value: '0%', duration: viewSpeed });
				new Anime(_bottom, { prop: 'width', value: '0%', duration: viewSpeed });
				new Anime(_left, {
					prop: 'height',
					value: '0%',
					duration: viewSpeed,
					callback: () => {
						aside.current.style.display = 'none';
						setIsOff('');
					},
				});
			},
		});
	};

	let sliderSpeed = 500;

	const init = () => {
		const panel = slider.current.children[0];
		const lis = panel.querySelectorAll('li');
		const len = lis.length;

		panel.style.width = 100 * len + '%';
		lis.forEach((el) => (el.style.width = 100 / len + '%'));
		panel.lastElementChild !== null && panel.prepend(panel.lastElementChild);
	};

	const nextSlide = () => {
		const panel = slider.current.children[0];
		new Anime(panel, {
			prop: 'margin-left',
			value: '-200%',
			duration: sliderSpeed,
			callback: () => {
				panel.append(panel.firstElementChild);
				panel.style.marginLeft = '-100%';
			},
		});
		setNextOn('on');
		setTimeout(() => {
			setNextOn('');
		}, 500);
	};

	const prevSlide = () => {
		const panel = slider.current.children[0];

		new Anime(panel, {
			prop: 'margin-left',
			value: '0%',
			duration: sliderSpeed,
			callback: () => {
				panel.prepend(panel.lastElementChild);
				panel.style.marginLeft = '-100%';
			},
		});
		setPrevOn('on');
		setTimeout(() => {
			setPrevOn('');
		}, 500);
	};

	useEffect(() => {
		init();
	}, []);

	return (
		<figure id='visual' className={IsOff} ref={visualRef}>
			<div className='inner'>
				<Link to='#' className='btnViewOpen' onClick={openBox}>
					VIEW CONTENT
				</Link>
				<div className='txt'>
					<h1>DCL ARCH.</h1>
					<p>
						We value the value of various relationships in everyday space experience, and through
						this, we aim to build together.
					</p>
				</div>
				<div className='pic'>
					<img src={`${process.env.PUBLIC_URL}/img/main.jpg`} alt='' />
				</div>
				<article className='slider' ref={slider}>
					<ul>
						{imgs.map((pic, idx) => {
							return (
								<li key={imgs[idx]}>
									<img src={pic} alt={pic} />
								</li>
							);
						})}
					</ul>
				</article>
				<div className='sliderBtn'>
					<p className={`prev ${PrevOn}`} onClick={prevSlide}>
						<span></span>
					</p>
					<p className={`next ${NextOn}`} onClick={nextSlide}>
						<span></span>
					</p>
				</div>
				<aside id='aside' ref={aside}>
					<div className='top'></div>
					<div className='right'></div>
					<div className='bottom'></div>
					<div className='left'></div>
					<div className='box'>
						<img
							className='asidePic'
							src={`${process.env.PUBLIC_URL}/img/aside.jpg`}
							alt='액자가 걸려있는 침실 인테리어 사진'
						/>
						<div className='content'>
							<h2>Lorem, ipsum.</h2>
							<p>
								Est quia minima aut quos numquam dolor repellendus expedita dignissimos, optio
								excepturi fugiat eum rerum quasi perferendis neque, placeat nam delectus deserunt.
							</p>
							<Link to='#' className='btnViewClose'>
								<img
									src={`${process.env.PUBLIC_URL}/img/close.png`}
									alt='view content를 닫는 기능을 하는 X 버튼'
									onClick={closeBox}
								/>
							</Link>
						</div>
					</div>
				</aside>
			</div>
		</figure>
	);
}

export default Visual;
