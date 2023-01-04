import { Link } from 'react-router-dom';
import { useRef } from 'react';
import Anime from '../../asset/anime';
import pic1 from '../../img/slider/pic1.jpg';
import pic2 from '../../img/slider/pic2.jpg';
import pic3 from '../../img/slider/pic3.jpg';
import pic4 from '../../img/slider/pic4.jpg';
import pic5 from '../../img/slider/pic5.jpg';

function Visual() {
	const imgs = [pic1, pic2, pic3, pic4, pic5];
	const visualRef = useRef(null);
	// const viewSpeed = 500;
	// const box = useRef(null);
	const rect = useRef(null);
	const speed = 1000;
	const openBox = () => {
		const [top, right, bottom, left, con] = rect.current.children;
		new Anime(top, {
			prop: 'width',
			value: '100%',
			duration: speed,
			callback: () => {
				new Anime(right, {
					prop: 'height',
					value: '100%',
					duration: speed,
					callback: () => {
						new Anime(bottom, {
							prop: 'width',
							value: '100%',
							duration: speed,
							callback: () => {
								new Anime(left, {
									prop: 'height',
									value: '100%',
									duration: speed,
									callback: () => {
										new Anime(con, {
											prop: 'opacity',
											value: 1,
											duration: speed * 2,
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
	const closeBox = () => {
		const [top, right, bottom, left, con] = rect.current.children;

		new Anime(con, {
			prop: 'opacity',
			value: 0,
			duration: speed,
			callback: () => {
				new Anime(top, { prop: 'width', value: '0%', duration: speed });
				new Anime(left, { prop: 'height', value: '0%', duration: speed });
				new Anime(right, { prop: 'height', value: '0%', duration: speed });
				new Anime(bottom, { prop: 'width', value: '0%', duration: speed });
			},
		});
	};

	return (
		<figure id='visual' ref={visualRef}>
			<div className='inner'>
				<a href='#' className='btnViewOpen' onClick={openBox}>
					VIEW CONTENT
				</a>
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
				<article className='slider'>
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
					<p className='prev'>
						<span></span>
					</p>
					<p className='next'>
						<span></span>
					</p>
				</div>
			</div>
			<div className='react' ref={rect}>
				<div className='top'></div>
				<div className='right'></div>
				<div className='bottom'></div>
				<div className='left'></div>
				<div className='con'>
					<span className='btnClose' onClick={closeBox}>
						close
					</span>
				</div>
			</div>
			{/* <aside id='aside'>
				<div className='react' ref={box}>
					<div className='top'></div>
					<div className='right'></div>
					<div className='bottom'></div>
					<div className='left'></div>
					<div className='inner'>
						<img
							className='pic'
							src={`${process.env.PUBLIC_URL}/img/aside.jpg`}
							alt='액자가 걸려있는 침실 인테리어 사진'
						/>
						<div className='content'>
							<h2>Lorem, ipsum.</h2>
							<p>
								Est quia minima aut quos numquam dolor repellendus expedita dignissimos, optio
								excepturi fugiat eum rerum quasi perferendis neque, placeat nam delectus deserunt.
							</p>
							<a href='#' className='btnViewClose' onClick={closeBox}>
								<img
									src={`${process.env.PUBLIC_URL}/img/close.png`}
									alt='view content를 닫는 기능을 하는 X 버튼'
								/>
							</a>
						</div>
					</div>
				</div>
			</aside> */}
		</figure>
	);
}

export default Visual;
