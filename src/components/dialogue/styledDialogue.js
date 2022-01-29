import styled from 'styled-components'
import { getDisplayFlex } from '../../utils/styledUtils'
import {
	XS_SIZE,
	SM_SIZE,
	MD_SIZE,
	XXL_SIZE,
	PRIMARY_COLOR,
	THIRD_COLOR,
	PRIMARY_DARK_COLOR,
	THIRD_DARK_COLOR,
	DELAY,
	BORDER_RADIUS_SIZE
} from '../../constants/constants'

export const DialogueSection = styled.li`
	${getDisplayFlex('center', 'flex-start')}
	padding: ${XS_SIZE};
	border-radius: ${BORDER_RADIUS_SIZE};
	transition: ${DELAY};
	cursor: pointer;
	&:hover {
		background-color: ${PRIMARY_DARK_COLOR};
	}
	&.--selected {
		background-color: ${PRIMARY_COLOR};
		.dialogue__title,
		.dialogue__message {
			color: ${THIRD_COLOR};
		}
	}
	* {
		pointer-events: none;
	}
`
export const DialoguePicture = styled.img`
	width: ${XXL_SIZE};
	height: ${XXL_SIZE};
	margin: 0 ${SM_SIZE} 0 0;
	border-radius: 50%;
	user-select: none;
`
export const DialogueInfo = styled.div`
	max-width: calc(100% - (${XXL_SIZE} + ${SM_SIZE}));
	height: ${XXL_SIZE};
	padding: ${XS_SIZE} 0;
	${getDisplayFlex('flex-start', 'space-between', 'column')}
`
export const DialogueTitle = styled.h2`
	font-size: ${MD_SIZE};
	color: ${THIRD_DARK_COLOR};
`
export const DialogueMessage = styled.p`
	max-width: 100%;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
`
