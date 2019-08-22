(defproject syn-antd "1.2.1"
  :description "Ant Design Reagent Wrapper - Optimised for shadow-cljs"
  :min-lein-version "2.7.0"
  :url "https://gitlab.com/synqrinus/syn-antd"
  :license {:name "MIT License"
            :url  "https://opensource.org/licenses/MIT"}

  :dependencies [[org.clojure/clojure "1.10.1" :scope "provided"]]

  :source-paths ["src"]
  :clean-targets ^{:protect false} ["target"]

  :profiles {:jar {}
             :dev {:source-paths ["dev"]
                   :jvm-opts     ["-XX:-OmitStackTraceInFastThrow"]
                   :dependencies [[thheller/shadow-cljs "2.8.14"]
                                  [org.clojure/tools.namespace "0.3.0-alpha4"]
                                  [org.clojure/tools.nrepl "0.2.13"]]
                   :repl-options {:init-ns user}}})