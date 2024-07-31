// Replace these values with your Auth0 configuration
Const auth0Domain = "dev-uyxydtqwb84cwrnw.us.auth0.com";
Const auth0ClientId = "Og0kjAIHs9sBYgfiuZk6fomLYuKlYc0z";

Let auth0Client = null;

Const configureClient = async () => {
  Auth0Client = await createAuth0Client({
    Domain: auth0Domain,
    Client_id: auth0ClientId,
  });
};

Const login = async () => {
  Await auth0Client.loginWithRedirect({
    Redirect_uri: window.location.origin + ‘/main.html’,
  });
};

Const logout = () => {
  Auth0Client.logout({
    returnTo: window.location.origin + ‘/index.html’,
  });
};

Const handleAuthCallback = async () => {
  Const query = window.location.search;
  If (query.includes(‘code=’) && query.includes(‘state=’)) {
    Await auth0Client.handleRedirectCallback();
    Window.history.replaceState({}, document.title, window.location.pathname);
  }
};

Const loadProfile = async () => {
  Const isAuthenticated = await auth0Client.isAuthenticated();
  If (isAuthenticated) {
    Const user = await auth0Client.getUser();
    Document.getElementById(‘profile’).innerHTML = `
      <h2>Welcome, ${user.name}!</h2>
      <p>${user.email}</p>
    `;
  }
};

Window.onload = async () => {
  Await configureClient();
  Await handleAuthCallback();

  Const isAuthenticated = await auth0Client.isAuthenticated();
  Const loginButton = document.getElementById(‘login-button’);
  Const logoutButton = document.getElementById(‘logout-button’);

  If (loginButton) {
    loginButton.addEventListener(‘click’, login);
  }

  If (logoutButton) {
    logoutButton.addEventListener(‘click’, logout);
  }

  If (isAuthenticated && window.location.pathname.endsWith(‘main.html’)) {
    Await loadProfile();
  } else if (!isAuthenticated && window.location.pathname.endsWith(‘main.html’)) {
    Window.location.href = ‘index.html’;
  }
};