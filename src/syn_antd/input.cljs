(ns syn-antd.input
  (:require
    [reagent.core]
    ["antd/es/input" :default ant-input]))

(def input (reagent.core/adapt-react-class ant-input))

(def input-group (reagent.core/adapt-react-class (.-Group ant-input)))

(def input-search (reagent.core/adapt-react-class (.-Search ant-input)))

(def input-text-area (reagent.core/adapt-react-class (.-TextArea ant-input)))

(defn change-on-blur [{:keys [value]}]
  (let [external-value (reagent.core/atom value)
        internal-value (reagent.core/atom (if (nil? @external-value) "" @external-value))]
    (fn [{:keys [value on-change on-blur input-type]
          :as   element
          :or   {input-type input}}]
      (when (not= @external-value value)
        (reset! external-value value)
        (reset! internal-value value))

      [input-type
       (assoc element
         :on-change (fn [e]
                      (reset! internal-value (.. e -target -value)))
         :on-blur (fn []
                    (when (not= @internal-value @external-value)
                      (reset! external-value @internal-value)
                      ((or on-blur on-change) @internal-value))))])))