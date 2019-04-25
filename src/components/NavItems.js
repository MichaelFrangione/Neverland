import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItems = () => {
	return (
		<ul className="nav-items">
			<li>
				<NavLink exact to="/">
					Home
				</NavLink>
			</li>
			<li>
				<NavLink exact to="/productions">
					Productions
				</NavLink>
			</li>
			<li>
				<NavLink exact to="/events">
					Events
				</NavLink>
			</li>
			<li>
				<NavLink exact to="/training">
					Training
				</NavLink>
			</li>
			<li>
				<NavLink exact to="/contact">
					Contact
				</NavLink>
			</li>
		</ul>
	);
};

export default NavItems;
