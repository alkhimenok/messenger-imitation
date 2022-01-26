import styled from 'styled-components'
import {
	MAX_WIDTH,
	BASE_SIZE,
	XS_S1IZE,
	SM_SIZE,
	MD_SIZE,
	LG_SIZE,
	XL_SIZE,
	XXL_SIZE,
	PRIMARY_COLOR,
	SECONDARY_COLOR,
	PRIMARY_TEXT_COLOR,
	SECONDARY_TEXT_COLOR,
	PRIMARY_FONT,
	SECONDARY_FONT
} from '../../constants/constants'

export const Container = styled.div`
	max-width: ${MAX_WIDTH};
	margin: 0 auto;
`

export const Body = styled.div`
	padding: 0 ${XS_S1IZE};
`
