import Layout from '../common/Layout';
import Modal from '../common/Modal';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Masonry from 'react-masonry-component';

function PortfolioSub() {
	const masonryOptions = { transitionDuration: '0.5s' };
	const frame = useRef(null);
	const input = useRef(null);
	const modal = useRef(null);
	const [Items, setItems] = useState([]);
	const [Loading, setLoading] = useState(true);
	const [Index, setIndex] = useState(0);
	const user_id = '197141079@N07';
	const photoset_id = '72177720305070823';

	const getFlickr = async (opt) => {
		const base = 'https://www.flickr.com/services/rest/?format=json&nojsoncallback=1';
		let url = '';
		const key = 'ae5dbef0587895ed38171fcda4afb648';
		const method_user = 'flickr.people.getPhotos';
		const method_search = 'flickr.photos.search';
		const method_photosets = 'flickr.photosets.getPhotos';
		const per_page = 25;
		if (opt.type === 'user') {
			url = `${base}&method=${method_user}&api_key=${key}&per_page=${per_page}&user_id=${opt.user}`;
		}
		if (opt.type === 'search') {
			url = `${base}&method=${method_search}&api_key=${key}&per_page=${per_page}&tags=${opt.tags}`;
		}
		if (opt.type === 'photosets') {
			url = `${base}&method=${method_photosets}&api_key=${key}&per_page=${per_page}&user_id=${opt.user}&photoset_id=${opt.photoset}`;
		}

		const result = await axios.get(url);
		if (opt.type === 'photosets') {
			setItems(result.data.photoset.photo);
		} else {
			if (result.data.photos.photo.length === 0) {
				frame.current.classList.add('on');
				setLoading(false);
				return alert('해당  검색어의 결과 이미지가 없습니다.');
			}
			setItems(result.data.photos.photo);
		}

		setTimeout(() => {
			frame.current.classList.add('on');
			setLoading(false);
		}, 500);
	};

	const showUser = () => {
		getFlickr({ type: 'user', user: user_id });
		frame.current.classList.remove('on');
		setLoading(true);
	};

	const showSearch = () => {
		const tag = input.current.value.trim();
		if (!tag) return alert('검색어를 입력하세요.');
		input.current.value = '';
		getFlickr({ type: 'search', tags: tag });
		frame.current.classList.remove('on');
		setLoading(true);
	};

	const showPhotosets = () => {
		getFlickr({ type: 'photosets', user: user_id, photoset: photoset_id });
		frame.current.classList.remove('on');
		setLoading(true);
	};

	useEffect(() => {
		showUser();
		// showPhotosets();
	}, []);

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
				{Loading && (
					<img
						src={`${process.env.PUBLIC_URL}/img/loading.gif`}
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
										<a
											href='#'
											onClick={() => {
												setIndex(idx);
												modal.current.open();
											}}
										>
											<img
												src={`https://live.staticflickr.com/${el.server}/${el.id}_${el.secret}_m.jpg`}
												alt={el.title}
											/>
										</a>
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
