import styled from 'styled-components';

import { createBox } from './index';

export function createAbsolute(StyledElement) {
  return createBox(styled(StyledElement`
    position: absolute;
    top: ${p => p.top || 0};
    bottom: ${p => p.bottom || 0};
    left: ${p => p.left || 0};
    right: ${p => p.right || 0};
  `));
}
