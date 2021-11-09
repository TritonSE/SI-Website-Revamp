/**
 * Tracks all cookies that are used in the admin took, facilaiting their creation, deletion, and
 * their retrieval. 
 */
import Cookies from 'universal-cookie';

const EXPIRY = "60";
export const JWT_TOKEN_KEY = "token";

export const setCookie = (key, value) => {
    const cookies = new Cookies();
    cookies.set(key, value, { path: '/' });
}

export const getCookie = (key) => {
    return cookies.get(key);
}

export const removeCookie = (key) => {
    const cookies = new Cookies();
    cookies.remove(key,  { path: '/' });
}