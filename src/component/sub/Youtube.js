import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import Modal from '../common/Modal';

function Youtube() {
	const modal = useRef(null);
	const [Items, setItems] = useState([]);
	const [index, setIndex] = useState(0);
	useEffect(() => {
		const key = 'AIzaSyCe4VTdOeeczNpK2P90-h1K2ZmPWygTVOY';
		const playlistId = 'PLB11APmWdapRtpUvss55ipqwUpcIxj3Eq';
		const num = 9;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

		axios.get(url).then((json) => {
			setItems(json.data.items);
		});
	}, []);
	return (
		<>
			<Layout name={'Youtube'}>
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

export default Youtube;
