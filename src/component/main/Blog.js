import { Link } from 'react-router-dom';

function Blog() {
	return (
		<section id='blog' className='scrollView'>
			<div className='inner'>
				<h1>BLOG</h1>
				<div className='wrap'>
					{/* article map 반복 */}
					<article>
						<h2>
							<Link to='/'></Link>
						</h2>
						<div className='pic'>
							<img src='' alt='' />
						</div>
						<p></p>
					</article>
				</div>
			</div>
		</section>
	);
}

export default Blog;
