export const getDisplayFlex = (alignItems = 'center', justifyContent = 'center', flexDirection = 'row', flexWrap = 'nowrap') => {
	return `
    display: flex;
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    flex-direction: ${flexDirection};
    flex-wrap: ${flexWrap};
  `
}
