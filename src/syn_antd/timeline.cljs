(ns syn-antd.timeline
  (:require
    [reagent.core]
    ["antd/es/timeline" :default ant-timeline]))

(def timeline (reagent.core/adapt-react-class ant-timeline))

(def timeline-item (reagent.core/adapt-react-class (.-Item ant-timeline)))