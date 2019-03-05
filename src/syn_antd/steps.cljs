(ns syn-antd.steps
  (:require
    [reagent.core]
    ["antd/es/steps" :default ant-steps]))

(def steps (reagent.core/adapt-react-class ant-steps))

(def steps-step (reagent.core/adapt-react-class (.-Step ant-steps)))