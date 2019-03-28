# syn-antd

[![Clojars Project](https://img.shields.io/clojars/v/syn-antd.svg)](https://clojars.org/syn-antd)

A [shadow-cljs](http://shadow-cljs.org/) friendly [reagent](https://github.com/reagent-project/reagent) wrapper around [Ant Design](https://ant.design/docs/react/introduce) components.

## Purpose

Using cljsjs antd leads to bloated compiled JS file since antd is a very large library with many UI components, of which you likely only need a subset.

If antd components are properly referenced, shadow-cljs helps handle the tree-shaking, reducing your package size to only the components you use.

CAVEAT: antd-icons is still a gigantic mess that's completely required in. This is a known issue the [Ant Design team is working on](https://github.com/ant-design/ant-design/issues/12011).

## Using

1. Add to your dependencies the latest version (see badge at top)
2. Add the version of ant design you're targeting to your `shadow-cljs.edn`
3. Make sure you reference the appropriate antd css file somewhere in your HTML
4. Reference the namespace you need and use as a standard Reagent component

## Some syn-antd unique features

### ant-options

Populating options can be a bit of a chore with antd. We've tried to make this a bit simpler via ant-options. Here is an example usage below.

```clojure
[select/select
  {:allow-clear true
   :mode        "multiple"
   :placeholder "My placeholder text"
   :on-change   (fn [selected]
                  (dispatch [:editor/my-update-fn selected]))
   :value       @my-selected-value}
  (select/ant-options
    {:options  @my-options
     :id-fn    :what-an-id
     :label-fn :name})]
```

ant-options receives three possible keys: `:options`, `:id-fn`, `:label-fn`. `:options` is a required collection of options to populate, and `:id-fn` and `:label-fn` are optionally used to extract the labels and ids of the options.

### dataSource caveat

Any references to `dataSource` in the antd docs **must** follow the formatting convention. Whereas for many other keys you can use kebab-case, you **must** use camel case for `dataSource` to work properly.

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

## Contributing

syn-antd is pretty bare-bones and doesn't need to have many more bells-and-whistles in my opinion, but I'm still very happy to receive contributions. 

PRs are welcome for any **additional wrappers to antd** that are missing, as well as any **example projects** that use syn-antd and show users how to get it started with shadow-cljs.

We also welcome **bug fixes** for any custom elements to syn-antd such as `ant-options`, as well as suggestions or PRs for new custom elements. That said, the goal is to minimize the amount of custom utilities present in this library. Any major quality of life improvements will be accepted, but others are encouraged to go in a separate library

## Example shadow-cljs setup

shadow-cljs can be a bit daunting. Here's an example of a basic project configuration for shadow-cljs.edn and package.json with syn-antd setup.

The documentation has gotten a lot better in recent months, and you should [refer to it for further development](https://shadow-cljs.github.io/docs/UsersGuide.html).

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

To install shadow-cljs on your dev machine:
`npm install -g shadow-cljs`

Before building/etc: `yarn install` (or whatever flavour of js build tooling is in this month)

To build: `shadow-cljs compile app`

To watch and hot-reload: `shadow-cljs watch app`

To release: `shadow-cljs release app`

To generate a build report: `shadow-cljs run shadow.cljs.build-report app report.html`

## License

Copyright © 2019 Synqrinus

Distributed under the [MIT License](https://opensource.org/licenses/MIT).