import { getDefaultLang } from "../../shared/utils/listDefaults";
const BASE_URL: string =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api/v1";
interface ConnectConfig<TBody = Record<string, unknown>> {
  endpoint: string;
  body?: TBody;
  headers?: Record<string, string>;
}
const buildUrl = (endpoint: string): string => {
  return `${BASE_URL}${endpoint}`;
};
const handleResponse = async <TResponse>(
  response: Response
): Promise<TResponse> => {
  if (!response.ok) {
    let errorMessage = "API Error";
    try {
      const errorJson = await response.json();
      errorMessage = errorJson.message || JSON.stringify(errorJson, null, 2);
    } catch {
      errorMessage = await response.text();
    }
    throw new Error(errorMessage);
  }
  const contentType = response.headers.get("content-type");
  if (contentType?.includes("application/json")) {
    const json = await response.json();
    if (json && typeof json === "object" && "success" in json && "data" in json) {
      if (json.data && typeof json.data === "object") {
        return { ...json.data, message: json.message } as TResponse;
      }
      return json.data as TResponse;
    }
    return json as TResponse;
  }
  return null as unknown as TResponse;
};
const baseOptions = (
  method: string,
  extraHeaders?: Record<string, string>
): RequestInit => ({
  method,
  credentials: "include",
  cache: "no-store",
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": getDefaultLang(),
    ...extraHeaders,
  },
});
const get = async <TResponse, TBody = Record<string, object>>(
  config: ConnectConfig<TBody>
): Promise<TResponse> => {
  let url = buildUrl(config.endpoint);
  if (config.body && typeof config.body === 'object') {
    const params = new URLSearchParams();
    Object.entries(config.body).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        params.append(key, String(value));
      }
    });
    const queryString = params.toString();
    if (queryString) {
      url += (url.includes('?') ? '&' : '?') + queryString;
    }
  }
  const response = await fetch(url, {
    ...baseOptions("GET", config.headers),
  });
  return handleResponse<TResponse>(response);
};
const post = async <TResponse, TBody = Record<string, unknown>>(
  config: ConnectConfig<TBody>
): Promise<TResponse> => {
  const url = buildUrl(config.endpoint);
  const response = await fetch(url, {
    ...baseOptions("POST", {
      "Content-Type": "application/json",
      ...config.headers,
    }),
    body: JSON.stringify(config.body),
  });
  return handleResponse<TResponse>(response);
};
const put = async <TResponse, TBody = Record<string, unknown>>(
  config: ConnectConfig<TBody>
): Promise<TResponse> => {
  const url = buildUrl(config.endpoint);
  const response = await fetch(url, {
    ...baseOptions("PUT", {
      "Content-Type": "application/json",
      ...config.headers,
    }),
    body: JSON.stringify(config.body),
  });
  return handleResponse<TResponse>(response);
};
const patch = async <TResponse, TBody = Record<string, unknown>>(
  config: ConnectConfig<TBody>
): Promise<TResponse> => {
  const url = buildUrl(config.endpoint);
  const response = await fetch(url, {
    ...baseOptions("PATCH", {
      "Content-Type": "application/json",
      ...config.headers,
    }),
    body: JSON.stringify(config.body),
  });
  return handleResponse<TResponse>(response);
};
const del = async <TResponse, TBody = Record<string, unknown>>(
  config: ConnectConfig<TBody>
): Promise<TResponse> => {
  const url = buildUrl(config.endpoint);
  const response = await fetch(url, {
    ...baseOptions("DELETE", {
      "Content-Type": "application/json",
      ...config.headers,
    }),
    body: JSON.stringify(config.body),
  });
  return handleResponse<TResponse>(response);
};
const connect = { get, post, put, patch, del, baseUrl: BASE_URL } as const;
export default connect;
