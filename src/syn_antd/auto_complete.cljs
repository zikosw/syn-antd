(ns syn-antd.auto-complete
  (:require
    [reagent.core]
    [syn-antd.reagent-utils]
    ["antd/es/auto-complete" :default ant-auto-complete]))

(def auto-complete (syn-antd.reagent-utils/fixed-async-input (reagent.core/adapt-react-class ant-auto-complete)))

(def auto-complete-opt-group (syn-antd.reagent-utils/fixed-async-input (reagent.core/adapt-react-class (.-OptGroup ant-auto-complete))))

(def auto-complete-option (syn-antd.reagent-utils/fixed-async-input (reagent.core/adapt-react-class (.-Option ant-auto-complete))))