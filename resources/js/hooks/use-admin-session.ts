import { useEffect, useState } from "react";

type AdminSessionState = {
  authenticated: boolean;
  loading: boolean;
  user: {
    name: string;
    email: string;
  } | null;
};

const defaultState: AdminSessionState = {
  authenticated: false,
  loading: true,
  user: null,
};

const fetchAdminSession = async () => {
  const response = await fetch("/admin/session", {
    method: "GET",
    credentials: "same-origin",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    return { authenticated: false, user: null };
  }

  const data = (await response.json().catch(() => ({}))) as {
    authenticated?: boolean;
    user?: { name?: string; email?: string } | null;
  };
  return {
    authenticated: Boolean(data.authenticated),
    user: data.user?.name && data.user?.email ? { name: data.user.name, email: data.user.email } : null,
  };
};

export const useAdminSession = () => {
  const [state, setState] = useState<AdminSessionState>(defaultState);

  useEffect(() => {
    let isMounted = true;

    fetchAdminSession()
      .then((data) => {
        if (isMounted) {
          setState({ authenticated: data.authenticated, loading: false, user: data.user });
        }
      })
      .catch(() => {
        if (isMounted) {
          setState({ authenticated: false, loading: false, user: null });
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return state;
};
