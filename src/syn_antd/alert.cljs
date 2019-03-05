(ns syn-antd.alert
  (:require
    [reagent.core]
    ["antd/es/alert" :default ant-alert]))

(def alert (reagent.core/adapt-react-class ant-alert))