(ns syn-antd.typography
  (:require
    [reagent.core]
    ["antd/es/typography" :default ant-typography]))

(def typography (reagent.core/adapt-react-class ant-typography))

(def typography-text (reagent.core/adapt-react-class (.-Text ant-typography)))

(def typography-title (reagent.core/adapt-react-class (.-Title ant-typography)))

(def typography-paragraph (reagent.core/adapt-react-class (.-Paragraph ant-typography)))