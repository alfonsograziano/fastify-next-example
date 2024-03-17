/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/": {
    get: {
      responses: {
        /** @description Default Response */
        200: {
          content: {
            "application/json": {
              anything?: string;
            };
          };
        };
      };
    };
  };
  "/some-route/{id}": {
    /**
     * qwerty
     * @description post some data
     */
    put: {
      parameters: {
        path: {
          /** @description user id */
          id: string;
        };
      };
      requestBody?: {
        content: {
          "application/json": {
            hello?: string;
            obj?: {
              some?: string;
            };
          };
        };
      };
      responses: {
        /** @description Successful response */
        201: {
          content: {
            "application/json": {
              hello?: string;
            };
          };
        };
        /** @description Default response */
        default: {
          content: {
            "application/json": {
              foo?: string;
            };
          };
        };
      };
    };
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export type operations = Record<string, never>;
