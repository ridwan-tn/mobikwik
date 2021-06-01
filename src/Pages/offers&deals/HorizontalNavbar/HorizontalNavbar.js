import React from 'react';
import './HorizontalNavbar.css';
export default function HorizontalNavbar({ setCloseNavbar, setVerticalNavbar, setRightbar, setCloseRightbar }) {
	const navbarToggle = () => {
		setVerticalNavbar(true);
		setCloseNavbar(false);
	};

	const close = () => {
		setCloseNavbar(true);
		setVerticalNavbar(false);
	};
	const rightbarOpen = (event) => {
		event.preventDefault();
		setRightbar(true);
		setCloseRightbar(false);
	};

	const rightbarClose = () => {
		setCloseRightbar(true);
		setRightbar(false);
	};
	return (
		<div className="row horizontal-navbar m-0  bg-color ">
			<div className="col-12">
				<nav className="navbar navbar-expand-lg navbar-light flex-nowrap sticky-top">
					<button
						class="navbar-toggler shadow-no noborder"
						type="button"
						onClick={navbarToggle}
						onBlur={close}
					>
						<div className="hamburger"></div>
					</button>
					<div
						className="collapse navbar-collapse d-flex flex-row align-items-center"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0 mt-2 flex-row">
							<li className="nav-item p-15 d-flex align-items-center">
								<a className="nav-link blue-color cursorPointer fs15 p-0 help" aria-current="page" href=" ">
									{' '}
									Help?
								</a>
							</li>
							<li className="nav-item p-15 br1 bl1 d-flex align-items-center">
								<a className="nav-link blue-color cursorPointer fs15 p-0" href=" ">
									{' '}
									Login
								</a>
							</li>
							<li className="nav-item  p-15 d-flex align-items-center">
								<a className="nav-link blue-color cursorPointer fs15   p-0" href=" ">
									Sign Up
								</a>
							</li>
							<li className="nav-item p-15 d-flex align-items-center">
								<a
									className="nav-link blue-color cursorPointer fs15 p-0 icon"
									href=" "
									onClick={rightbarOpen}
									onBlur={rightbarClose}
								>
									{' '}
									<i class="fas fa-user"></i>{' '}
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
}
