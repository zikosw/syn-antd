(ns syn-antd.popover
  (:require
    [reagent.core]
    ["antd/es/popover" :default ant-popover]))

(def popover (reagent.core/adapt-react-class ant-popover))