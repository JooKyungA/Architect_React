function Awards() {
	return (
		<section id='awards' className='scrollView'>
			<div className='inner'>
				<h1>AWARDS</h1>
				<div className='wrap'>
					{/* award_tab map 반복 */}
					<div className='award_tab'>
						<input type='radio' name='acc' id='acc1' />
						<label htmlFor='acc1'>
							<h2></h2>
							<h3></h3>
						</label>
						<div className='content'>
							<img src='' alt='' />
							<p></p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Awards;
