(ns syn-antd.transfer
  (:require
    [reagent.core]
    ["antd/es/transfer" :default ant-transfer]))

(def transfer (reagent.core/adapt-react-class ant-transfer))