import styled from "styled-components/native";

import {
  createAbsolute,
  createAbsoluteFlex,
  createBox,
  createFlex,
  createText
} from "../components";

export const Absolute = createAbsolute(styled.View);
export const AbsoluteFlex = createAbsoluteFlex(styled.View);
export const Box = createBox(styled.View);
export const Flex = createFlex(styled.View);
export const Text = createText(styled.Text);
