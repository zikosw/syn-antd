(ns user
  (:require [clojure.string :as string]
            [clojure.java.io :refer [as-file file make-parents reader]]))

(def ant
  [{:class "Affix"
    :path  "affix"}
   {:class "Alert"
    :path  "alert"}
   {:class "Anchor"
    :path  "anchor"
    :inner ["Link"]}
   {:class "AutoComplete"
    :path  "auto-complete"
    :inner ["OptGroup"
            "Option"]}
   {:class "Avatar"
    :path  "avatar"}
   {:class "BackTop"
    :path  "back-top"}
   {:class "Badge"
    :path  "badge"}
   {:class "Breadcrumb"
    :path  "breadcrumb"
    :inner ["Item" "Separator"]}
   {:class "Button"
    :path  "button"
    :inner ["Group"]}
   {:class "Calendar"
    :path  "calendar"}
   {:class "Card"
    :path  "card"
    :inner ["Grid"
            "Meta"]}
   {:class "Carousel"
    :path  "carousel"}
   {:class "Cascader"
    :path  "cascader"}
   {:class "Checkbox"
    :path  "checkbox"
    :inner ["Group"]}
   {:class "Col"
    :path  "col"}
   {:class "Collapse"
    :path  "collapse"
    :inner ["Panel"]}
   {:class "Comment"
    :path  "comment"}
   {:class "ConfigProvider"
    :path  "config-provider"}
   {:class "DatePicker"
    :path  "date-picker"
    :inner ["MonthPicker"
            "RangePicker"
            "WeekPicker"]}
   {:class "Descriptions"
    :path  "descriptions"
    :inner ["Item"]}
   {:class "Divider"
    :path  "divider"}
   {:class "Drawer"
    :path  "drawer"}
   {:class "Dropdown"
    :path  "dropdown"
    :inner ["Button"]}
   {:class "Empty"
    :path  "empty"}
   {:class "Form"
    :path  "form"
    :inner ["Form.Item"]}
   {:class "Icon"
    :path  "icon"}
   {:class "Input"
    :path  "input"
    :inner ["Group"
            "Search"
            "TextArea"]}
   {:class "InputNumber"
    :path  "input-number"}
   {:class "Layout"
    :path  "layout"
    :inner ["Content"
            "Footer"
            "Header"
            "Sider"]}
   {:class "List"
    :path  "list"
    :inner ["Item"
            ["Item" "Meta"]]}
   {:class "LocaleProvider"                                 ;; DEPRECATED
    :path  "locale-provider"}
   {:class "Mention"                                        ;; DEPRECATED
    :path  "mention"
    :inner ["Nav"]}
   {:class "Mentions"
    :path  "mentions"
    :inner ["Option"]}
   {:class "Menu"
    :path  "menu"
    :inner ["Divider"
            "Item"
            "ItemGroup"
            "SubMenu"]}
   {:path "message"
    :fns  ["(.-config ant-message)"
           "(.-destroy ant-message)"
           "(.-error ant-message)"
           "(.-info ant-message)"
           "(.-loading ant-message)"
           "(.-success ant-message)"
           "(.-warn ant-message)"
           "(.-warning ant-message)"]}
   {:class "Modal"
    :path  "modal"
    :fns   ["(.-confirm ant-modal)"
            "(.-error ant-modal)"
            "(.-info ant-modal)"
            "(.-success ant-modal)"
            "(.-warning ant-modal)"
            "(.-open ant-modal)"
            "(.-destroyAll ant-modal)"]}
   {:path "notification"
    :fns  ["(.-close ant-notification)"
           "(.-config ant-notification)"
           "(.-destroy ant-notification)"
           "(.-error ant-notification)"
           "(.-info ant-notification)"
           "(.-open ant-notification)"
           "(.-success ant-notification)"
           "(.-warn ant-notification)"
           "(.-warning ant-notification)"]}
   {:class "PageHeader"
    :path  "page-header"}
   {:class "Pagination"
    :path  "pagination"}
   {:class "Popconfirm"
    :path  "popconfirm"}
   {:class "Popover"
    :path  "popover"}
   {:class "Progress"
    :path  "progress"}
   {:class "Radio"
    :path  "radio"
    :inner ["Button"
            "Group"]}
   {:class "Rate"
    :path  "rate"}
   {:class "Result"
    :path  "result"}
   {:class "Row"
    :path  "row"}
   {:class  "Select"
    :path   "select"
    :inner  ["OptGroup"
             "Option"]
    :suffix "(defn ant-select-option [id-fn label-fn option]
  ^{:key (str \"antd-option-\" (id-fn option))}
  [select-option
   {:key      (id-fn option)
    :value    (id-fn option)
    :title    (label-fn option)
    :disabled (:disabled? option)}
   (label-fn option)])

(defn ant-options [{:keys [options id-fn label-fn]
                    :or   {id-fn    :id
                           label-fn :label}}]
  (let [option-fn (partial ant-select-option id-fn label-fn)]
    (map option-fn options)))"}
   {:class "Skeleton"
    :path  "skeleton"}
   {:class "Slider"
    :path  "slider"}
   {:class "Spin"
    :path  "spin"}
   {:class "Statistic"
    :path  "statistic"}
   {:class "Steps"
    :path  "steps"
    :inner ["Step"]}
   {:class "Switch"
    :path  "switch"}
   {:class "Table"
    :path  "table"
    :inner ["Column"
            "ColumnGroup"]}
   {:class "Tabs"
    :path  "tabs"
    :inner ["TabPane"]}
   {:class "Tag"
    :path  "tag"
    :inner ["CheckableTag"]}
   {:class "TimePicker"
    :path  "time-picker"}
   {:class "Timeline"
    :path  "timeline"
    :inner ["Item"]}
   {:class "Tooltip"
    :path  "tooltip"}
   {:class "Transfer"
    :path  "transfer"}
   {:class "Tree"
    :path  "tree"
    :inner ["DirectoryTree"
            "TreeNode"]}
   {:class "TreeSelect"
    :path  "tree-select"
    :inner ["TreeNode"]}
   {:class "Typography"
    :path  "typography"
    :inner ["Text" "Title" "Paragraph"]}
   {:class "Upload"
    :path  "upload"}])

(defn module-name->any-case
  [case]
  (fn [input]
    (->> (re-seq #"\w[a-z0-9]*" input)
         (map string/lower-case)
         (string/join case))))

(def module-name->kebab-case (module-name->any-case "-"))
(def module-name->snake-case (module-name->any-case "_"))

(def get-symbol-name (comp symbol module-name->kebab-case))

(defn default-name [c]
  (str "ant-" (module-name->kebab-case c)))

(defn define-fn [f]
  (str "(defn " (get-symbol-name f) " [& args] (apply " f " args))"))

(defn define-reagent-component [component class-name]
  (str "(def " (get-symbol-name component) " (reagent.core/adapt-react-class " class-name "))"))

(defn factory-ns-shadow [class path default-name rest-of-file reagent?]
  (str "(ns syn-antd." (module-name->kebab-case class) "\n"
       "  (:require\n"
       (when reagent? "    [reagent.core]\n")
       "    [\"" path "\" :default " default-name "]))\n\n"
       rest-of-file))

(defn innerify [base [s & rest-s]]
  (if s
    (innerify (str "(.-" s " " base ")")
             rest-s)
    base))

;; Inspiration taken from https://github.com/fulcrologic/semantic-ui-wrapper
(defn gen-factories! []
  (doseq [{:keys [class path inner fns suffix]} ant]
    (let [filename  (str "src/syn_antd/" (module-name->snake-case (or class path)) ".cljs")
          default   (default-name (or class path))
          file-body (string/join
                      "\n\n"
                      (concat
                        (when (some? class)
                          [(define-reagent-component class default)])
                        (when (some? inner)
                          (map #(define-reagent-component (str class "." %)
                                                          (if (coll? %)
                                                            (innerify default %)
                                                            (innerify default [%]))) inner))
                        (when (some? fns)
                          (map define-fn fns))
                        (when (some? suffix)
                          [suffix])))]
      (make-parents filename)
      (spit (as-file filename)
            (factory-ns-shadow (or class path) (str "antd/es/" path) default file-body (some? class))))))