import type { MockServerConfig } from "mock-config-server";

import { DATABASE } from "./mock";

const mockServerConfig: MockServerConfig = {
  baseUrl: "/api",
  staticPath: {
    path: "/mock/static",
    prefix: "/static",
  },
  database: {
    data: DATABASE,
    routes: {
      "/api/anime": "/anime",
      "/api/anime/:id": "/anime/:id",
    },
  },
};

export default mockServerConfig;
