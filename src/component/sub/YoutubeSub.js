import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../common/Layout';
import Modal from '../common/Modal';

function YoutubeSub() {
	const modal = useRef(null);
	const [index, setIndex] = useState(0);
	const Items = useSelector((store) => store.youtube.data);

	return (
		<>
			<Layout name={'YoutubeSub'}>
				<h1>YOUTUBE</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, id asperiores quas mollitia
					dignissimos itaque minima dolorem ullam architecto ea. Nulla, neque voluptates.
				</p>
				<div className='vidList'>
					{Items.map((data, idx) => {
						const title = data.snippet.title;
						const desc = data.snippet.description;
						const date = data.snippet.publishedAt;
						return (
							<article key={data.id}>
								<div
									className='pic'
									onClick={() => {
										setIndex(idx);
										modal.current.open();
									}}
								>
									<img src={data.snippet.thumbnails.high.url} alt={data.snippet.title} />
								</div>
								<div className='con'>
									<h2>{title.length > 25 ? title.substr(0, 25) + '...' : title}</h2>
									<p>{desc.length > 90 ? desc.substr(0, 90) + '...' : desc}</p>
									<span>{date.split('T')[0]}</span>
								</div>
							</article>
						);
					})}
				</div>
			</Layout>
			<Modal ref={modal}>
				<iframe
					title={Items[index]?.id}
					src={`https://www.youtube.com/embed/${Items[index]?.snippet.resourceId.videoId}`}
				></iframe>
			</Modal>
		</>
	);
}

export default YoutubeSub;
