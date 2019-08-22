# 1.2.1
- Added `syn-antd.input/r-input` to handle bug between reagent and syn-antd's usage of react.

There is a bug where if you modify a reagent atom that is used as the value for an antd input, it will update visually until the next re-render then reset back. This has to do with how antd sets state. It does not pick up on the new value change properly. r-input is a simple wrapper than, on update, sets the state of the antd input manually. It is meant to be performant so you can plug it in accordingly. 

# 1.2.0
- Fixed `syn-antd.form` not loading due to broken link | BREAKING: `syn-antd.form/form-form-item` must be renamed to `syn-antd.form/form-item`
- Added `syn-antd.input/input-password`

# 1.1.2
- Support new features added between antd 3.15.0 to 3.21.0

# 1.1.1-1

- Undo changes from `1.1.1`

# 1.1.1

- Work around async/sync change handling in react leading to cursor wonkiness with reagent. NOTE: Fairly hacky, can still be improved to more general form.

# 1.1.0

- Removed input-change-on-blur as was not really part of antd functionality.

# 1.0.4

- Initial open source release