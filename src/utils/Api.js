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
      data: { detailThread },
    } = responseJson;

    return detailThread;
  }

  function getSavedThreadFromLocalStorage() {
    return JSON.parse(localStorage.getItem('savedThread'));
  }

  function savedThreadToLocalStorage(thread) {
    let threads = [];
    if (localStorage.getItem('savedThread') !== null) threads = getSavedThreadFromLocalStorage();

    threads.push(thread);
    localStorage.setItem('savedThread', JSON.stringify(threads));
    alert('success saved');
  }

  function removeThreadFromLocalStorage(threadId) {
    let threads = [];
    if (localStorage.getItem('savedThread') !== null) threads = getSavedThreadFromLocalStorage();
    const filterThreads = threads.filter((thread) => thread.id === threadId);

    localStorage.setItem('savedThread', JSON.stringify(filterThreads));
    alert('success removed');
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

  async function upVoteThread(threadId) {
    const responseJson = await _fetchWithToken(`${BASE_URL}/threads/${threadId}/up-vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: vote } = responseJson;
    return vote;
  }

  async function downVoteThread(threadId) {
    const responseJson = await _fetchWithToken(`${BASE_URL}/threads/${threadId}/down-vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: vote } = responseJson;
    return vote;
  }

  async function neutralizeVoteThread(threadId) {
    const responseJson = await _fetchWithToken(`${BASE_URL}/threads/${threadId}/neutral-vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: vote } = responseJson;
    return vote;
  }

  async function upVoteComment({ threadId, commentId }) {
    const responseJson = await _fetchWithToken(
      `${BASE_URL}/threads/${threadId}/comments/${commentId}/up-vote`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: vote } = responseJson;
    return vote;
  }

  async function downVoteComment({ threadId, commentId }) {
    const responseJson = await _fetchWithToken(
      `${BASE_URL}/threads/${threadId}/comments/${commentId}/down-vote`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: vote } = responseJson;
    return vote;
  }

  async function neutralizeVoteComment({ threadId, commentId }) {
    const responseJson = await _fetchWithToken(
      `${BASE_URL}/threads/${threadId}/comments/${commentId}/neutral-vote`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: vote } = responseJson;
    return vote;
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
    savedThreadToLocalStorage,
    getSavedThreadFromLocalStorage,
    removeThreadFromLocalStorage,
    upVoteThread,
    downVoteThread,
    neutralizeVoteThread,
    upVoteComment,
    downVoteComment,
    neutralizeVoteComment,
    createThread,
    createCommentForThread,
    getLeaderboardsByUsers,
  };
})();

export default Api;
