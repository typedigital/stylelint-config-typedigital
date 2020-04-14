/* eslint sort-keys: ["error", "asc"], quote-props: ["error", "consistent"] */

module.exports = {
  rules: {
    'at-rule-blacklist': null, // https://stylelint.io/user-guide/rules/at-rule-blacklist
    'at-rule-empty-line-before': 'always', // https://stylelint.io/user-guide/rules/at-rule-empty-line-before
    'at-rule-name-case': 'lower', // https://stylelint.io/user-guide/rules/at-rule-name-case
    'at-rule-name-newline-after': null, // https://stylelint.io/user-guide/rules/at-rule-name-newline-after
    'at-rule-name-space-after': 'always', // https://stylelint.io/user-guide/rules/at-rule-name-space-after
    'at-rule-no-unknown': true, // https://stylelint.io/user-guide/rules/at-rule-no-unknown
    'at-rule-no-vendor-prefix': true, // https://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix
    'at-rule-property-requirelist': null, // https://stylelint.io/user-guide/rules/at-rule-property-requirelist
    'at-rule-semicolon-newline-after': 'always', // https://stylelint.io/user-guide/rules/at-rule-semicolon-newline-after
    'at-rule-semicolon-space-before': 'never', // https://stylelint.io/user-guide/rules/at-rule-semicolon-space-before
    'at-rule-whitelist': null, // https://stylelint.io/user-guide/rules/at-rule-whitelist
    'block-closing-brace-empty-line-before': 'never', // https://stylelint.io/user-guide/rules/block-closing-brace-empty-line-before
    'block-closing-brace-newline-after': 'always', // https://stylelint.io/user-guide/rules/block-closing-brace-newline-after
    'block-closing-brace-newline-before': 'always-multi-line', // https://stylelint.io/user-guide/rules/block-closing-brace-newline-before
    'block-closing-brace-space-after': null, // https://stylelint.io/user-guide/rules/block-closing-brace-space-after
    'block-closing-brace-space-before': null, // https://stylelint.io/user-guide/rules/block-closing-brace-space-before
    'block-no-empty': [true, { 'severity': 'warning' }], // https://stylelint.io/user-guide/rules/block-no-empty
    'block-opening-brace-newline-after': 'always-multi-line', // https://stylelint.io/user-guide/rules/block-opening-brace-newline-after
    // * turned off because never option would disallow whitespace (refer to https://github.com/stylelint/stylelint/issues/1011#issuecomment-215719632)
    'block-opening-brace-newline-before': null, // https://stylelint.io/user-guide/rules/block-opening-brace-newline-before
    'block-opening-brace-space-after': null, // https://stylelint.io/user-guide/rules/block-opening-brace-space-after
    'block-opening-brace-space-before': 'always', // https://stylelint.io/user-guide/rules/block-opening-brace-space-before
    'color-hex-case': 'lower', // https://stylelint.io/user-guide/rules/color-hex-case
    'color-hex-length': ['long', { 'severity': 'warning' }], // https://stylelint.io/user-guide/rules/color-hex-length
    'color-named': ['always-where-possible', { 'severity': 'warning' }], // https://stylelint.io/user-guide/rules/color-named
    'color-no-hex': null, // https://stylelint.io/user-guide/rules/color-no-hex
    'color-no-invalid-hex': true, // https://stylelint.io/user-guide/rules/color-no-invalid-hex
    'comment-empty-line-before': 'always', // https://stylelint.io/user-guide/rules/comment-empty-line-before
    'comment-no-empty': true, // https://stylelint.io/user-guide/rules/comment-no-empty
    'comment-whitespace-inside': 'always', // https://stylelint.io/user-guide/rules/comment-whitespace-inside
    'comment-word-blacklist': null, // https://stylelint.io/user-guide/rules/comment-word-blacklist
    'custom-media-pattern': null, // https://stylelint.io/user-guide/rules/custom-media-pattern
    'custom-property-empty-line-before': ['never', { 'severity': 'warning' }], // https://stylelint.io/user-guide/rules/custom-property-empty-line-before
    'custom-property-pattern': null, // https://stylelint.io/user-guide/rules/custom-property-pattern
    'declaration-bang-space-after': 'never', // https://stylelint.io/user-guide/rules/declaration-bang-space-after
    'declaration-bang-space-before': 'always', // https://stylelint.io/user-guide/rules/declaration-bang-space-before
    'declaration-block-no-duplicate-properties': [true, { 'ignore': ['consecutive-duplicates-with-different-values']}], // https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties
    'declaration-block-no-redundant-longhand-properties': true, // https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties
    'declaration-block-no-shorthand-property-overrides': true, // https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides
    'declaration-block-semicolon-newline-after': 'always-multi-line', // https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-after
    'declaration-block-semicolon-newline-before': 'never-multi-line', // https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-before
    'declaration-block-semicolon-space-after': ['always-single-line', { 'severity': 'warning' }], // https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-after
    'declaration-block-semicolon-space-before': 'never', // https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-before
    'declaration-block-single-line-max-declarations': 1, // https://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations
    'declaration-block-trailing-semicolon': ['always', { 'severity': 'warning' }], // https://stylelint.io/user-guide/rules/declaration-block-trailing-semicolon
    'declaration-colon-newline-after': ['always-multi-line', { 'severity': 'warning' }], // https://stylelint.io/user-guide/rules/declaration-colon-newline-after
    'declaration-colon-space-after': 'always', // https://stylelint.io/user-guide/rules/declaration-colon-space-after
    'declaration-colon-space-before': 'never', // https://stylelint.io/user-guide/rules/declaration-colon-space-before
    'declaration-empty-line-before': ['never', { 'severity': 'warning' }], // https://stylelint.io/user-guide/rules/declaration-empty-line-before
    'declaration-no-important': [true, { 'severity': 'error' }], // https://stylelint.io/user-guide/rules/declaration-no-important
    // * having an animation of 1s or more is most likely a mistake, also we can use ms for milliseconds if the animation is shorter
    'declaration-property-unit-blacklist': [{ '/^animation/': ['s']}, { 'severity': 'warning' }], // https://stylelint.io/user-guide/rules/declaration-property-unit-blacklist
    'declaration-property-unit-whitelist': null, // https://stylelint.io/user-guide/rules/declaration-property-unit-whitelist
    'declaration-property-value-blacklist': null, // https://stylelint.io/user-guide/rules/declaration-property-value-blacklist
    'declaration-property-value-whitelist': null, // https://stylelint.io/user-guide/rules/declaration-property-value-whitelist
    'font-family-name-quotes': ['always-where-recommended', { 'severity': 'warning' }], // https://stylelint.io/user-guide/rules/font-family-name-quotes
    'font-family-no-duplicate-names': true, // https://stylelint.io/user-guide/rules/font-family-no-duplicate-names
    'font-family-no-missing-generic-family-keyword': true, // https://stylelint.io/user-guide/rules/font-family-no-missing-generic-family-keyword
    'font-weight-notation': ['named-where-possible', { 'ignore': ['relative'], 'severity': 'warning' }], // https://stylelint.io/user-guide/rules/font-weight-notation
    'function-blacklist': null, // https://stylelint.io/user-guide/rules/function-blacklist
    'function-calc-no-invalid': true, // https://stylelint.io/user-guide/rules/function-calc-no-invalid
    'function-calc-no-unspaced-operator': true, // https://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator
    'function-comma-newline-after': ['always-multi-line', { 'severity': 'warning' }], // https://stylelint.io/user-guide/rules/function-comma-newline-after
    'function-comma-newline-before': null, // https://stylelint.io/user-guide/rules/function-comma-newline-before
    'function-comma-space-after': 'always', // https://stylelint.io/user-guide/rules/function-comma-space-after
    'function-comma-space-before': 'never', // https://stylelint.io/user-guide/rules/function-comma-space-before
    'function-linear-gradient-no-nonstandard-direction': null, // https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction
    'function-max-empty-lines': 0, // https://stylelint.io/user-guide/rules/function-max-empty-lines
    'function-name-case': ['lower', { 'severity': 'warning' }], // https://stylelint.io/user-guide/rules/function-name-case
    'function-parentheses-newline-inside': ['always-multi-line', { 'severity': 'warning' }], // https://stylelint.io/user-guide/rules/function-parentheses-newline-inside
    'function-parentheses-space-inside': ['never', { 'severity': 'warning' }], // https://stylelint.io/user-guide/rules/function-parentheses-space-inside
    'function-url-no-scheme-relative': true, // https://stylelint.io/user-guide/rules/function-url-no-scheme-relative
    'function-url-quotes': 'always', // https://stylelint.io/user-guide/rules/function-url-quotes
    'function-url-scheme-blacklist': null, // https://stylelint.io/user-guide/rules/function-url-scheme-blacklist
    'function-url-scheme-whitelist': null, // https://stylelint.io/user-guide/rules/function-url-scheme-whitelist
    'function-whitelist': null, // https://stylelint.io/user-guide/rules/function-whitelist
    'function-whitespace-after': ['always', { 'severity': 'warning' }], // https://stylelint.io/user-guide/rules/function-whitespace-after
    'indentation': 2, // https://stylelint.io/user-guide/rules/indentation
    // * we are already disallow !important statements, so we don't need this rule (i guess)
    'keyframe-declaration-no-important': null, // https://stylelint.io/user-guide/rules/keyframe-declaration-no-important
    'keyframes-name-pattern': null, // https://stylelint.io/user-guide/rules/keyframes-name-pattern
    'length-zero-no-unit': true, // https://stylelint.io/user-guide/rules/length-zero-no-unit
    'linebreaks': 'unix', // https://stylelint.io/user-guide/rules/linebreaks
    'max-empty-lines': 1, // https://stylelint.io/user-guide/rules/max-empty-lines
    'max-line-length': null, // https://stylelint.io/user-guide/rules/max-line-length
    'max-nesting-depth': [2, { 'ignore': ['pseudo-classes'], 'severity': 'warning' }], // https://stylelint.io/user-guide/rules/max-nesting-depth
    'media-feature-colon-space-after': 'always', // https://stylelint.io/user-guide/rules/media-feature-colon-space-after
    'media-feature-colon-space-before': 'never', // https://stylelint.io/user-guide/rules/media-feature-colon-space-before
    'media-feature-name-blacklist': null, // https://stylelint.io/user-guide/rules/media-feature-name-blacklist
    'media-feature-name-case': 'lower', // https://stylelint.io/user-guide/rules/media-feature-name-case
    'media-feature-name-no-unknown': true, // https://stylelint.io/user-guide/rules/media-feature-name-no-unknown
    'media-feature-name-no-vendor-prefix': true, // https://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix
    'media-feature-name-value-whitelist': null, // https://stylelint.io/user-guide/rules/media-feature-name-value-whitelist
    'media-feature-name-whitelist': null, // https://stylelint.io/user-guide/rules/media-feature-name-whitelist
    'media-feature-parentheses-space-inside': 'never', // https://stylelint.io/user-guide/rules/media-feature-parentheses-space-inside
    'media-feature-range-operator-space-after': 'always', // https://stylelint.io/user-guide/rules/media-feature-range-operator-space-after
    'media-feature-range-operator-space-before': 'always', // https://stylelint.io/user-guide/rules/media-feature-range-operator-space-before
    'media-query-list-comma-newline-after': 'always-multi-line', // https://stylelint.io/user-guide/rules/media-query-list-comma-newline-after
    'media-query-list-comma-newline-before': null, // https://stylelint.io/user-guide/rules/media-query-list-comma-newline-before
    'media-query-list-comma-space-after': 'always-single-line', // https://stylelint.io/user-guide/rules/media-query-list-comma-space-after
    'media-query-list-comma-space-before': 'never', // https://stylelint.io/user-guide/rules/media-query-list-comma-space-before
    'no-descending-specificity': true, // https://stylelint.io/user-guide/rules/no-descending-specificity
    'no-duplicate-at-import-rules': true, // https://stylelint.io/user-guide/rules/no-duplicate-at-import-rules
    'no-duplicate-selectors': true, // https://stylelint.io/user-guide/rules/no-duplicate-selectors
    'no-empty-first-line': true, // https://stylelint.io/user-guide/rules/no-empty-first-line
    'no-empty-source': true, // https://stylelint.io/user-guide/rules/no-empty-source
    'no-eol-whitespace': true, // https://stylelint.io/user-guide/rules/no-eol-whitespace
    'no-extra-semicolons': true, // https://stylelint.io/user-guide/rules/no-extra-semicolons
    'no-invalid-double-slash-comments': true, // https://stylelint.io/user-guide/rules/no-invalid-double-slash-comments
    'no-missing-end-of-source-newline': true, // https://stylelint.io/user-guide/rules/no-missing-end-of-source-newline
    'no-unknown-animations': true, // https://stylelint.io/user-guide/rules/no-unknown-animations
    'number-leading-zero': 'always', // https://stylelint.io/user-guide/rules/number-leading-zero
    'number-max-precision': 2, // https://stylelint.io/user-guide/rules/number-max-precision
    'number-no-trailing-zeros': true, // https://stylelint.io/user-guide/rules/number-no-trailing-zeros
    'property-blacklist': null, // https://stylelint.io/user-guide/rules/property-blacklist
    'property-case': 'lower', // https://stylelint.io/user-guide/rules/property-case
    'property-no-unknown': true, // https://stylelint.io/user-guide/rules/property-no-unknown
    'property-no-vendor-prefix': true, // https://stylelint.io/user-guide/rules/property-no-vendor-prefix
    'property-whitelist': null, // https://stylelint.io/user-guide/rules/property-whitelist
    'rule-empty-line-before': 'always-multi-line', // https://stylelint.io/user-guide/rules/rule-empty-line-before
    'selector-attribute-brackets-space-inside': 'never', // https://stylelint.io/user-guide/rules/selector-attribute-brackets-space-inside
    'selector-attribute-operator-blacklist': null, // https://stylelint.io/user-guide/rules/selector-attribute-operator-blacklist
    'selector-attribute-operator-space-after': 'never', // https://stylelint.io/user-guide/rules/selector-attribute-operator-space-after
    'selector-attribute-operator-space-before': 'never', // https://stylelint.io/user-guide/rules/selector-attribute-operator-space-before
    'selector-attribute-operator-whitelist': null, // https://stylelint.io/user-guide/rules/selector-attribute-operator-whitelist
    'selector-attribute-quotes': ['always', { 'severity': 'warning' }], // https://stylelint.io/user-guide/rules/selector-attribute-quotes
    'selector-class-pattern': null, // https://stylelint.io/user-guide/rules/selector-class-pattern
    'selector-combinator-blacklist': null, // https://stylelint.io/user-guide/rules/selector-combinator-blacklist
    'selector-combinator-space-after': 'always', // https://stylelint.io/user-guide/rules/selector-combinator-space-after
    'selector-combinator-space-before': 'always', // https://stylelint.io/user-guide/rules/selector-combinator-space-before
    'selector-combinator-whitelist': null, // https://stylelint.io/user-guide/rules/selector-combinator-whitelist
    'selector-descendant-combinator-no-non-space': true, // https://stylelint.io/user-guide/rules/selector-descendant-combinator-no-non-space
    'selector-id-pattern': null, // https://stylelint.io/user-guide/rules/selector-id-pattern
    'selector-list-comma-newline-after': 'always-multi-line', // https://stylelint.io/user-guide/rules/selector-list-comma-newline-after
    'selector-list-comma-newline-before': null, // https://stylelint.io/user-guide/rules/selector-list-comma-newline-before
    'selector-list-comma-space-after': 'always-single-line', // https://stylelint.io/user-guide/rules/selector-list-comma-space-after
    'selector-list-comma-space-before': 'never', // https://stylelint.io/user-guide/rules/selector-list-comma-space-before
    'selector-max-attribute': [2, { 'severity': 'warning' }], // https://stylelint.io/user-guide/rules/selector-max-attribute
    'selector-max-class': 2, // https://stylelint.io/user-guide/rules/selector-max-class
    'selector-max-combinators': [2, { 'severity': 'warning' }], // https://stylelint.io/user-guide/rules/selector-max-combinators
    'selector-max-compound-selectors': [3, { 'severity': 'warning' }], // https://stylelint.io/user-guide/rules/selector-max-compound-selectors
    'selector-max-empty-lines': 1, // https://stylelint.io/user-guide/rules/selector-max-empty-lines
    'selector-max-id': [1, { 'severity': 'warning' }], // https://stylelint.io/user-guide/rules/selector-max-id
    'selector-max-pseudo-class': [1, { 'severity': 'warning' }], // https://stylelint.io/user-guide/rules/selector-max-pseudo-class
    'selector-max-specificity': null, // https://stylelint.io/user-guide/rules/selector-max-specificity
    'selector-max-type': [3, { 'severity': 'warning' }], // https://stylelint.io/user-guide/rules/selector-max-type
    'selector-max-universal': [2, { 'severity': 'warning' }], // https://stylelint.io/user-guide/rules/selector-max-universal
    // * maybe we should think about adding this, but I don't have a good pattern for it atm
    'selector-nested-pattern': null, // https://stylelint.io/user-guide/rules/selector-nested-pattern
    'selector-no-qualifying-type': true, // https://stylelint.io/user-guide/rules/selector-no-qualifying-type
    'selector-no-vendor-prefix': true, // https://stylelint.io/user-guide/rules/selector-no-vendor-prefix
    'selector-pseudo-class-blacklist': null, // https://stylelint.io/user-guide/rules/selector-pseudo-class-blacklist
    'selector-pseudo-class-case': 'lower', // https://stylelint.io/user-guide/rules/selector-pseudo-class-case
    'selector-pseudo-class-no-unknown': true, // https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown
    'selector-pseudo-class-parentheses-space-inside': 'never', // https://stylelint.io/user-guide/rules/selector-pseudo-class-parentheses-space-inside
    'selector-pseudo-class-whitelist': null, // https://stylelint.io/user-guide/rules/selector-pseudo-class-whitelist
    'selector-pseudo-element-blacklist': null, // https://stylelint.io/user-guide/rules/selector-pseudo-element-blacklist
    'selector-pseudo-element-case': 'lower', // https://stylelint.io/user-guide/rules/selector-pseudo-element-case
    // * chosen for pseudo-elements to establish a discrimination between pseudo-classes and pseudo-elements.
    'selector-pseudo-element-colon-notation': 'double', // https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation
    'selector-pseudo-element-no-unknown': true, // https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown
    'selector-pseudo-element-whitelist': null, // https://stylelint.io/user-guide/rules/selector-pseudo-element-whitelist
    'selector-type-case': 'lower', // https://stylelint.io/user-guide/rules/selector-type-case
    'selector-type-no-unknown': true, // https://stylelint.io/user-guide/rules/selector-type-no-unknown
    'shorthand-property-no-redundant-values': true, // https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values
    // * turned off because of grid areas - afaik we need that there
    'string-no-newline': null, // https://stylelint.io/user-guide/rules/string-no-newline
    'string-quotes': 'single', // https://stylelint.io/user-guide/rules/string-quotes
    'time-min-milliseconds': 100, // https://stylelint.io/user-guide/rules/time-min-milliseconds
    'unicode-bom': 'never', // https://stylelint.io/user-guide/rules/unicode-bom
    'unit-blacklist': null, // https://stylelint.io/user-guide/rules/unit-blacklist
    'unit-case': 'lower', // https://stylelint.io/user-guide/rules/unit-case
    'unit-no-unknown': true, // https://stylelint.io/user-guide/rules/unit-no-unknown
    'unit-whitelist': null, // https://stylelint.io/user-guide/rules/unit-whitelist
    'value-keyword-case': 'lower', // https://stylelint.io/user-guide/rules/value-keyword-case
    'value-list-comma-newline-after': 'always-multi-line', // https://stylelint.io/user-guide/rules/value-list-comma-newline-after
    'value-list-comma-newline-before': null, // https://stylelint.io/user-guide/rules/value-list-comma-newline-before
    'value-list-comma-space-after': 'always-single-line', // https://stylelint.io/user-guide/rules/value-list-comma-space-after
    'value-list-comma-space-before': 'never', // https://stylelint.io/user-guide/rules/value-list-comma-space-before
    'value-list-max-empty-lines': 0, // https://stylelint.io/user-guide/rules/value-list-max-empty-lines
    'value-no-vendor-prefix': true, // https://stylelint.io/user-guide/rules/value-no-vendor-prefix
  },
};
