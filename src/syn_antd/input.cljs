(ns syn-antd.input
  (:require
    [reagent.core]
    [syn-antd.reagent-utils]
    ["antd/es/input" :default ant-input]))

(def input (syn-antd.reagent-utils/fixed-async-input (reagent.core/adapt-react-class ant-input)))

(def input-group (syn-antd.reagent-utils/fixed-async-input (reagent.core/adapt-react-class (.-Group ant-input))))

(def input-password (syn-antd.reagent-utils/fixed-async-input (reagent.core/adapt-react-class (.-Password ant-input))))

(def input-search (syn-antd.reagent-utils/fixed-async-input (reagent.core/adapt-react-class (.-Search ant-input))))

(def input-text-area (syn-antd.reagent-utils/fixed-async-input (reagent.core/adapt-react-class (.-TextArea ant-input))))