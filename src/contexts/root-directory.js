import React, { createContext, useContext, useEffect, useState } from "react";
import { get, set } from "idb-keyval";

const RootDirectoryContext = createContext({});

export const useRootDirectory = () => useContext(RootDirectoryContext);

const verifyPermissions = async (fileHandle, readWrite) => {
  const options = {};
  if (readWrite) options.mode = "readWrite";

  if ((await fileHandle.queryPermission(options)) === "granted") {
    return true;
  }

  if ((await fileHandle.requestPermission(options)) === "granted") {
    return true;
  }

  return false;
};

const RootDirectoryContextProvider = ({ children }) => {
  const [rootDirHandler, setRootDirHandler] = useState(null);
  const [openDir, setOpenDir] = useState(null);
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const [fileHandler, setFileHandler] = useState(null);

  useEffect(() => {
    setBreadcrumbs([rootDirHandler]);
  }, [rootDirHandler]);

  useEffect(() => {
    breadcrumbs.length && setOpenDir(breadcrumbs[breadcrumbs.length - 1]);
  }, [breadcrumbs]);

  useEffect(() => {
    const storeHandler = async () => {
      try {
        const handler = await get("root");

        if (handler) {
          verifyPermissions(handler);
          setRootDirHandler(handler);
        }
      } catch (e) {
        console.log(e.name, e.message);
      }
    };

    storeHandler();
  }, []);

  useEffect(() => {
    const storeHandler = async () => {
      await set("root", rootDirHandler);
    };

    storeHandler();
  }, [rootDirHandler]);

  return (
    <RootDirectoryContext.Provider
      value={{
        rootDirHandler,
        setRootDirHandler,
        verifyPermissions,
        setOpenDir,
        breadcrumbs,
        setBreadcrumbs,
        openDir,
        fileHandler,
        setFileHandler,
      }}
    >
      {children}
    </RootDirectoryContext.Provider>
  );
};

export default RootDirectoryContextProvider;
