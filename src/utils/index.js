const limitString = (str = '', num = 1) => {
  const { length } = str;
  if (length > num) {
    return `${str.substring(0, num)}...`;
  }

  return str;
};

function postedAt(date) {
  const now = new Date();
  const posted = new Date(date);
  const diff = now - posted;
  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diff / (1000 * 60 * 60));
  const diffMinutes = Math.floor(diff / (1000 * 60));
  const diffSeconds = Math.floor(diff / 1000);

  if (diffDays > 0) {
    return `${diffDays} days ago`;
  }
  if (diffHours > 0) {
    return `${diffHours} hours ago`;
  }
  if (diffMinutes > 0) {
    return `${diffMinutes} minutes ago`;
  }
  if (diffSeconds > 0) {
    return `${diffSeconds} seconds ago`;
  }
  return 'just now';
}

function timeNow() {
  const now = new Date();
  const hours = now.getHours();
  const checkAmPm = hours >= 12 ? 'PM' : 'AM';
  const time = `${hours}:${now.getMinutes()} ${checkAmPm}`;

  return time;
}

export { limitString, postedAt, timeNow };
