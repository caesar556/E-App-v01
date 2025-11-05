"use client";

import { Provider, useDispatch } from "react-redux";
import { store } from "@/store/store";
import { setUser } from "@/store/auth";
import { useEffect } from "react";

export default function AuthProvider({ children, user }) {
  return (
    <Provider store={store}>
      <UserInitializer user={user} />
      {children}
    </Provider>
  );
}

function UserInitializer({ user }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) dispatch(setUser(user));
  }, [user]);

  return null;
}