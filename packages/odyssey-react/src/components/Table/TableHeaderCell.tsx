/*!
 * Copyright (c) 2021-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import React from 'react';
import type { ReactNode, DetailedHTMLProps, ThHTMLAttributes } from 'react';
import { CellTextFormats } from './Table';
import { useCx } from '../../utils';

export type Props = {
  children?: ReactNode,
  /**
   * The basic text format for the cell.
   */
   format?: CellTextFormats,
} & DetailedHTMLProps<ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>

type Ref = HTMLTableHeaderCellElement;

const TableHeaderCell = React.forwardRef<Ref, Props>((props, ref) => {
  const {
    children,
    className,
    format,
    ...rest
  } = props;

  const formatClass = format && useCx(`is-ods-table-${format}`,);
  const combinedClassName = className ? `${className} ${formatClass}` : formatClass;

  return (
    <th ref={ref} className={combinedClassName} {...rest}>
      {children}
    </th>
  );
});

export default TableHeaderCell;