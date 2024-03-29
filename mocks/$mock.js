/* eslint-disable */
import mockServer from 'axios-mock-server'
import mock0 from './v1/profiles/me'
import mock1 from './v1/groups/me'
import mock2 from './v1/groups/_group_id/survey/index'
import mock3 from './v1/groups/_group_id/survey/_survey_id'
import mock4 from './v1/groups/_group_id/posts'
import mock5 from './v1/groups/_group_id/index'
import mock6 from './v1/calendar/me'

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
    path: '/v1/groups/_group_id/survey',
    methods: mock2
  },
  {
    path: '/v1/groups/_group_id/survey/_survey_id',
    methods: mock3
  },
  {
    path: '/v1/groups/_group_id/posts',
    methods: mock4
  },
  {
    path: '/v1/groups/_group_id',
    methods: mock5
  },
  {
    path: '/v1/calendar/me',
    methods: mock6
  }
], client, '')
