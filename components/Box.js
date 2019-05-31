import { isEmpty } from 'lodash';
import {
  space,
  color,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  flex,
  order,
  alignSelf,
  borders,
  borderColor,
  borderRadius,
  overflow,
  position,
  display,
} from 'styled-system';

export function createBox(StyledElement) {
  // Prevent from creating a new style whenever width or height are modified
  // https://medium.com/styled-components/how-styled-components-works-618a69970421#Performance-Tips
  return StyledElement.attrs(p => {
    const style = { ...height(p), ...width(p) };
    return isEmpty(style) ? {} : { style };
  })`
    ${space}
    ${color}
    ${width}
    ${p => minWidth({ minWidth: p.minWidth || 0 })} /* Default to min-width: 0 to save from dumb flex bugs */
    ${maxWidth}
    ${height}
    ${minHeight}
    ${maxHeight}
    ${flex}
    ${order}
    ${alignSelf}
    ${borders}
    ${borderColor}
    ${borderRadius}
    ${overflow}
    ${position}
    ${display}
  `;
}
