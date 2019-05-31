import styled from 'styled-components';

import { createFlex } from './index';

export function createAbsoluteFlex(StyledElement) {
  return createFlex(styled(StyledElement`
    position: absolute;
    top: ${p => p.top || 0};
    bottom: ${p => p.bottom || 0};
    left: ${p => p.left || 0};
    right: ${p => p.right || 0};
  `));
}
