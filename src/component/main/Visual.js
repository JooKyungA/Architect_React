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
	const path = process.env.PUBLIC_URL;
	const slider = useRef(null);
	const visualRef = useRef(null);
	const aside = useRef(null);
	const [IsOff, setIsOff] = useState('');
	const [PrevOn, setPrevOn] = useState('');
	const [NextOn, setNextOn] = useState('');
	const [enableClick, setEnableClick] = useState(true);
	const viewSpeed = 500;
	const sliderSpeed = 500;

	// view content open
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
	// view content close
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

	// slider
	const init = () => {
		const panel = slider.current.children[0];
		panel.prepend(panel.lastElementChild);
		panel.prepend(panel.lastElementChild);
	};

	const nextSlide = () => {
		if (!enableClick) return;
		setEnableClick(false);
		setNextOn('on');
		const panel = slider.current.children[0];
		panel.append(panel.firstElementChild);

		setTimeout(() => {
			setNextOn('');
			setEnableClick(true);
		}, sliderSpeed);
	};

	const prevSlide = () => {
		if (!enableClick) return;
		setEnableClick(false);
		setPrevOn('on');
		const panel = slider.current.children[0];
		panel.prepend(panel.lastElementChild);

		setTimeout(() => {
			setPrevOn('');
			setEnableClick(true);
		}, sliderSpeed);
	};

	useEffect(() => {
		init();
	}, []);

	return (
		<figure id='visual' className={IsOff} ref={visualRef}>
			<div className='inner'>
				{/* aside 오픈 버튼 */}
				<Link to='#' className='btnViewOpen' onClick={openBox}>
					VIEW CONTENT
				</Link>

				{/* txt */}
				<div className='txt'>
					<h1>DCL ARCH.</h1>
					<p>
						We value the value of various relationships in everyday space experience, and through
						this, we aim to build together.
					</p>
				</div>

				{/* pic */}
				<div className='pic'>
					<img src={`${path}/img/main.jpg`} alt='' />
				</div>

				{/* slider */}
				<article className='slider' ref={slider}>
					<ul>
						{imgs.map((pic, idx) => {
							return (
								<li className={`vis_slider_${idx}`} key={imgs[idx]}>
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

				{/* aside */}
				<aside id='aside' ref={aside}>
					<div className='top'></div>
					<div className='right'></div>
					<div className='bottom'></div>
					<div className='left'></div>
					<div className='box'>
						<img
							className='asidePic'
							src={`${path}/img/aside.jpg`}
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
									src={`${path}/img/close.png`}
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
