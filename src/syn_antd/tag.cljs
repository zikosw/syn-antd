(ns syn-antd.tag
  (:require
    [reagent.core]
    ["antd/es/tag" :default ant-tag]))

(def tag (reagent.core/adapt-react-class ant-tag))

(def tag-checkable-tag (reagent.core/adapt-react-class (.-CheckableTag ant-tag)))