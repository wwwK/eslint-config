/* eslint-disable import/unambiguous, import/no-commonjs */
exports.default = {
    'react/default-props-match-prop-types': 'off',
    'react/display-name': 'off',
    'react/forbid-component-props': 'off',
    'react/forbid-elements': 'off',
    'react/forbid-foreign-prop-types': 'warn',
    'react/forbid-prop-types': 'off',
    'react/jsx-boolean-value': [
        'error',
        'never'
    ],
    'react/jsx-closing-bracket-location': [
        'error',
        'line-aligned'
    ],
    'react/jsx-curly-spacing': [
        'error',
        'never'
    ],
    'react/jsx-equals-spacing': [
        'error',
        'never'
    ],
    'react/jsx-filename-extension': [
        'error',
        {
            'extensions': [
                '.js',
                '.jsx',
                '.es'
            ]
        }
    ],
    'react/jsx-first-prop-new-line': [
        'error',
        'multiline-multiprop'
    ],
    'react/jsx-handler-names': 'off',
    'react/jsx-indent-props': [
        'error',
        4
    ],
    'react/jsx-indent': [
        'error',
        4
    ],
    'react/jsx-key': 'error',
    'react/jsx-max-props-per-line': [
        'error',
        {
            'when': 'multiline'
        }
    ],
    'react/jsx-no-bind': [
        'warn',
        {
            'ignoreRefs': true,
            'allowArrowFunctions': false,
            'allowBind': false
        }
    ],
    'react/jsx-no-comment-textnodes': 'warn',
    'react/jsx-no-duplicate-props': [
        'error',
        {
            'ignoreCase': true
        }
    ],
    'react/jsx-no-literals': 'off',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': [
        'error',
        {
            'allowAllCaps': true
        }
    ],
    'react/jsx-sort-props': 'off',
    'react/jsx-tag-spacing': [
        'error',
        {
            'closingSlash': 'never',
            'beforeSelfClosing': 'always',
            'afterOpening': 'never'
        }
    ],
    'react/jsx-uses-react': 'off',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': [
        'error',
        {
            'declaration': true,
            'assignment': true,
            'return': true,
            'arrow': true
        }
    ],
    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-danger': 'warn',
    'react/no-deprecated': 'warn',
    'react/no-did-mount-set-state': 'off',
    'react/no-did-update-set-state': 'off',
    'react/no-will-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'warn',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': [
        'error',
        {
            'ignoreStateless': true
        }
    ],
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'off',
    'react/no-string-refs': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unused-prop-types': 'off',
    'react/prefer-es6-class': [
        'error',
        'always'
    ],
    'react/prefer-stateless-function': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'error',
    'react/require-optimization': 'off',
    'react/require-render-return': 'error',
    'react/self-closing-comp': [
        'error',
        {
            'component': true,
            'html': false
        }
    ],
    'react/sort-prop-types': 'off',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react/sort-comp': [
        'off',
        {
            order: [
                'static-properties',
                'static-methods',
                'state',
                'properties',
                'lifecycle',
                'everything-else',
                'render'
            ],
            groups: {
                'static-properties': [
                    'displayName',
                    'propTypes',
                    'contextTypes',
                    'childContextTypes',
                    'mixins',
                    'statics'
                ],
                'lifecycle': [
                    'getDefaultProps',
                    'getInitialState',
                    'constructor',
                    'getChildContext',
                    'componentWillMount',
                    'componentDidMount',
                    'componentWillReceiveProps',
                    'shouldComponentUpdate',
                    'componentWillUpdate',
                    'componentDidUpdate',
                    'componentDidCatch',
                    'componentWillUnmount'
                ]
            }
        }
    ]
};

exports.strict = {
    ...exports.default,
    'react/forbid-component-props': 'warn',
    'react/forbid-prop-types': 'warn',
    'react/jsx-handler-names': [
        'error',
        {
            'eventHandlerPrefix': '.*',
            'eventHandlerPropPrefix': 'on'
        }
    ],
    'react/jsx-no-bind': [
        'error',
        {
            'ignoreRefs': true,
            'allowArrowFunctions': false,
            'allowBind': false
        }
    ]
};
