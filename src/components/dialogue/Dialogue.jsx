import React from 'react'
import { DialogueSection, DialoguePicture, DialogueInfo, DialogueTitle, DialogueMessage } from './styledDialogue'

const Dialogue = ({ parentBlockClass, options }) => {
	const defaultOptions = {
		picture: './images/defaultPicture.png',
		title: 'unknown',
		message: 'Currently there are no messages'
	}

	return (
		<DialogueSection className={[parentBlockClass, 'dialogue'].join(' ')}>
			<DialoguePicture className="dialogue__picture" src={options.picture || defaultOptions.picture} />
			<DialogueInfo className="dialogue__info">
				<DialogueTitle className="dialogue__title">{options.title || defaultOptions.title}</DialogueTitle>
				<DialogueMessage className="dialogue__message">{options.message || defaultOptions.message}</DialogueMessage>
			</DialogueInfo>
		</DialogueSection>
	)
}

export default Dialogue
