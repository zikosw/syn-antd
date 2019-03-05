(ns syn-antd.pagination
  (:require
    [reagent.core]
    ["antd/es/pagination" :default ant-pagination]))

(def pagination (reagent.core/adapt-react-class ant-pagination))