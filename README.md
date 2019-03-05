# syn-antd

A shadow-cljs friendly reagent wrapper around Ant Design components.

## Using

1. Add to your dependencies, `[syn-antd "1.0.0"]`
2. Add the version of ant design you're targeting to your `shadow-cljs.edn`
3. Make sure you reference the appropriate antd css file somewhere in your HTML
4. Reference the namespace you need and use as a standard Reagent component

## Building

To build for a new version of Ant Design.

1. Update the `user/ant` map
2. Run a REPL and execute `(gen-factories!)`
3. Deploy accordingly

## Themeing

1. `npm install antd`
2. `npm install -g less-plugin-clean-css` (if not exists)
3. Create your theme in `/less`. See current folder for working example of synqrinus-theme
4. Execute `lessc --js less/antd.main.less > <YOUR THEME>-antd.css --clean-css`