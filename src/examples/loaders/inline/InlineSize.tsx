/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Inline } from '@zendeskgarden/react-loaders';

const Example = () => (
  <Row alignItems="center">
    <Col textAlign="center">
      <Inline size={32} />
    </Col>
    <Col textAlign="center">
      <Inline size={48} />
    </Col>
    <Col textAlign="center">
      <Inline size={64} />
    </Col>
  </Row>
);

export default Example;
