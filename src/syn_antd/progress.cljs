(ns syn-antd.progress
  (:require
    [reagent.core]
    ["antd/es/progress" :default ant-progress]))

(def progress (reagent.core/adapt-react-class ant-progress))