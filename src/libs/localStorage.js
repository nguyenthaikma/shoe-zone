const SIGNATURE = "signature";

export function getStoredAuth() {
  const storedAuth =
    typeof window !== "undefined" ? localStorage.getItem(SIGNATURE) : "";
  return storedAuth ? JSON.parse(storedAuth) : null;
}

export function checkAuth() {
  const signature = getStoredAuth();
  const accessToken = signature ? signature.accessToken : null;
  if (!!accessToken) return accessToken;
  return "";
}

export function setStoredAuth(auth) {
  localStorage.setItem(SIGNATURE, JSON.stringify(auth));
}

export function clearStoredAuth() {
  localStorage.removeItem(SIGNATURE);
}

// Set localStorage common
export function getLocalStored(key) {
  const stored = typeof window !== "undefined" ? localStorage.getItem(key) : "";
  return stored ? JSON.parse(stored) : null;
}
