import styled from 'styled-components'
import { getDisplayFlex } from '../../utils/styledUtils'
import {
	BASE_SIZE,
	LG_SIZE,
	XL_SIZE,
	PRIMARY_COLOR,
	ERROR_COLOR,
	DELAY,
	BREAKPOINT_XS_MAX,
	BREAKPOINT_SM_MIN
} from '../../constants/constants'

export const BurgerIcon = styled.div`
	@media screen and (max-width: ${BREAKPOINT_XS_MAX}) {
		position: relative;
		z-index: 3;
		width: ${XL_SIZE};
		height: ${LG_SIZE};
		${getDisplayFlex('center', 'space-between', 'column')}
		padding: calc(${BASE_SIZE} * 0.7) 0 0 0;
		box-sizing: content-box;
    transition: ${DELAY};
		&::before,
    &::after {
			content: '';
			width: 100%;
			height: 15%;
			background-color: ${PRIMARY_COLOR};
			transition: ${DELAY};
		}
		&.close {
			transform: rotate(45deg);
			.burger__line {
				opacity: 0;
			}
			&::before,
			&::after {
				background-color: ${ERROR_COLOR};
			}
			&::before {
				transform: rotate(90deg) translate(30%, 0);
			}
			&::after {
				transform: translate(0, -270%);
			}
		}
	}
	@media screen and (min-width: ${BREAKPOINT_SM_MIN}) {
		display: none;
	}
`
export const BurgerLine = styled.span`
	@media screen and (max-width: ${BREAKPOINT_XS_MAX}) {
		width: 100%;
		height: 15%;
		background-color: ${PRIMARY_COLOR};
		transition: ${DELAY};
	}
`
