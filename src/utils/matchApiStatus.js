const matchApiStatus = actionType =>
  /\[(?<scope>.*)\] (?<effect>.*) \((?<status>pending|success|error)\)/.exec(
    actionType
  );

export default matchApiStatus;
