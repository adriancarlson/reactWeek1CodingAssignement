import React from 'react';

export default class navigation extends React.Component {
	render() {
		return (
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<div className='container-fluid'>
					<div className='collapse navbar-collapse' id='navbarNav'>
						<ul className='navbar-nav'>
							<li className='nav-item'>
								<a className='nav-link active' aria-current='page' href='#'>
									Home
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='#'>
									About
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='#'>
									Contact us
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}
