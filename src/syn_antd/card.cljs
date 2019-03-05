(ns syn-antd.card
  (:require
    [reagent.core]
    ["antd/es/card" :default ant-card]))

(def card (reagent.core/adapt-react-class ant-card))

(def card-grid (reagent.core/adapt-react-class (.-Grid ant-card)))

(def card-meta (reagent.core/adapt-react-class (.-Meta ant-card)))