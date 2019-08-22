(ns syn-antd.input
  (:require
    [reagent.core]
    ["antd/es/input" :default ant-input]))

(def input (reagent.core/adapt-react-class ant-input))

(def input-group (reagent.core/adapt-react-class (.-Group ant-input)))

(def input-password (reagent.core/adapt-react-class (.-Password ant-input)))

(def input-search (reagent.core/adapt-react-class (.-Search ant-input)))

(def input-text-area (reagent.core/adapt-react-class (.-TextArea ant-input)))

(defn r-input [element]
  (let [input-element (atom nil)]
    (reagent.core/create-class
      {:component-will-update
       (fn [_ [_ new-element]]
         (when @input-element
           (.setState @input-element (js-obj "value" (:value new-element)))))

       :reagent-render
       (fn [{:keys [input-type]
             :as   element
             :or   {input-type input}}]
         [input-type
          (assoc element :ref (fn [t] (reset! input-element t)))])})))