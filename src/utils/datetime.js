import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const datetime = {
  fromNow: time => dayjs(time).fromNow(),
  format: (time, pattern) => dayjs(time).format(pattern)
};

export default datetime;
