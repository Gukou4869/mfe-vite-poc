export interface RouteConfig {
  path: string;
  label: string;
}

export interface ServiceConfig {
  name: string;
  basePath: string;
  routes: RouteConfig[];
}

