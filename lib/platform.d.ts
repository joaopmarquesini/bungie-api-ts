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
export interface IgnoreResponse {
    readonly isIgnored: boolean;
    /**
     * This enum represents a set of flags - use bitwise operators to check which of
     * these match your value.
     */
    readonly ignoreFlags: IgnoreStatus;
}
/**
 * This enum represents a set of flags - use bitwise operators to check which of
 * these match your value.
 */
export declare const enum IgnoreStatus {
    NotIgnored = 0,
    IgnoredUser = 1,
    IgnoredGroup = 2,
    IgnoredByGroup = 4,
    IgnoredPost = 8,
    IgnoredTag = 16,
    IgnoredGlobal = 32
}
export interface TagResponse {
    readonly tagText: string;
    readonly ignoreStatus: IgnoreResponse;
}
