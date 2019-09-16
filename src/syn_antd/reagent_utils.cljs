(ns syn-antd.reagent-utils
  (:require
    [reagent.core]))

;; Adapted thanks to https://github.com/metametadata/problems/blob/919abde1997dafef26e1dc8388bb58645ac6f79b/src/hello_world/core.cljs#L45
(defn fixed-async-input
  [original-component]
  (fn fixed-component
    [{:keys [value] :as _props}]
    (let [local-value (atom value)]                         ; regular atom is used instead of React's state to better control when renders should be triggered
      (reagent.core/create-class
        {:display-name
         "AntdReagentInput"

         :should-component-update
         (fn [_ [_ old-props] [_ new-props]]
           ; Update only if value is different from the rendered one or...
           (if (not= (:value new-props) @local-value)
             (do
               (reset! local-value (:value new-props))
               true)

             ; other props changed
             (not= (dissoc new-props :value)
                   (dissoc old-props :value))))

         :render
         (fn [this]
           [original-component
            (-> (reagent.core/props this)
                ; use value only from the local atom
                (assoc :value @local-value)
                (update :on-change
                        (fn wrap-on-change [original-on-change]
                          (fn wrapped-on-change [e]
                            ; render immediately to sync DOM and virtual DOM
                            (reset! local-value (if-let [target (.-target e)]
                                                  (.-value target)
                                                  e))
                            (reagent.core/force-update this)

                            ; this will presumably update the value in global state atom
                            (when (some? original-on-change) (original-on-change e))))))])}))))