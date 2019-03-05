(ns syn-antd.mention
  (:require
    [reagent.core]
    ["antd/es/mention" :default ant-mention]))

(def mention (reagent.core/adapt-react-class ant-mention))

(def mention-nav (reagent.core/adapt-react-class (.-Nav ant-mention)))