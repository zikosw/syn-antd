(ns syn-antd.date-picker
  (:require
    [reagent.core]
    ["antd/es/date-picker" :default ant-date-picker]))

(def date-picker (reagent.core/adapt-react-class ant-date-picker))

(def date-picker-month-picker (reagent.core/adapt-react-class (.-MonthPicker ant-date-picker)))

(def date-picker-range-picker (reagent.core/adapt-react-class (.-RangePicker ant-date-picker)))

(def date-picker-week-picker (reagent.core/adapt-react-class (.-WeekPicker ant-date-picker)))