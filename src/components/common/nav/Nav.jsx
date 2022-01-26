import React, { useState } from 'react'
import { uid } from 'uid'
import { NavSection, NavList, NavItem, NavLink } from './styledNav'

const Nav = ({ parentBlockClass, linkList, handleClick, them = 'light' }) => {
	const [indexCurrentLink, setIndexCurrentLink] = useState(0)

	return (
		<NavSection className={[parentBlockClass, 'nav'].join(' ')}>
			<NavList className="nav__list">
				{linkList.map(({ id, content, href }, i) => (
					<NavItem className="nav__item" id={id} key={uid()}>
						<NavLink
							className={['nav__link', `${indexCurrentLink === i ? '--current' : ''}`, `--${them}`].join(' ')}
							href={href}
							onClick={e => {
								setIndexCurrentLink(i)
								handleClick(e)
							}}>
							{content}
						</NavLink>
					</NavItem>
				))}
			</NavList>
		</NavSection>
	)
}

export default Nav
