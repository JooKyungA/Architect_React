import { useRef } from 'react';

function Layout(props) {
	const frame = useRef(null);
	return (
		<section className={`content_sub ${props.name}`} ref={frame}>
			<div className='inner'>{props.children}</div>
		</section>
	);
}

export default Layout;
