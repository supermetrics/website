/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import { Button } from '@zendeskgarden/react-buttons';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

const StyledGrid = styled(Grid)`
  margin-top: ${p => p.theme.space.base * 30}px;
`;

const StyledCol = styled(Col)`
  text-align: center;
`;

const TooltipType = () => {
  return (
    <StyledGrid>
      <Row>
        <StyledCol>
          <Tooltip
            isInitialVisible={true}
            content="Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic."
            type="light"
          >
            <Button>Light tooltip</Button>
          </Tooltip>
        </StyledCol>
        <StyledCol>
          <Tooltip isInitialVisible={true} content="Veggies es bonus vobis">
            <Button>Dark tooltip</Button>
          </Tooltip>
        </StyledCol>
      </Row>
    </StyledGrid>
  );
};

export default TooltipType;
