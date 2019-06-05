import styled from "styled-components";
import { get } from "lodash";
import {
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing
} from "styled-system";

import { createBox } from "./index";

function typography(p) {
  if (!get(p, "theme.typography")) return undefined;
  return p.theme.typography[p.typography];
}

export function createText(StyledElement) {
  return createBox(
    styled(StyledElement`
    ${fontFamily}
    ${fontWeight}
    ${textAlign}
    ${lineHeight}
    ${letterSpacing}
    ${typography}
    `)
  );
}
