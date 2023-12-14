import type { App } from 'vue'
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElIcon,
  ElInput,
  ElRow,
  ElTabPane,
  ElTable
} from 'element-plus'
import { User, Iphone } from '@element-plus/icons-vue'
export default function (app: App): void {
  const components = [
    ElButton,
    ElRow,
    ElTable,
    ElTabPane,
    ElIcon,
    User,
    Iphone,
    ElForm,
    ElFormItem,
    ElInput
  ]
  for (const component of components) {
    app.component(component.name, component)
  }
}
