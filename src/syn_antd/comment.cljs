(ns syn-antd.comment
  (:require
    [reagent.core]
    ["antd/es/comment" :default ant-comment]))

(def comment (reagent.core/adapt-react-class ant-comment))