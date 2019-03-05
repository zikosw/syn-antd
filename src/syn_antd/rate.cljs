(ns syn-antd.rate
  (:require
    [reagent.core]
    ["antd/es/rate" :default ant-rate]))

(def rate (reagent.core/adapt-react-class ant-rate))