(ns syn-antd.affix
  (:require
    [reagent.core]
    ["antd/es/affix" :default ant-affix]))

(def affix (reagent.core/adapt-react-class ant-affix))