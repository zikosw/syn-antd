(ns syn-antd.back-top
  (:require
    [reagent.core]
    ["antd/es/back-top" :default ant-back-top]))

(def back-top (reagent.core/adapt-react-class ant-back-top))