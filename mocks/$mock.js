/* eslint-disable */
import mockServer from 'axios-mock-server'
import mock0 from './v1/profiles/me'

export default (client) => mockServer([
  {
    path: '/v1/profiles/me',
    methods: mock0
  }
], client, '')
