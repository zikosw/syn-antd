(defproject syn-antd "1.0.4-SNAPSHOT"
  :description "Ant Design Reagent Wrapper - Optimised for shadow-cljs"
  :min-lein-version "2.7.0"

  :dependencies [[org.clojure/clojure "1.10.0" :scope "provided"]]

  :source-paths ["src"]
  :clean-targets ^{:protect false} ["target" "resources/public/js"]
  :jar-exclusions [#"public/.*"]

  :plugins [[s3-wagon-private "1.3.1"]]

  :repositories {"syn-releases"  {:url           "s3p://syn-maven/releases/"
                                  :username      :env/aws_key_id
                                  :passphrase    :env/aws_access_key
                                  :sign-releases false}
                 "syn-snapshots" {:url        "s3p://syn-maven/snapshots/"
                                  :username      :env/aws_key_id
                                  :passphrase    :env/aws_access_key}}

  :profiles {:jar {}
             :dev {:source-paths ["src/dev"]
                   :jvm-opts     ["-XX:-OmitStackTraceInFastThrow"]
                   :dependencies [[thheller/shadow-cljs "2.8.14"]
                                  [org.clojure/tools.namespace "0.3.0-alpha4"]
                                  [org.clojure/tools.nrepl "0.2.13"]
                                  [cider/piggieback "0.3.10"]]
                   :repl-options {:init-ns          user
                                  :nrepl-middleware [cider.piggieback/wrap-cljs-repl]}}})