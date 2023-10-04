const base = require('./src/configs/base');

module.exports = {
   
   ...base,
   'extends': [ 'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:promise/recommended' ],
   'plugins': [
      '@typescript-eslint',
      'no-secrets',
      'sonarjs',
      'promise',
      'import'
   ],
   'parser': '@typescript-eslint/parser',
   'parserOptions': {
      'ecmaVersion': 'latest',
      'project': './tsconfig.json',
      'sourceType': 'module'
   },
   'settings': {
      'import/parsers': { '@typescript-eslint/parser': [ '.ts', '.tsx' ] },
      'import/resolver': { 'typescript': {} }
   },
   'overrides': [

      // JEST/TESTING (ZERO TOLERANCE)
      // These rules only apply to .spec.js, .spec.ts, .test.js, .test.ts files
      {
         'files': [ '**/*[spec|test].[t|j]s' ],
         'plugins': [ 'jest' ],
         'extends': [ 'plugin:jest/recommended' ],
         'rules': {
              
            'jest/prefer-expect-assertions': [
               'error',
               {
                  'onlyFunctionsWithAsyncKeyword': true,
                  'onlyFunctionsWithExpectInLoop': true,
                  'onlyFunctionsWithExpectInCallback': true 
               }
            ],
            'jest/prefer-each': 'error',
            'jest/prefer-to-have-length': 'error',
            'jest/max-expects': [ 'error', { max: 2 } ],
            'jest/prefer-expect-resolves': 'error',
            'jest/prefer-lowercase-title': 'error',
            'jest/no-deprecated-functions': 'error',
            'jest/prefer-hooks-in-order': 'error',
            'jest/prefer-hooks-on-top': 'error',
            'jest/prefer-equality-matcher': 'error',
            'jest/no-conditional-in-test': 'error'
         }
      }
   ],
   // NOTE RULES BELOW ARE IN *ADDITION* TO RECOMMENDED CONFIGS
   'rules': {
      // IMPORT RULES (ZERO TOLERANCE)
      'import/no-cycle': [ 'error', { maxDepth: 5 } ],
      'import/no-self-import': 'error',
      'import/default': 'error',
      'import/no-mutable-exports': 'error',
      'import/namespace': 'error',
      'import/named': 'error',
      'import/export': 'error',
      'import/no-empty-named-blocks': 'error',
      // IMPORT RULES (WARN)
      'import/no-unresolved': 'warn',
      // this rule does not seem to work...
      // 'import/no-relative-packages': 'warn',
      'import/no-named-as-default': 'warn',
      'import/no-named-as-default-member': 'warn',
      'import/no-deprecated': 'warn',
      'import/exports-last': 'warn',

      // SECURITY: SECRETS (ZERO TOLERANCE)
      'no-secrets/no-secrets': ["error",{
            // note: default is 4
            "tolerance":4.2, 
            "additionalRegexes": { 
               // source https://gist.github.com/magnetikonline/073afe7909ffdd6f10ef06a00bc3bc88#combined-together
               "Github tokens": "^(gh[ps]_[a-zA-Z0-9]{36}|github_pat_[a-zA-Z0-9]{22}_[a-zA-Z0-9]{59})$",
               "Basic Auth": "Authorization: Basic [A-Za-z0-9+/=]*",

            },
            // ignore uuid pattern
            "ignoreContent": "^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$"
            }],
        
      // CODE QUALITY: SONARJS (ZERO TOLERANCE)
      'sonarjs/cognitive-complexity': 'error',
      'sonarjs/elseif-without-else': 'error',
      'sonarjs/max-switch-cases': 'error',
      'sonarjs/no-all-duplicated-branches': 'error',
      'sonarjs/no-collapsible-if': 'error',
      'sonarjs/no-collection-size-mischeck': 'error',
      'sonarjs/no-duplicate-string': 'error',
      'sonarjs/no-duplicated-branches': 'error',
      'sonarjs/no-element-overwrite': 'error',
      'sonarjs/no-empty-collection': 'error',
      'sonarjs/no-extra-arguments': 'error',
      'sonarjs/no-gratuitous-expressions': 'error',
      'sonarjs/no-identical-conditions': 'error',
      'sonarjs/no-identical-expressions': 'error',
      'sonarjs/no-identical-functions': 'error',
      'sonarjs/no-ignored-return': 'error',
      'sonarjs/no-inverted-boolean-check': 'error',
      'sonarjs/no-nested-switch': 'error',
      'sonarjs/no-nested-template-literals': 'error',
      'sonarjs/no-one-iteration-loop': 'error',
      'sonarjs/no-redundant-boolean': 'error',
      'sonarjs/no-redundant-jump': 'error',
      'sonarjs/no-same-line-conditional': 'error',
      'sonarjs/no-small-switch': 'error',
      'sonarjs/no-unused-collection': 'error',
      'sonarjs/no-use-of-empty-return-value': 'error',
      'sonarjs/no-useless-catch': 'error',
      'sonarjs/non-existent-operator': 'error',
      'sonarjs/prefer-immediate-return': 'error',
      'sonarjs/prefer-object-literal': 'error',
      'sonarjs/prefer-single-boolean-return': 'error',
      'sonarjs/prefer-while': 'error',

      // TYPESCRIPT RULES (https://typescript-eslint.io/rules/)
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-mixed-enums': 'warn',
      '@typescript-eslint/no-unsafe-enum-comparison': 'warn',
      '@typescript-eslint/prefer-enum-initializers': 'warn',
      '@typescript-eslint/prefer-literal-enum-member': 'warn',
      '@typescript-eslint/prefer-includes': 'warn',
      '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
      '@typescript-eslint/array-type': [
         'warn',
         {
            default: 'generic',
            readonly: 'generic' 
         } 
      ],
      
      // ESLINT SUGGESTIONS (https://eslint.org/docs/latest/rules/#suggestions)
      'curly': 'warn',
      'default-case': 'warn',
      'default-case-last': 'warn',
      'no-else-return': 'warn',
      'no-console': 'warn',
      'no-inline-comments': 'warn',
      'no-lonely-if': 'warn',
      'eqeqeq': 'warn',
      'no-new-wrappers': 'warn',
       // Semis are required so we are not concerned with ASI
      'no-plusplus': 'off',
      'no-return-await': 'warn',
      'no-throw-literal': 'warn',
      'no-nested-ternary': 'warn',
      'no-useless-constructor': 'warn',
      'no-useless-rename': 'warn',
      'prefer-spread': 'warn',
      'rest-spread-spacing': [ 'warn', 'never' ],
      'computed-property-spacing': [ 'warn', 'never' ],
      'no-whitespace-before-property': 'warn',
      'yoda': 'warn',
    
      // ESLINT POSSIBLE PROBLEMS (https://eslint.org/docs/latest/rules/#possible-problems)
      'no-self-compare': 'warn',
      'no-unreachable-loop': 'warn',

      // ESLINT LAYOUT & FORMATTING (https://eslint.org/docs/latest/rules/#layout--formatting)
      'multiline-ternary': [ 'warn', 'always' ],
      'indent': [
         'warn',
         4,
         {
            'SwitchCase': 1,
            'ignoredNodes': [
               'JSXElement',
               'JSXElement > *',
               'JSXAttribute',
               'JSXIdentifier',
               'JSXNamespacedName',
               'JSXMemberExpression',
               'JSXSpreadAttribute',
               'JSXExpressionContainer',
               'JSXOpeningElement',
               'JSXClosingElement',
               'JSXFragment',
               'JSXOpeningFragment',
               'JSXClosingFragment',
               'JSXText',
               'JSXEmptyExpression',
               'JSXSpreadChild'
            ] 
         } 
      ],
      'key-spacing': [
         'warn',
         {
            beforeColon: false,
            afterColon: true 
         } 
      ],
      'no-multiple-empty-lines': [ 'warn', { max: 1 } ],
       // Prevent ASI
      'semi': [ 'error', 'always' ],
      'no-multi-spaces': 'warn',
      'space-in-parens': [ 'warn', 'never' ],
      'semi-spacing': 'warn',
      'array-bracket-newline': [
         'warn',
         {
            'multiline': true,
            'minItems': 4
         } 
      ],
      'array-element-newline': [
         'warn',
         {
            'multiline': true,
            'minItems': 4
         } 
      ],
      'new-parens': 'warn',
      'func-call-spacing': 'warn',
      'space-unary-ops': 'warn',
      'space-before-function-paren': [ 'warn', 'always' ],
      'space-before-blocks': [ 'warn', 'always' ],
      'quotes': [ 'warn', 'single' ],
      'array-bracket-spacing': [ 'warn', 'always' ],
      'arrow-spacing': [
         'warn',
         {
            'before': true,
            'after': true 
         } 
      ],
      'object-curly-spacing': [ 'warn', 'always' ],
      'padded-blocks': [ 'warn', 'never' ],
      'arrow-parens': 'warn',
      'comma-spacing': [
         'warn',
         {
            before: false,
            after: true 
         } 
      ],
      'space-infix-ops': 'warn',
      'keyword-spacing': [
         'warn',
         {
            before: true,
            after: true 
         } 
      ],
      'eol-last': [ 'warn', 'always' ],
      // conflicts with padding-line-between-statements
      'newline-after-var': 'off',
      'comma-dangle': [ 'warn', 'never' ],
      'comma-style': [ 'warn', 'last' ],
      'object-property-newline': [ 'warn', { 'allowAllPropertiesOnSameLine': false } ],
      'object-curly-newline': [
            "warn", {
                "ObjectExpression": { "multiline": true, "minProperties": 3, "consistent": true },
                "ObjectPattern": { "multiline": true, "minProperties": 3, "consistent": true },
                "ExportDeclaration": { "multiline": true, "minProperties": 3 }
            }
       ],
      'brace-style': [ 'warn', '1tbs', { allowSingleLine: false } ],
      'max-statements-per-line': [ 'warn', { 'max': 1 } ],
      'lines-between-class-members': [ 'warn', 'always', { 'exceptAfterSingleLine': true } ],
      'padding-line-between-statements': ['warn', 
      { blankLine: "always", prev: ["const", "let", "var"], next: "*"}, 
      { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"]},
      {
            // always add new line AFTER these
            blankLine: 'always',
            next: '*', 
            prev: [
               'block-like',
               'block',
               'class',
               'for',
               'function',
               'if',
               'multiline-const',
               'multiline-let',
               'switch',
           
            ] 
         },
   ]

   }
};
