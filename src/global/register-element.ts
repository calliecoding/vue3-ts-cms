import type { App } from 'vue'
import { ElButton, ElRow } from 'element-plus'
export default function (app: App): void {
  const components = [ElButton, ElRow]
  for (const component of components) {
    app.component(component.name, component)
  }
}
