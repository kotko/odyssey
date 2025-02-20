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

import type * as Babel from "@babel/core";
import { resolve, dirname } from "path";
import compileFactory from "./compileFactory";
import { normalizeOpts, shouldInclude } from "./normalizeOpts";
import {
  tokenObjectExpression,
  variableDeclaration,
  identityObjectProxy,
  identityObjectProxyVariableDeclaration,
} from "./nodes";

export function plugin({ types: t }: typeof Babel): Babel.PluginObj {
  const compile = compileFactory();

  return {
    name: "odyssey",

    visitor: {
      ImportDeclaration(path, state) {
        const opts = normalizeOpts(state.opts);

        const importer = state?.file?.opts?.filename;
        if (typeof importer !== "string") {
          return;
        }

        const specifier = path.node.specifiers[0];
        if (!t.isImportDefaultSpecifier(specifier)) {
          return;
        }

        const importee = path.node.source.value;
        if (!shouldInclude(importee, opts.include)) {
          return;
        }

        if (opts.identityObjectProxy) {
          path.replaceWith(
            identityObjectProxyVariableDeclaration({
              name: specifier.local.name,
            })
          );

          return;
        }

        const filePath = resolve(dirname(importer), importee);
        const file = compile({ filePath });

        path.replaceWith(
          variableDeclaration({
            name: specifier.local.name,
            ...file,
          })
        );
      },

      CallExpression(path, state) {
        const opts = normalizeOpts(state.opts);

        const importer = state?.file?.opts?.filename;
        if (typeof importer !== "string") {
          return;
        }

        const callee = path.node.callee;
        if (!t.isIdentifier(callee)) {
          return;
        }
        if (callee.name !== "require") {
          return;
        }

        const argument = path.node.arguments[0];
        if (!t.isStringLiteral(argument)) {
          return;
        }
        const importee = argument.value;
        if (!shouldInclude(importee, opts.include)) {
          return;
        }

        if (opts.identityObjectProxy) {
          path.replaceWith(identityObjectProxy());

          return;
        }

        const filePath = resolve(dirname(importer), importee);
        const file = compile({ filePath });

        path.replaceWith(tokenObjectExpression(file));
      },
    },
  };
}
