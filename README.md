# syn-antd

A shadow-cljs friendly reagent wrapper around Ant Design components.

## Purpose

Using cljsjs antd leads to bloated compiled JS file since antd is a very large library with many UI components, of which you likely only need a subset.

If antd components are properly referenced, shadow-cljs helps handle the tree-shaking, reducing your package size to only the components you use.

CAVEAT: antd-icons is still a gigantic mess that's completely required in. This is a known issue the Ant Design team is working on.

## Using

1. Add to your dependencies, `[syn-antd "1.0.4"]`
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

## Example shadow-cljs setup

shadow-cljs can be a bit daunting. Here's an example of a basic project configuration for shadow-cljs.edn and package.json with syn-antd setup.

### shadow-cljs.edn

```clojure
;; shadow-cljs configuration
{:source-paths
               ["src/cljs"]

 :dependencies
               [
                [reagent "0.8.1"]
                [syn-antd "1.0.4"]
                ]

 :builds
               {:app
                {:target :browser
                 :output-dir "resources/public/js/compiled"
                 :asset-path "/js/compiled"

                 :modules
                 {:main
                  {:entries [example-antd-project.core]}}

                 :devtools
                 ;; before live-reloading any code call this function
                 {:http-root    "resources/public"
                  :http-port    8700}
                 }}}
```

### package.json

```json
{
  "name": "example-antd-project",
  "version": "0.0.1",
  "private": true,
  "devDependencies": {
    "shadow-cljs": "2.8.14"
  },
  "dependencies": {
    "antd": "^3.15.1",
    "create-react-class": "15.6.3",
    "prop-types": "15.7.2",
    "react": "16.8.3",
    "react-dom": "16.8.3"
  }
}

```