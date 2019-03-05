(ns syn-antd.calendar
  (:require
    [reagent.core]
    ["antd/es/calendar" :default ant-calendar]))

(def calendar (reagent.core/adapt-react-class ant-calendar))