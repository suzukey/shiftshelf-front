/* eslint-disable */
import mockServer from 'axios-mock-server'
import mock0 from './v1/profiles/me'
import mock1 from './v1/groups/_group_id/survey/_survey_id'

export default (client) => mockServer([
  {
    path: '/v1/profiles/me',
    methods: mock0
  },
  {
    path: '/v1/groups/_group_id/survey/_survey_id',
    methods: mock1
  }
], client, '')
