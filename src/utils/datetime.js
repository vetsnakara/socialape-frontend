import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const datetime = {
  fromNow: time => dayjs(time).fromNow()
};

export default datetime;
