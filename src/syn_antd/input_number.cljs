(ns syn-antd.input-number
  (:require
    [reagent.core]
    ["antd/es/input-number" :default ant-input-number]))

(def input-number (reagent.core/adapt-react-class ant-input-number))