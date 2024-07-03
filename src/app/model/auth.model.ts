// src/app/model/auth.model.ts
export interface Auth {
    result: string;
    userSessionId?: string;
    user?: {
      id: string;
      username: string;
    };
    message?: string;
  }
  