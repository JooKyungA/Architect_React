import { useEffect } from 'react';

function Modal(props) {
	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, []);
	return (
		<aside className='modal'>
			<div className='box'>{props.children}</div>
			<span
				className='close'
				onClick={() => {
					props.setOpen(false);
				}}
			>
				+
			</span>
		</aside>
	);
}

export default Modal;
