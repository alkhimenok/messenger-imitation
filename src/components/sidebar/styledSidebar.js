import styled from 'styled-components'
import { BASE_SIZE, DELAY, BREAKPOINT_XS_MAX, BREAKPOINT_SM_MIN } from '../../constants/constants'

export const SidebarSection = styled.aside`
	position: absolute;
	top: 0;
	transition: ${DELAY};
	@media screen and (max-width: ${BREAKPOINT_XS_MAX}) {
		left: -110%;
		width: 100%;
		&.--show {
			left: 0;
		}
	}
	@media screen and (min-width: ${BREAKPOINT_SM_MIN}) {
		left: 0;
		width: calc(${BASE_SIZE} * 40);
	}
	.sidebar__search {
		@media screen and (max-width: ${BREAKPOINT_XS_MAX}) {
			width: 93%;
			margin: auto 0 auto auto;
		}
		@media screen and (min-width: ${BREAKPOINT_SM_MIN}) {
			width: 100%;
		}
	}
`
export const SidebarList = styled.ul``
