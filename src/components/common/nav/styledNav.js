import styled from 'styled-components'
import { getDisplayFlex, getScroll } from '../../../utils/styledUtils'
import {
	BASE_SIZE,
	XS_SIZE,
	SM_SIZE,
	MD_SIZE,
	PRIMARY_COLOR,
	SECONDARY_COLOR,
	THIRD_COLOR,
	PRIMARY_DARK_COLOR,
	SECONDARY_DARK_COLOR,
	BORDER_RADIUS_SIZE,
	DELAY
} from '../../../constants/constants'

export const NavSection = styled.nav`
	padding: ${SM_SIZE} 0;
	background-color: transparent;
`
export const NavList = styled.ul`
	${getDisplayFlex('center', 'space-between', 'row', 'nowrap')}
	max-width: 100%;
	overflow: auto;
	& > :first-child {
		margin-left: 0;
	}
	& > :last-child {
		margin-right: 0;
	}
	${getScroll('', '', '', '', true)}
`
export const NavItem = styled.li`
	margin: 0 ${MD_SIZE};
`
export const NavLink = styled.a`
	position: relative;
	display: block;
	padding: ${XS_SIZE} ${SM_SIZE};
	font-size: ${MD_SIZE};
	text-transform: capitalize;
	white-space: nowrap;
	border-radius: ${BORDER_RADIUS_SIZE};
	transition: ${DELAY};
	&::before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: calc(${BASE_SIZE} * 0.2);
		border-radius: ${MD_SIZE} ${MD_SIZE} 0 0;
	}
	&.--light {
		color: ${THIRD_COLOR};
	}
	&.--dark {
		color: ${SECONDARY_DARK_COLOR};
	}
	&:hover {
		&:not(.--current) {
			&.--light {
				background-color: ${SECONDARY_COLOR};
			}
			&.--dark {
				background-color: ${PRIMARY_DARK_COLOR};
			}
		}
	}
	&:active {
		&:not(.--current) {
			&.--light {
				color: ${SECONDARY_DARK_COLOR};
			}
			&.--dark {
				color: ${PRIMARY_COLOR};
			}
		}
	}
	&.--current {
		border-radius: 0;
		pointer-events: none;
		&.--light {
			&::before {
				background-color: ${THIRD_COLOR};
			}
		}
		&.--dark {
			color: ${PRIMARY_COLOR};
			&::before {
				background-color: ${PRIMARY_COLOR};
			}
		}
	}
`
