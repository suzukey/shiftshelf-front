/* eslint-disable */
import mockServer from 'axios-mock-server'
import mock0 from './v1/profiles/me'
import mock1 from './v1/groups/me'
import mock2 from './v1/groups/_group_id/survey/_survey_id'
import mock3 from './v1/groups/_group_id/survey'

export default (client) => mockServer([
  {
    path: '/v1/profiles/me',
    methods: mock0
  },
  {
    path: '/v1/groups/me',
    methods: mock1
  },
  {
    path: '/v1/groups/_group_id/survey/_survey_id',
    methods: mock2
  },
  {
    path: '/v1/groups/_group_id/survey',
    methods: mock3
  }
], client, '')
