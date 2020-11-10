export default {
  get({ value }) {
    return [
      200,
      [
        {
          date: '2020/11/10',
          open_time: '9:00',
          close_time: '19:00',
          holiday_flag: true,
        },
        {
          date: '2020/11/11',
          open_time: '9:00',
          close_time: '19:00',
          holiday_flag: false,
        },
        {
          date: '2020/11/12',
          open_time: '9:00',
          close_time: '19:00',
          holiday_flag: false,
        },
        {
          date: '2020/11/13',
          open_time: '9:00',
          close_time: '19:00',
          holiday_flag: false,
        },
      ],
    ]
  },
}
