(ns syn-antd.result
  (:require
    [reagent.core]
    ["antd/es/result" :default ant-result]))

(def result (reagent.core/adapt-react-class ant-result))