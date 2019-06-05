import styled from "styled-components";
import {
  alignItems,
  flexDirection,
  flexWrap,
  justifyContent
} from "styled-system";

import { createBox } from "./index";

export function createFlex(StyledElement) {
  return createBox(
    styled(StyledElement`
    display: flex;
    ${alignItems}
    ${flexDirection}
    ${flexWrap}
    ${justifyContent}
  `)
  );
}
