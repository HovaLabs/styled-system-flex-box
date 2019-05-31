import styled from 'styled-components';

import { createAbsolute, createAbsoluteFlex, createBox, createFlex } from './components';

export const Absolute = createAbsolute(styled.div);
export const AbsoluteFlex = createAbsoluteFlex(styled.div);
export const Box = createBox(styled.div);
export const Flex = createFlex(styled.div);
