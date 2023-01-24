const Api = (() => {
  const BASE_URL = 'https://forum-api.dicoding.dev/v1';

  function getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  function putAccessToken(accessToken) {
    return localStorage.setItem('accessToken', accessToken);
  }

  async function _fetchWithToken(url, options = {}) {
    const request = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });

    const responseJson = await request.json();
    return responseJson;
  }

  async function requestLogin({ email, password }) {
    const request = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const responseJson = await request.json();
    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {
      data: { token },
    } = responseJson;

    return token;
  }

  async function requestRegister({ name, email, password }) {
    const request = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
    const responseJson = await request.json();
    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {
      data: { user },
    } = responseJson;

    return user;
  }

  async function getAllUsers() {
    const request = await fetch(`${BASE_URL}/users`);
    const responseJson = await request.json();
    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {
      data: { users },
    } = responseJson;

    return users;
  }

  async function getOwnProfile() {
    const responseJson = await _fetchWithToken(`${BASE_URL}/users/me`);
    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {
      data: { user },
    } = responseJson;

    return user;
  }

  async function getAllThreads() {
    const request = await fetch(`${BASE_URL}/threads`);
    const responseJson = await request.json();
    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {
      data: { threads },
    } = responseJson;

    return threads;
  }

  async function getDetailThread(threadID) {
    const request = await fetch(`${BASE_URL}/threads/${threadID}`);
    const responseJson = await request.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {
      data: { threadDetail },
    } = responseJson;

    return threadDetail;
  }

  async function createThread({ title, body, category = '' }) {
    const responseJson = await _fetchWithToken(`${BASE_URL}/threads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, body, category }),
    });
    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {
      data: { thread },
    } = responseJson;

    return thread;
  }

  async function createCommentForThread(threadID, content) {
    const responseJson = await _fetchWithToken(`${BASE_URL}/threads/${threadID}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }),
    });
    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {
      data: { comment },
    } = responseJson;

    return comment;
  }

  async function getLeaderboardsByUsers() {
    const request = await fetch(`${BASE_URL}/leaderboards`);
    const responseJson = await request.json();
    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {
      data: { leaderboards },
    } = responseJson;

    return leaderboards;
  }

  return {
    getAccessToken,
    putAccessToken,
    requestLogin,
    requestRegister,
    getAllUsers,
    getOwnProfile,
    getAllThreads,
    getDetailThread,
    createThread,
    createCommentForThread,
    getLeaderboardsByUsers,
  };
})();

export default Api;
