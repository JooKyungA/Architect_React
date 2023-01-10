import { useRef, useEffect } from 'react';

function Layout(props) {
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}, []);

	const frame = useRef(null);

	return (
		<section className={`content_sub ${props.name}`} ref={frame}>
			<div className='inner'>{props.children}</div>
		</section>
	);
}

export default Layout;
