import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFlickr } from '../../redux/flickrSlice';
import Masonry from 'react-masonry-component';
import Layout from '../common/Layout';
import Modal from '../common/Modal';

function PortfolioSub() {
	const dispatch = useDispatch();
	const masonryOptions = { transitionDuration: '0.5s' };
	const path = process.env.PUBLIC_URL;
	const modal = useRef(null);
	const frame = useRef(null);
	const input = useRef(null);
	const btns = useRef(null);
	const [Loading, setLoading] = useState(true);
	const [Index, setIndex] = useState(0);
	const user_id = '197141079@N07';
	const photoset_ids = [
		'72177720305070823',
		'72177720305050751',
		'72177720305054577',
		'72177720305050761',
	];
	const Items = useSelector((store) => store.flickr.data);
	const photoset_num = useSelector((store) => store.flickr.photosetNum);

	const isOn = (e) => {
		for (let i of btns.current.children) {
			i.classList.remove('on');
		}
		e.target.classList.add('on');
	};

	const showSearch = () => {
		const tag = input.current.value.trim();
		if (!tag) return alert('검색어를 입력하세요.');
		if (Items.length === 0) return alert('검색하신 이미지의 데이터가 없습니다');
		input.current.value = '';
		dispatch(fetchFlickr({ type: 'search', tags: tag }));
		frame.current.classList.remove('on');
		setLoading(true);
		for (let i of btns.current.children) {
			i.classList.remove('on');
		}
	};

	const showPhotosets = (idx) => {
		dispatch(
			fetchFlickr({ type: 'photosets', user: user_id, photoset: photoset_ids[idx], num: idx })
		);
		frame.current.classList.remove('on');
		setLoading(true);
	};

	useEffect(() => {
		setTimeout(() => {
			frame.current.classList.add('on');
			setLoading(false);
			window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
		}, 500);
	}, [Items]);

	return (
		<>
			<Layout name={'PortfolioSub'}>
				<h1>PORTFOLIO</h1>
				<p>
					You can see the project we've been working on so far. The project is carried out with a
					trendy architectural design and interior suitable for the concept while harmonizing with
					the surrounding landscape. Check out our portfolio.
				</p>
				<section id='searchBox'>
					<input
						type='text'
						id='search'
						placeholder='검색어 입력'
						ref={input}
						onKeyUp={(e) => e.key === 'Enter' && showSearch()}
					/>
					<button className='btnSearch' onClick={showSearch}>
						SEARCH
					</button>
				</section>
				<div className='btns' ref={btns}>
					<button
						className={photoset_num == null || photoset_num === 0 ? 'on' : ''}
						onClick={(e) => {
							isOn(e);
							showPhotosets(0);
						}}
					>
						HOUSE
					</button>
					<button
						className={photoset_num === 1 ? 'on' : ''}
						onClick={(e) => {
							isOn(e);
							showPhotosets(1);
						}}
					>
						OFFICE
					</button>
					<button
						className={photoset_num === 2 ? 'on' : ''}
						onClick={(e) => {
							isOn(e);
							showPhotosets(2);
						}}
					>
						RESTAURANT
					</button>
					<button
						className={photoset_num === 3 ? 'on' : ''}
						onClick={(e) => {
							isOn(e);
							showPhotosets(3);
						}}
					>
						OTHERS
					</button>
				</div>
				{Loading && (
					<img
						src={`${path}/img/loading.gif`}
						alt='이미지 전체를 불러오는 동안 사용자가 로딩중임을 알 수 있도록 화면에 나타낼 로딩 이미지'
						className='loading'
					/>
				)}
				<section id='gallery' ref={frame}>
					<Masonry elementType={'ul'} options={masonryOptions} className='list'>
						{Items.map((el, idx) => {
							return (
								<li className='item' key={el.id}>
									<div>
										<Link
											to='/portfolio'
											onClick={() => {
												setIndex(idx);
												modal.current.open();
											}}
										>
											<img
												src={`https://live.staticflickr.com/${el.server}/${el.id}_${el.secret}_m.jpg`}
												alt={el.title}
											/>
										</Link>
										<p>{el.title}</p>
									</div>
								</li>
							);
						})}
					</Masonry>
				</section>
			</Layout>
			<Modal ref={modal}>
				<img
					src={`https://live.staticflickr.com/${Items[Index]?.server}/${Items[Index]?.id}_${Items[Index]?.secret}_b.jpg`}
					alt={Items[Index]?.title}
				/>
			</Modal>
		</>
	);
}

export default PortfolioSub;
