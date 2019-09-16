(ns syn-antd.util
  (:require [cljs.repl]))

(defmacro source [obj]
  `(str ~(or (cljs.repl/source-fn &env obj) (str "Source not found"))))