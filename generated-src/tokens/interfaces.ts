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

export interface PartnerOfferClaimRequest {
  readonly PartnerOfferId: string;
  readonly BungieNetMembershipId: string;
  readonly TransactionId: string;
}

export interface PartnerOfferSkuHistoryResponse {
  readonly SkuIdentifier: string;
  readonly LocalizedName: string;
  readonly LocalizedDescription: string;
  readonly ClaimDate: string;
  readonly AllOffersApplied: boolean;
  readonly TransactionId: string;
  readonly SkuOffers: PartnerOfferHistoryResponse[];
}

export interface PartnerOfferHistoryResponse {
  readonly PartnerOfferKey: string;
  readonly MembershipId?: string;
  readonly MembershipType?: number;
  readonly LocalizedName: string;
  readonly LocalizedDescription: string;
  readonly IsConsumable: boolean;
  readonly QuantityApplied: number;
  readonly ApplyDate?: string;
}
