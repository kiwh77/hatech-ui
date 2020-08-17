import HatechTable from '../packages/table'
import HatechReport from '../packages/report'
import HatechDialog from '../packages/dialog'
import HatechForm from '../packages/form'
import HatechFormDialog from '../packages/formDialog'
import HatechTree from '../packages/tree'
import HatechPagination from '../packages/pagination'
import HatechLogin from '../packages/login'

const components = [
  HatechForm,
  HatechTree,
  HatechTable,
  HatechReport,
  HatechDialog,
  HatechFormDialog,
  HatechPagination,
  HatechLogin
]

const install = function (Vue, opt = {}) {
  components.forEach(component => Vue.component(component.name, component))
}

export default {
  version: '0.1.0',
  install,
  HatechLogin,
  HatechForm,
  HatechTree,
  HatechTable,
  HatechReport,
  HatechDialog,
  HatechFormDialog,
  HatechPagination
}