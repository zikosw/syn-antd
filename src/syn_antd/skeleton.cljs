(ns syn-antd.skeleton
  (:require
    [reagent.core]
    ["antd/es/skeleton" :default ant-skeleton]))

(def skeleton (reagent.core/adapt-react-class ant-skeleton))