export default {
  extends: ["stylelint-config-standard"],
  rules: {
    "at-rule-no-unknown": [true, {
      ignoreAtRules: ["tailwind", "apply", "variants", "responsive", "screen"]
    }],
    "rule-empty-line-before": null,
    "declaration-empty-line-before": null,
    "color-function-notation": null,
    "alpha-value-notation": null,
    "value-keyword-case": null,
    "color-hex-length": null
  }
};
