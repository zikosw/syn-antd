(ns syn-antd.time-picker
  (:require
    [reagent.core]
    ["antd/es/time-picker" :default ant-time-picker]))

(def time-picker (reagent.core/adapt-react-class ant-time-picker))