(ns syn-antd.statistic
  (:require
    [reagent.core]
    ["antd/es/statistic" :default ant-statistic]))

(def statistic (reagent.core/adapt-react-class ant-statistic))