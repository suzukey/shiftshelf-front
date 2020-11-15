import { groups } from '@/mocks/datas'

export default {
  get({ values }) {
    return [
      200,
      groups.find((group) => group.group_id === values.group_id.toString()),
    ]
  },
}
