import { useSelector } from 'react-redux';

function Youtube() {
	const Items = useSelector((store) => store.youtube.data);
	return (
		<section id='youtubeMain' className='scrollView'>
			<div className='inner'>
				<h1>YOUTUBE</h1>
				<div className='wrap'>
					{Items.map((data, idx) => {
						if (idx >= 3) return null;
						const tit = data.snippet.title;
						const desc = data.snippet.description;
						return (
							<article key={tit}>
								<h2>{tit.length > 45 ? tit.substr(0, 45) + '...' : tit}</h2>
								<div className='pic'>
									<img key={idx} src={data.snippet.thumbnails.high.url} alt={data.snippet.title} />
								</div>
								<p>{desc.length > 100 ? desc.substr(0, 100) + '...' : desc}</p>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Youtube;
