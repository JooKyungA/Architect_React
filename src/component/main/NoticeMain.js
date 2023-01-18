import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function NoticeMain() {
	const getLocalData = () => {
		const dummyPosts = [
			{
				title: 'Korean Brand Preference Architectural Design Award in 2022',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
			},
			{
				title: 'Signing a Design Agreement for Officetels with Urban Innovation Corporation',
				content:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur excepturi atque nobis praesentium omnis obcaecati. Sapiente illo nemo doloremque non rem culpa reiciendis modi labore praesentium eum delectus aut repellat necessitatibus, laboriosam in unde impedit?',
			},
			{
				title: 'Signing a contract for the extension of the electrical office building',
				content:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit architecto nisi quae? Explicabo repudiandae doloremque nisi quae molestias totam, quisquam facilis quam perferendis voluptate sequi praesentium ab enim temporibus',
			},
			{
				title: 'Jeju Center New Construction Contract Enclosed',
				content:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem natus temporibus alias maxime. Voluptatibus veniam iure, quis, nesciunt odit fugit atque et facere accusantium illo corrupti est soluta blanditiis',
			},
			{
				title: 'we won at the 2022 Spaciux Design Award',
				content:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, distinctio eius. Explicabo totam voluptates, labore vel hic, modi nisi sit, amet expedita impedit consequatur incidunt inventore autem minima ducimus?',
			},
			{
				title: 'Architect of the Year Selected in 2022',
				content:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias rerum illum sit est nisi necessitatibus architecto, voluptates asperiores quaerat aspernatur atque, eum exercitationem quo deleniti vero voluptas deserunt debitis aliquam non inventore vitae saepe? Enim, dicta?',
			},
		];

		const data = localStorage.getItem('post');

		if (data) {
			return JSON.parse(data);
		} else {
			return dummyPosts;
		}
	};

	const data = useRef(getLocalData());

	useEffect(() => {
		localStorage.setItem('post', JSON.stringify(data.current));
	}, []);

	return (
		<section id='noticeMain' className='scrollView'>
			<div className='inner'>
				<h1>NOTICE</h1>
				<Link to='/notice'>
					VIEW MORE <FontAwesomeIcon icon={faArrowRight} />
				</Link>
				<div className='wrap'>
					{data.current.map((data, idx) => {
						if (idx >= 3) return null;
						return (
							<article key={data.title}>
								<h5>{data.title}</h5>
								<p>{data.content}</p>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default NoticeMain;
