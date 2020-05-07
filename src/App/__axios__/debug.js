export default (config, data) => {
  const settings = {
    prefix: "API",
    request: {
      light: "#3498db",
      dark: "#2980b9",
    },
    response: {
      dark: "#009432",
    },
    error: {
      dark: "#c0392b",
    },
  };

  if (process.env.NODE_ENV !== "development") {
    return false;
  }

  if (config.type === "request") {
    console.log(
      `%c${settings.prefix}%c ${data.method.toUpperCase()} %cRequest for:%c ${data.baseURL}%c${data.url}`,
      `color: #ffffff; padding: 3px 8px; font-weight: bold; background: ${settings.request.dark};`,
      `color: ${settings.request.dark}; font-weight: bold;`,
      `color: ${settings.request.light}; font-style: italic;`,
      `color: ${settings.request.dark};`,
      "color: black; font-weight: bold;"
    );
    console.log(data);
    return true;
  }

  if (config.type === "response") {
    console.log(
      `%c${settings.prefix}%c ${data.status} %c${data.statusText}: ${data.config.url}`,
      `color: #ffffff; padding: 3px 8px; font-weight: bold; background: ${settings.response.dark};`,
      `color: ${settings.response.dark}; font-weight: bold;`,
      `color: ${settings.response.dark}; font-style: italic;`
    );
    console.log(data);
    return true;
  }

  if (config.type === "error") {
    console.log(
      `%c${settings.prefix}%c ${data.status} ${data.statusText}: ${data.config.url}`,
      `color: #ffffff; padding: 3px 5px; font-weight: bold; background: ${settings.error.dark};`,
      `color: ${settings.error.dark}; font-weight: bold;`
    );
    console.log(data);
    console.log(`%c${data.data.error_description}`, `color: ${settings.error.dark};`);
    return true;
  }

  return false;
};
