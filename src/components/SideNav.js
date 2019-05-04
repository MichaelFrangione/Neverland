import React, { Component } from 'react';

import styled from 'styled-components';

const SideNavContainer = styled.div`
	position: fixed;
	top: 50%;
	transform: translateY(-50%);
	right: 0px;
	margin: 0 auto;
	z-index: 1000;

	& ul {
		list-style: none;

		& li {
			cursor: pointer;
		}
	}
	@media (max-width: 600px) {
		display: none;
	}
`;

const Dot = styled.div`
	position: relative;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	margin: 16px;
	background: #bcd6cd;
	box-sizing: border-box;
	opacity: 0.5;
	transition: all .3s cubic-bezier(.23, 1, .32, 1);

	&:hover {
		opacity: 1;
	}
`;

const SectionName = styled.span`
	pointer-events: none;
	opacity: 0;
	position: absolute;
	right: 0px;
	top: -10px;
	color: #fff;
	background: #bcd6cd;
	padding: 5px 10px;
	text-transform: uppercase;
	letter-spacing: 0.13em;
	font-weight: bold;
	transition: all .3s cubic-bezier(.23, 1, .32, 1);

	${Dot}:hover & {
		opacity: 1;
		right: 16px;
	}
`;

class SideNav extends Component {
	onClicked(elId, position) {
		const pos = position || 'end';
		const el = document.getElementById(elId);
		if (el) {
			el.scrollIntoView({ behavior: 'smooth', block: pos });
		}
	}

	render() {
		return (
			<SideNavContainer>
				<ul>
					<li onClick={() => this.onClicked('landing', 'start')}>
						<Dot active>
							<SectionName>Home</SectionName>
						</Dot>
					</li>
					<li onClick={() => this.onClicked('productions')}>
						<Dot>
							<SectionName>Productions</SectionName>
						</Dot>
					</li>
					<li onClick={() => this.onClicked('events')}>
						<Dot>
							<SectionName>Events</SectionName>
						</Dot>
					</li>
					<li onClick={() => this.onClicked('training')}>
						<Dot>
							<SectionName>Training</SectionName>
						</Dot>
					</li>
					<li onClick={() => this.onClicked('about', 'start')}>
						<Dot>
							<SectionName>About</SectionName>
						</Dot>
					</li>
				</ul>
			</SideNavContainer>
		);
	}
}

export default SideNav;
