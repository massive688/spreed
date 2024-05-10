/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


/** OneOf type helpers */
type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;
type OneOf<T extends any[]> = T extends [infer Only] ? Only : T extends [infer A, infer B, ...infer Rest] ? OneOf<[XOR<A, B>, ...Rest]> : never;

export type paths = {
  "/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}": {
    /** Get a room */
    get: operations["room-get-single-room"];
  };
  "/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/pin/{pin}": {
    /** Verify a dial-in PIN (SIP bridge) */
    get: operations["room-verify-dial-in-pin-deprecated"];
  };
  "/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/verify-dialin": {
    /** Verify a dial-in PIN (SIP bridge) */
    post: operations["room-verify-dial-in-pin"];
  };
  "/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/verify-dialout": {
    /** Verify a dial-out number (SIP bridge) */
    post: operations["room-verify-dial-out-number"];
  };
  "/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/open-dial-in": {
    /** Create a guest by their dial-in */
    post: operations["room-create-guest-by-dial-in"];
  };
  "/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/rejected-dialout": {
    /** Reset call ID of a dial-out participant when the SIP gateway rejected it */
    delete: operations["room-rejected-dial-out-request"];
  };
};

export type webhooks = Record<string, never>;

export type components = {
  schemas: {
    BaseMessage: {
      actorDisplayName: string;
      actorId: string;
      actorType: string;
      /** Format: int64 */
      expirationTimestamp: number;
      message: string;
      messageParameters: {
        [key: string]: components["schemas"]["RichObjectParameter"];
      };
      messageType: string;
      systemMessage: string;
    };
    Capabilities: {
      features: string[];
      "features-local": string[];
      config: {
        attachments: {
          allowed: boolean;
          folder?: string;
        };
        call: {
          enabled: boolean;
          "breakout-rooms": boolean;
          recording: boolean;
          /** Format: int64 */
          "recording-consent": number;
          "supported-reactions": string[];
          "predefined-backgrounds": string[];
          "can-upload-background": boolean;
          "sip-enabled": boolean;
          "sip-dialout-enabled": boolean;
          "can-enable-sip": boolean;
        };
        chat: {
          /** Format: int64 */
          "max-length": number;
          /** Format: int64 */
          "read-privacy": number;
          "has-translation-providers": boolean;
          /** Format: int64 */
          "typing-privacy": number;
        };
        conversations: {
          "can-create": boolean;
        };
        federation: {
          enabled: boolean;
          "incoming-enabled": boolean;
          "outgoing-enabled": boolean;
          "only-trusted-servers": boolean;
        };
        previews: {
          /** Format: int64 */
          "max-gif-size": number;
        };
        signaling: {
          /** Format: int64 */
          "session-ping-limit": number;
          "hello-v2-token-key"?: string;
        };
      };
      "config-local": {
        [key: string]: string[];
      };
      version: string;
    };
    ChatMessage: components["schemas"]["BaseMessage"] & {
      /** @enum {boolean} */
      deleted?: true;
      /** Format: int64 */
      id: number;
      isReplyable: boolean;
      markdown: boolean;
      reactions: {
        [key: string]: number;
      };
      referenceId: string;
      /** Format: int64 */
      timestamp: number;
      token: string;
      lastEditActorDisplayName?: string;
      lastEditActorId?: string;
      lastEditActorType?: string;
      /** Format: int64 */
      lastEditTimestamp?: number;
      silent?: boolean;
    };
    ChatProxyMessage: components["schemas"]["BaseMessage"];
    OCSMeta: {
      status: string;
      statuscode: number;
      message?: string;
      totalitems?: string;
      itemsperpage?: string;
    };
    PublicCapabilities: OneOf<[{
      spreed: components["schemas"]["Capabilities"];
    }, unknown[]]>;
    RichObjectParameter: {
      type: string;
      id: string;
      name: string;
      server?: string;
      link?: string;
      /** @enum {string} */
      "call-type"?: "one2one" | "group" | "public";
      "icon-url"?: string;
      "message-id"?: string;
      boardname?: string;
      stackname?: string;
      size?: string;
      path?: string;
      mimetype?: string;
      /** @enum {string} */
      "preview-available"?: "yes" | "no";
      mtime?: string;
      latitude?: string;
      longitude?: string;
      description?: string;
      thumb?: string;
      website?: string;
      /** @enum {string} */
      visibility?: "0" | "1";
      /** @enum {string} */
      assignable?: "0" | "1";
      conversation?: string;
    };
    Room: {
      actorId: string;
      actorType: string;
      /** Format: int64 */
      attendeeId: number;
      /** Format: int64 */
      attendeePermissions: number;
      attendeePin: string | null;
      avatarVersion: string;
      /** Format: int64 */
      breakoutRoomMode: number;
      /** Format: int64 */
      breakoutRoomStatus: number;
      /** Format: int64 */
      callFlag: number;
      /** Format: int64 */
      callPermissions: number;
      /** Format: int64 */
      callRecording: number;
      /** Format: int64 */
      callStartTime: number;
      canDeleteConversation: boolean;
      canEnableSIP: boolean;
      canLeaveConversation: boolean;
      canStartCall: boolean;
      /** Format: int64 */
      defaultPermissions: number;
      description: string;
      displayName: string;
      hasCall: boolean;
      hasPassword: boolean;
      /** Format: int64 */
      id: number;
      isCustomAvatar: boolean;
      isFavorite: boolean;
      /** Format: int64 */
      lastActivity: number;
      /** Format: int64 */
      lastCommonReadMessage: number;
      lastMessage: components["schemas"]["RoomLastMessage"] | unknown[];
      /** Format: int64 */
      lastPing: number;
      /** Format: int64 */
      lastReadMessage: number;
      /** Format: int64 */
      listable: number;
      /** Format: int64 */
      lobbyState: number;
      /** Format: int64 */
      lobbyTimer: number;
      /** Format: int64 */
      messageExpiration: number;
      name: string;
      /** Format: int64 */
      notificationCalls: number;
      /** Format: int64 */
      notificationLevel: number;
      objectId: string;
      objectType: string;
      /** Format: int64 */
      participantFlags: number;
      /** Format: int64 */
      participantType: number;
      /** Format: int64 */
      permissions: number;
      /** Format: int64 */
      readOnly: number;
      /** Format: int64 */
      recordingConsent: number;
      sessionId: string;
      /** Format: int64 */
      sipEnabled: number;
      status?: string;
      /** Format: int64 */
      statusClearAt?: number | null;
      statusIcon?: string | null;
      statusMessage?: string | null;
      token: string;
      /** Format: int64 */
      type: number;
      unreadMention: boolean;
      unreadMentionDirect: boolean;
      /** Format: int64 */
      unreadMessages: number;
    };
    RoomLastMessage: components["schemas"]["ChatMessage"] | components["schemas"]["ChatProxyMessage"];
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
};

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export type operations = {

  /** Get a room */
  "room-get-single-room": {
    parameters: {
      header: {
        /** @description Required to be true for the API request to pass */
        "OCS-APIRequest": boolean;
      };
      path: {
        apiVersion: "v4";
        /** @description Token of the room */
        token: string;
      };
    };
    responses: {
      /** @description Room returned */
      200: {
        headers: {
          "X-Nextcloud-Talk-Hash"?: string;
        };
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: components["schemas"]["Room"];
            };
          };
        };
      };
      /** @description SIP request invalid */
      401: {
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: unknown;
            };
          };
        };
      };
      /** @description Room not found */
      404: {
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: unknown;
            };
          };
        };
      };
    };
  };
  /** Verify a dial-in PIN (SIP bridge) */
  "room-verify-dial-in-pin-deprecated": {
    parameters: {
      header: {
        /** @description Required to be true for the API request to pass */
        "OCS-APIRequest": boolean;
      };
      path: {
        apiVersion: "v4";
        token: string;
        /** @description PIN the participant used to dial-in */
        pin: string;
      };
    };
    responses: {
      /** @description Participant returned */
      200: {
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: components["schemas"]["Room"];
            };
          };
        };
      };
      /** @description SIP request invalid */
      401: {
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: unknown;
            };
          };
        };
      };
      /** @description Participant not found */
      404: {
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: unknown;
            };
          };
        };
      };
      /** @description SIP dial-in is not configured */
      501: {
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: unknown;
            };
          };
        };
      };
    };
  };
  /** Verify a dial-in PIN (SIP bridge) */
  "room-verify-dial-in-pin": {
    parameters: {
      query: {
        /** @description PIN the participant used to dial-in */
        pin: string;
      };
      header: {
        /** @description Required to be true for the API request to pass */
        "OCS-APIRequest": boolean;
      };
      path: {
        apiVersion: "v4";
        token: string;
      };
    };
    responses: {
      /** @description Participant returned */
      200: {
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: components["schemas"]["Room"];
            };
          };
        };
      };
      /** @description SIP request invalid */
      401: {
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: unknown;
            };
          };
        };
      };
      /** @description Participant not found */
      404: {
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: unknown;
            };
          };
        };
      };
      /** @description SIP dial-in is not configured */
      501: {
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: unknown;
            };
          };
        };
      };
    };
  };
  /** Verify a dial-out number (SIP bridge) */
  "room-verify-dial-out-number": {
    parameters: {
      query: {
        /** @description E164 formatted phone number */
        number: string;
        /** @description Additional details to verify the validity of the request */
        options?: string;
      };
      header: {
        /** @description Required to be true for the API request to pass */
        "OCS-APIRequest": boolean;
      };
      path: {
        apiVersion: "v4";
        token: string;
      };
    };
    responses: {
      /** @description Participant created successfully */
      200: {
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: components["schemas"]["Room"];
            };
          };
        };
      };
      /** @description Phone number and details could not be confirmed */
      400: {
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: unknown;
            };
          };
        };
      };
      /** @description SIP request invalid */
      401: {
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: unknown;
            };
          };
        };
      };
      /** @description Phone number is not invited as a participant */
      404: {
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: unknown;
            };
          };
        };
      };
      /** @description SIP dial-out is not configured */
      501: {
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: unknown;
            };
          };
        };
      };
    };
  };
  /** Create a guest by their dial-in */
  "room-create-guest-by-dial-in": {
    parameters: {
      header: {
        /** @description Required to be true for the API request to pass */
        "OCS-APIRequest": boolean;
      };
      path: {
        apiVersion: "v4";
        token: string;
      };
    };
    responses: {
      /** @description Participant created successfully */
      200: {
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: components["schemas"]["Room"];
            };
          };
        };
      };
      /** @description SIP not enabled */
      400: {
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: unknown;
            };
          };
        };
      };
      /** @description SIP request invalid */
      401: {
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: unknown;
            };
          };
        };
      };
    };
  };
  /** Reset call ID of a dial-out participant when the SIP gateway rejected it */
  "room-rejected-dial-out-request": {
    parameters: {
      query: {
        /** @description The call ID provided by the SIP bridge earlier to uniquely identify the call to terminate */
        callId: string;
        /** @description Additional details to verify the validity of the request */
        options?: string;
      };
      header: {
        /** @description Required to be true for the API request to pass */
        "OCS-APIRequest": boolean;
      };
      path: {
        apiVersion: "v4";
        token: string;
      };
    };
    responses: {
      /** @description Call ID reset */
      200: {
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: unknown;
            };
          };
        };
      };
      /** @description Call ID mismatch or attendeeId not found in $options */
      400: {
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: unknown;
            };
          };
        };
      };
      /** @description SIP request invalid */
      401: {
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: unknown;
            };
          };
        };
      };
      /** @description Participant was not found */
      404: {
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: unknown;
            };
          };
        };
      };
      /** @description SIP dial-out is not configured */
      501: {
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: unknown;
            };
          };
        };
      };
    };
  };
};
