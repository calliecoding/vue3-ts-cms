import { ElButton, ElRow } from 'element-plus'
import type { App } from 'vue'
export function registerApp(app: App): void {
  const components = [ElButton, ElRow]
  for (const component of components) {
    app.component(component.name, component)
  }
}
