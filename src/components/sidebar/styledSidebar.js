import styled from 'styled-components'
import { getScroll } from '../../utils/styledUtils'
import {
	BASE_SIZE,
	XS_SIZE,
	SM_SIZE,
	MD_SIZE,
	PRIMARY_DARK_COLOR,
	DELAY,
	BREAKPOINT_XS_MAX,
	BREAKPOINT_SM_MIN,
	BREAKPOINT_SM_MAX,
	BREAKPOINT_MD_MIN
} from '../../constants/constants'

export const SidebarSection = styled.aside`
	position: absolute;
	top: 0;
	transition: ${DELAY};
	@media screen and (min-width: ${BREAKPOINT_SM_MIN}) {
		left: 0;
		width: calc(${BASE_SIZE} * 40);
	}
	@media screen and (max-width: ${BREAKPOINT_SM_MAX}) {
		left: calc(${BASE_SIZE} * (-42));
		&.--show {
			left: 0;
		}
	}
	@media screen and (max-width: ${BREAKPOINT_XS_MAX}) {
		left: -110%;
		width: 100%;
		&.--show {
			left: 0;
		}
	}
	.sidebar__search {
		padding: ${SM_SIZE} 0;
		@media screen and (max-width: ${BREAKPOINT_SM_MAX}) {
			width: 90%;
			margin: auto 0 auto auto;
		}
		@media screen and (min-width: ${BREAKPOINT_MD_MIN}) {
			width: 100%;
		}
	}
	.sidebar__nav {
		padding: ${XS_SIZE} 0 ${MD_SIZE} 0;
	}
`
export const SidebarList = styled.ul`
	${getScroll(XS_SIZE, 'transparent', PRIMARY_DARK_COLOR)}
	overflow: auto;
`
