(ns syn-antd.carousel
  (:require
    [reagent.core]
    ["antd/es/carousel" :default ant-carousel]))

(def carousel (reagent.core/adapt-react-class ant-carousel))