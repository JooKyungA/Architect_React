// import { useRef } from 'react';
// import { Link } from 'react-router-dom';
// import Anime from '../../asset/anime';

// function Aside() {
// 	const asideRef = useRef(null);
// 	const _top = useRef(null);
// 	const _right = useRef(null);
// 	const _bottom = useRef(null);
// 	const _left = useRef(null);
// 	const _inner = useRef(null);
// 	const viewSpeed = 500;

// 	// 버튼 클릭하면 visual 컴포넌트를 off로 만들고 viewOpen함수를 실행해야되는데...어떻게해야하는지

// 	const viewOpen = (e) => {
// 		e.preventDefault();
// 		asideRef.current.style.display = 'block';
// 		new Anime(_top, {
// 			prop: 'width',
// 			value: '100%',
// 			duration: viewSpeed,
// 			callback: () => {
// 				new Anime(_right, {
// 					prop: 'height',
// 					value: '100%',
// 					duration: viewSpeed,
// 					callback: () => {
// 						new Anime(_bottom, {
// 							prop: 'width',
// 							value: '100%',
// 							duration: viewSpeed,
// 							callback: () => {
// 								new Anime(_left, {
// 									prop: 'height',
// 									value: '100%',
// 									duration: viewSpeed,
// 									callback: () => {
// 										new Anime(_inner, {
// 											prop: 'opacity',
// 											value: 1,
// 											duration: viewSpeed,
// 										});
// 									},
// 								});
// 							},
// 						});
// 					},
// 				});
// 			},
// 		});
// 	};
// 	const viewClose = (e) => {
// 		e.preventDefault();
// 		new Anime(_inner, {
// 			prop: 'opacity',
// 			value: 0,
// 			duration: viewSpeed,
// 			callback: () => {
// 				new Anime(_top, {
// 					prop: 'width',
// 					value: '0%',
// 					duration: viewSpeed,
// 				});
// 				new Anime(_right, {
// 					prop: 'height',
// 					value: '0%',
// 					duration: viewSpeed,
// 				});
// 				new Anime(_bottom, {
// 					prop: 'width',
// 					value: '0%',
// 					duration: viewSpeed,
// 				});
// 				new Anime(_left, {
// 					prop: 'height',
// 					value: '0%',
// 					duration: viewSpeed,
// 					callback: () => {
// 						asideRef.current.style.display = 'none';

// 						visual.classList.remove('off');
// 					},
// 				});
// 			},
// 		});
// 	};

// 	return (
// 		<aside id='aside' ref={asideRef}>
// 			<div className='top' ref={_top}></div>
// 			<div className='right' ref={_right}></div>
// 			<div className='bottom' ref={_bottom}></div>
// 			<div className='left' ref={_left}></div>
// 			<div className='inner' ref={_inner}>
// 				<img
// 					className='pic'
// 					src={`${process.env.PUBLIC_URL}/img/aside.jpg`}
// 					alt='액자가 걸려있는 침실 인테리어 사진'
// 				/>
// 				<div className='content'>
// 					<h2>Lorem, ipsum.</h2>
// 					<p>
// 						Est quia minima aut quos numquam dolor repellendus expedita dignissimos, optio excepturi
// 						fugiat eum rerum quasi perferendis neque, placeat nam delectus deserunt.
// 					</p>
// 					<Link href='/' className='btnViewClose'>
// 						<img
// 							src={`${process.env.PUBLIC_URL}/img/close.png`}
// 							alt='view content를 닫는 기능을 하는 X 버튼'
// 						/>
// 					</Link>
// 				</div>
// 			</div>
// 		</aside>
// 	);
// }

// export default Aside;
