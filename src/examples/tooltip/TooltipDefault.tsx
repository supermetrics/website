/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import { Button } from '@zendeskgarden/react-buttons';

const TooltipDefault = () => {
  return (
    <Tooltip content="Tooltip">
      <Button>Tooltip will show on hover/focus</Button>
    </Tooltip>
  );
};

export default TooltipDefault;
