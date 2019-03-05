(ns syn-antd.switch
  (:require
    [reagent.core]
    ["antd/es/switch" :default ant-switch]))

(def switch (reagent.core/adapt-react-class ant-switch))