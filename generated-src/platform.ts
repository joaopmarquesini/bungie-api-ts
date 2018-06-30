/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.2.2
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-ts code generator program.
 * https://github.com/DestinyItemManager/bugie-api-ts
 * Do not edit these files manually.
 */

export interface IgnoreResponse {
  readonly isIgnored: boolean;
  readonly ignoreFlags: IgnoreStatus;
}

export const enum IgnoreStatus {
  NotIgnored = 0,
  IgnoredUser = 1,
  IgnoredGroup = 2,
  IgnoredByGroup = 4,
  IgnoredPost = 8,
  IgnoredTag = 16,
  IgnoredGlobal = 32
}

export const enum PartnershipType {
  None = 0,
  Twitch = 1
}

export interface TagResponse {
  readonly tagText: string;
  readonly ignoreStatus: IgnoreResponse;
}
