import { useEffect, useState } from "react";
import {
  clearLocalStorage,
  getLocalStorageItem,
  removeLocalStorageItem,
  setLocalStorageItem,
} from "../utils/localStorageManager";
import {
  clearSessionStorage,
  getSessionStorageItem,
  removeSessionStorageItem,
  setSessionStorageItem,
} from "../utils/sessionStorageManager";
import {
  clearCookies,
  getCookie,
  removeCookie,
  setCookie,
} from "../utils/cookieManager";

function useWebStorage() {
  const [localStorageData, setLocalStorageData] = useState({});
  const [sessionStorageData, setSessionStorageData] = useState({});
  const [cookieData, setCookieData] = useState({});

  const addLocalStorageData = (key, value) => {
    setLocalStorageData((prevData) => ({ ...prevData, [key]: value }));
    setLocalStorageItem(key, value);
  };

  const clearLocalStorageData = () => {
    clearLocalStorage();
    setLocalStorageData({});
  };

  const removeLocalStorageData = (key) => {
    removeLocalStorageItem(key);
    setLocalStorageData((prevData) => {
      const data = { ...prevData };
      delete data[key];
      return data;
    });
  };

  const addSessionStorageData = (key, value) => {
    setSessionStorageData((prevData) => ({ ...prevData, [key]: value }));
    setSessionStorageItem(key, value);
  };

  const clearSessionStorageData = () => {
    clearSessionStorage();
    setSessionStorageData({});
  };

  const removeSessionStorageData = (key) => {
    removeSessionStorageItem(key);
    setSessionStorageData((prevData) => {
      const data = { ...prevData };
      delete data[key];
      return data;
    });
  };

  const addCookieData = (key, value, expiresIn = 1) => {
    expiresIn = expiresIn==""?1:expiresIn;
    setCookieData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
    setCookie(key, value, expiresIn);
  };

  const clearCookieData = () => {
    clearCookies();
    setCookieData({});
  };

  const removeCookieData = (key) => {
    removeCookie(key);
    setCookieData((prevData) => {
      const data = { ...prevData };
      delete data[key];
      return data;
    });
  };

  useEffect(() => {
    setLocalStorageData(getLocalStorageItem());
    setSessionStorageData(getSessionStorageItem());
    setCookieData(getCookie());
  }, []);

  const webStorages = [
    {
      heading: "Local Storage",
      description:
        "Client-side storage that persists even when the browser is closed",
      hasExpiry: false,
      stateData: localStorageData,
      addData: addLocalStorageData,
      removeData: removeLocalStorageData,
      clearAll: clearLocalStorageData,
    },
    {
      heading: "Session Storage",
      description:
        "Stores data only for a session, and is deleted when the tab is closed",
      hasExpiry: false,
      stateData: sessionStorageData,
      addData: addSessionStorageData,
      removeData: removeSessionStorageData,
      clearAll: clearSessionStorageData,
    },
    {
      heading: "Cookies",
      description:
        "Stores data that has to be sent back to the server with every request",
      hasExpiry: true,
      stateData: cookieData,
      addData: addCookieData,
      removeData: removeCookieData,
      clearAll: clearCookieData,
    },
  ];

  return { webStorages };
}

export default useWebStorage;
