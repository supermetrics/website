/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import unified from 'unified';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import rehype2react from 'rehype-react';
import { ComponentDoc } from 'react-docgen-typescript';
import { getColor } from '@zendeskgarden/react-theming';
import { MD, Paragraph, Code } from '@zendeskgarden/react-typography';
import { Table, Head, Body, HeaderRow, HeaderCell, Row, Cell } from '@zendeskgarden/react-tables';

import { IPackage } from './PackageDescription';
import { StyledH3 } from './Typography';
import { Anchor } from '@zendeskgarden/react-buttons';

const processor = unified()
  .use(markdown)
  .use(remark2rehype)
  .use(rehype2react as any, {
    createElement: React.createElement,
    components: {
      a: Anchor,
      code: Code
    }
  });

export const PropSheets: React.FC<{ data: ComponentDoc[]; reactPackage: IPackage }> = ({
  data,
  reactPackage
}) => {
  return (
    <>
      {data &&
        data.map((propSheet, index) => (
          <div key={`${propSheet.displayName}-${index}`}>
            <StyledH3>{propSheet.displayName}</StyledH3>
            <MD isMonospace>
              import {`{${propSheet.displayName}}`} from &quot;{reactPackage.name}&quot;;
            </MD>
            <Paragraph>{(processor.processSync(propSheet.description) as any).result}</Paragraph>
            {Object.keys(propSheet.props).length > 0 && (
              <Table>
                <Head>
                  <HeaderRow>
                    <HeaderCell>Prop name</HeaderCell>
                    <HeaderCell>Type</HeaderCell>
                    <HeaderCell>Default</HeaderCell>
                    <HeaderCell>Description</HeaderCell>
                  </HeaderRow>
                </Head>
                <Body>
                  {Object.keys(propSheet.props).map(propSheetKey => {
                    const prop = propSheet.props[propSheetKey];

                    return (
                      <Row key={`${propSheet.displayName}-${propSheetKey}`}>
                        <Cell
                          css={css`
                            color: ${p => getColor('kale', 400, p.theme)};
                            font-family: ${p => p.theme.fonts.mono};
                          `}
                        >
                          {prop.name}
                        </Cell>
                        <Cell
                          css={css`
                            color: ${p => getColor('red', 600, p.theme)};
                            font-family: ${p => p.theme.fonts.mono};
                          `}
                        >
                          {prop.type.name}
                        </Cell>
                        <Cell
                          css={css`
                            font-family: ${p => p.theme.fonts.mono};
                          `}
                        >
                          {prop.defaultValue ? prop.defaultValue.value : '-'}
                        </Cell>
                        <Cell
                          css={`
                            word-wrap: break-word;
                          `}
                        >
                          {(processor.processSync(prop.description) as any).result}
                        </Cell>
                      </Row>
                    );
                  })}
                </Body>
              </Table>
            )}
          </div>
        ))}
    </>
  );
};
