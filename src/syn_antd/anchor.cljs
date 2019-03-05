(ns syn-antd.anchor
  (:require
    [reagent.core]
    ["antd/es/anchor" :default ant-anchor]))

(def anchor (reagent.core/adapt-react-class ant-anchor))

(def anchor-link (reagent.core/adapt-react-class (.-Link ant-anchor)))