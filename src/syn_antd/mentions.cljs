(ns syn-antd.mentions
  (:require
    [reagent.core]
    ["antd/es/mentions" :default ant-mentions]))

(def mentions (reagent.core/adapt-react-class ant-mentions))

(def mentions-option (reagent.core/adapt-react-class (.-Option ant-mentions)))