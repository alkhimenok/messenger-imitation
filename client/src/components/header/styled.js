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

export const Logo = styled.a`
	font-size: calc(${BASE_SIZE} * 3);
	text-transform: uppercase;
	color: ${PRIMARY_TEXT_COLOR};
`
