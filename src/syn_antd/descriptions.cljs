(ns syn-antd.descriptions
  (:require
    [reagent.core]
    ["antd/es/descriptions" :default ant-descriptions]))

(def descriptions (reagent.core/adapt-react-class ant-descriptions))

(def descriptions-item (reagent.core/adapt-react-class (.-Item ant-descriptions)))