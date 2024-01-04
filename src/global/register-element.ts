import type { App } from 'vue'
import {
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElIcon,
  ElInput,
  ElLink,
  ElRow,
  ElTabPane,
  ElTable
} from 'element-plus'
import { User, Iphone, Expand, Fold } from '@element-plus/icons-vue'
export default function (app: App): void {
  const components = [
    ElButton,
    ElRow,
    ElTable,
    ElTabPane,

    ElForm,
    ElFormItem,
    ElInput,
    ElCheckbox,
    ElLink,
    // Icon
    ElIcon,
    User,
    Iphone,
    Expand,
    Fold
  ]
  for (const component of components) {
    app.component(component.name, component)
  }
}
