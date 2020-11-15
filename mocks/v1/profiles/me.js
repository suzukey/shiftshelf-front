import { profile } from '@/mocks/datas'

export default {
  get() {
    return [200, profile]
  },
}
