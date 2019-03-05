(ns syn-antd.spin
  (:require
    [reagent.core]
    ["antd/es/spin" :default ant-spin]))

(def spin (reagent.core/adapt-react-class ant-spin))