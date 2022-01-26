import styled from 'styled-components'
import {
	MAX_WIDTH,
	BASE_SIZE,
	PRIMARY_COLOR,
	SECONDARY_COLOR,
	PRIMARY_TEXT_COLOR,
	SECONDARY_TEXT_COLOR,
	PRIMARY_FONT,
	SECONDARY_FONT
} from '../../constants/constants'

export const HeaderSection = styled.header`
	padding: calc(${BASE_SIZE} * 2) 0;
	background-color: ${PRIMARY_COLOR};
`
