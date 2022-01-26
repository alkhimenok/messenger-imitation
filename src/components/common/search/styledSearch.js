import styled from 'styled-components'
import {
	SM_SIZE,
	MD_SIZE,
	LG_SIZE,
	XXL_SIZE,
	PRIMARY_COLOR,
	PRIMARY_DARK_COLOR,
	SECONDARY_DARK_COLOR,
	BORDER_RADIUS_SIZE_CIRCLE,
	THIN_BORDER,
	DELAY
} from '../../../constants/constants'

export const SearchSection = styled.section`
	position: relative;
	width: 100%;
`
export const SearchInput = styled.input`
	width: 100%;
	padding: ${SM_SIZE} ${LG_SIZE} ${SM_SIZE} ${XXL_SIZE};
	color: ${SECONDARY_DARK_COLOR};
	background-color: ${PRIMARY_DARK_COLOR};
	border: ${THIN_BORDER} transparent;
	border-radius: ${BORDER_RADIUS_SIZE_CIRCLE};
	transition: ${DELAY};
	&:focus {
		background-color: transparent;
		border-color: ${PRIMARY_COLOR};
	}
	&:focus + label {
		color: ${PRIMARY_COLOR};
	}
`
export const SearchLabel = styled.label`
	position: absolute;
	top: 50%;
	left: ${LG_SIZE};
	transform: translate(0, -50%);
	font-size: ${MD_SIZE};
	transition: ${DELAY};
`
