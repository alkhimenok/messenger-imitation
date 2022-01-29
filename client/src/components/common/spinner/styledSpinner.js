import styled from 'styled-components'
import { getDisplayFlex, getCenterPosition } from '../../../utils/styledUtils'
import { PRIMARY_COLOR, PRIMARY_DARK_COLOR } from '../../../constants/constants'

export const SpinnerIcon = styled.div`
	width: 100%;
	height: 100%;
	background-color: ${PRIMARY_DARK_COLOR};
`
export const SpinnerBody = styled.div`
	${getCenterPosition()}
	${getDisplayFlex('center', 'space-between')}
`
export const SpinnerLine = styled.div`
	margin: 2px;
	background-color: ${PRIMARY_COLOR};
	&:nth-child(1) {
		animation-name: spinner-line-1;
	}
	&:nth-child(2) {
		animation-name: spinner-line-2;
	}
	&:nth-child(3) {
		animation-name: spinner-line-3;
	}
	animation-duration: 1s;
	animation-iteration-count: infinite;
	animation-direction: alternate-reverse;
	@keyframes spinner-line-1 {
		0% {
			width: 3px;
			height: 5px;
		}
		25% {
			width: 10px;
			height: 30px;
		}
		100% {
			width: 3px;
			height: 5px;
		}
	}
	@keyframes spinner-line-2 {
		0% {
			width: 3px;
			height: 5px;
		}
		50% {
			width: 10px;
			height: 30px;
		}
		100% {
			width: 3px;
			height: 5px;
		}
	}
	@keyframes spinner-line-3 {
		0% {
			width: 3px;
			height: 5px;
		}
		75% {
			width: 10px;
			height: 30px;
		}
		100% {
			width: 3px;
			height: 5px;
		}
	}
`
