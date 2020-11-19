export default {
  get({ value }) {
    return [
      200,
      {
        start_day: '2020/11/10',
        end_day: '2020/11/13',
        open_time: '9:00',
        close_time: '19:00',
        reg_holiday: 1000001,
      },
    ]
  },
}
