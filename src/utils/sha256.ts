export const sha256 = async (message: string): Promise<string> => {
    const msgUint8 = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((byte) => byte.toString(16).padStart(2, '0')).join('');
};

export const generateAuthToken = (username: string, passwordHash: string) => {
    return sha256(`${username}${passwordHash}`);
};

export const saveAuthTokenToLocalStorage = async (username: string, password: string): Promise<void> => {
    const passwordHash = await sha256(password);
    const authToken = generateAuthToken(username, passwordHash);
    localStorage.setItem('authToken', await authToken);
}
