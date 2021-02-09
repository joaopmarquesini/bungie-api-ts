/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.10.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-ts code generator program.
 * https://github.com/DestinyItemManager/bungie-api-ts
 * Do not edit these files manually.
 */

import { HttpClient } from '../http';

import {
  CoreSettingsConfiguration,
  CoreSystem,
  GlobalAlert
} from './interfaces.js';
import {
  ServerResponse
} from '../common.js';

/** List of available localization cultures */
export function getAvailableLocales(http: HttpClient): Promise<ServerResponse<{ [key: string]: string }>> {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/GetAvailableLocales/'
  });
}

/** Get the common settings used by the Bungie.Net environment. */
export function getCommonSettings(http: HttpClient): Promise<ServerResponse<CoreSettingsConfiguration>> {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/Settings/'
  });
}

/**
 * Get the user-specific system overrides that should be respected alongside common
 * systems.
 */
export function getUserSystemOverrides(http: HttpClient): Promise<ServerResponse<{ [key: string]: CoreSystem }>> {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/UserSystemOverrides/'
  });
}

export interface GetGlobalAlertsParams {
  /** Determines whether Streaming Alerts are included in results */
  includestreaming?: boolean;
}

/**
 * Gets any active global alert for display in the forum banners, help pages, etc.
 * Usually used for DOC alerts.
 */
export function getGlobalAlerts(http: HttpClient, params: GetGlobalAlertsParams): Promise<ServerResponse<GlobalAlert[]>> {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/GlobalAlerts/',
    params: {
      includestreaming: params.includestreaming
    }
  });
}
