/**
 * these helper functions and definitions are based off the structure of DestinyManifest
 * in the bungie.net API spec, but are not explicity defined endpoints in the spec.
 *
 * they were last hand-checked for OpenAPI spec version 2.8.0,
 * and have been automatically tested for the latest OpenAPI spec version 2.8.2.
 * if there are typing issues with them, please let us know at the below repo.
 *
 * NOTE: This class is auto generated by the bungie-api-ts code generator program.
 * https://github.com/DestinyItemManager/bungie-api-ts
 * Do not edit these files manually.
 */

import { HttpClient } from '../http';

import {
  DestinyPlaceDefinition,
  DestinyActivityDefinition,
  DestinyActivityTypeDefinition,
  DestinyClassDefinition,
  DestinyGenderDefinition,
  DestinyInventoryBucketDefinition,
  DestinyRaceDefinition,
  DestinyTalentGridDefinition,
  DestinyUnlockDefinition,
  DestinyMaterialRequirementSetDefinition,
  DestinySandboxPerkDefinition,
  DestinyStatGroupDefinition,
  DestinyProgressionMappingDefinition,
  DestinyFactionDefinition,
  DestinyVendorGroupDefinition,
  DestinyRewardSourceDefinition,
  DestinyUnlockValueDefinition,
  DestinyItemCategoryDefinition,
  DestinyDamageTypeDefinition,
  DestinyActivityModeDefinition,
  DestinyActivityGraphDefinition,
  DestinyCollectibleDefinition,
  DestinyStatDefinition,
  DestinyItemTierTypeDefinition,
  DestinyMetricDefinition,
  DestinyPlugSetDefinition,
  DestinyPowerCapDefinition,
  DestinyPresentationNodeDefinition,
  DestinyRecordDefinition,
  DestinyDestinationDefinition,
  DestinyEquipmentSlotDefinition,
  DestinyInventoryItemDefinition,
  DestinyLocationDefinition,
  DestinyLoreDefinition,
  DestinyObjectiveDefinition,
  DestinyProgressionDefinition,
  DestinyProgressionLevelRequirementDefinition,
  DestinySeasonDefinition,
  DestinySeasonPassDefinition,
  DestinySocketCategoryDefinition,
  DestinySocketTypeDefinition,
  DestinyTraitDefinition,
  DestinyTraitCategoryDefinition,
  DestinyVendorDefinition,
  DestinyMilestoneDefinition,
  DestinyActivityModifierDefinition,
  DestinyReportReasonCategoryDefinition,
  DestinyArtifactDefinition,
  DestinyBreakerTypeDefinition,
  DestinyChecklistDefinition,
  DestinyEnergyTypeDefinition,
  DestinyManifest
} from './interfaces';

/**
 * this describes a big object holding several tables of hash-keyed DestinyDefinitions.
 * this is roughly what you get if you decode the gigantic, single-json manifest blob,
 * but also just what we use here to dole out single-table, typed definitions
 */
export interface AllDestinyManifestComponents {
  DestinyPlaceDefinition: { [key: number]: DestinyPlaceDefinition };
  DestinyActivityDefinition: { [key: number]: DestinyActivityDefinition };
  DestinyActivityTypeDefinition: { [key: number]: DestinyActivityTypeDefinition };
  DestinyClassDefinition: { [key: number]: DestinyClassDefinition };
  DestinyGenderDefinition: { [key: number]: DestinyGenderDefinition };
  DestinyInventoryBucketDefinition: { [key: number]: DestinyInventoryBucketDefinition };
  DestinyRaceDefinition: { [key: number]: DestinyRaceDefinition };
  DestinyTalentGridDefinition: { [key: number]: DestinyTalentGridDefinition };
  DestinyUnlockDefinition: { [key: number]: DestinyUnlockDefinition };
  DestinyMaterialRequirementSetDefinition: { [key: number]: DestinyMaterialRequirementSetDefinition };
  DestinySandboxPerkDefinition: { [key: number]: DestinySandboxPerkDefinition };
  DestinyStatGroupDefinition: { [key: number]: DestinyStatGroupDefinition };
  DestinyProgressionMappingDefinition: { [key: number]: DestinyProgressionMappingDefinition };
  DestinyFactionDefinition: { [key: number]: DestinyFactionDefinition };
  DestinyVendorGroupDefinition: { [key: number]: DestinyVendorGroupDefinition };
  DestinyRewardSourceDefinition: { [key: number]: DestinyRewardSourceDefinition };
  DestinyUnlockValueDefinition: { [key: number]: DestinyUnlockValueDefinition };
  DestinyItemCategoryDefinition: { [key: number]: DestinyItemCategoryDefinition };
  DestinyDamageTypeDefinition: { [key: number]: DestinyDamageTypeDefinition };
  DestinyActivityModeDefinition: { [key: number]: DestinyActivityModeDefinition };
  DestinyActivityGraphDefinition: { [key: number]: DestinyActivityGraphDefinition };
  DestinyCollectibleDefinition: { [key: number]: DestinyCollectibleDefinition };
  DestinyStatDefinition: { [key: number]: DestinyStatDefinition };
  DestinyItemTierTypeDefinition: { [key: number]: DestinyItemTierTypeDefinition };
  DestinyMetricDefinition: { [key: number]: DestinyMetricDefinition };
  DestinyPlugSetDefinition: { [key: number]: DestinyPlugSetDefinition };
  DestinyPowerCapDefinition: { [key: number]: DestinyPowerCapDefinition };
  DestinyPresentationNodeDefinition: { [key: number]: DestinyPresentationNodeDefinition };
  DestinyRecordDefinition: { [key: number]: DestinyRecordDefinition };
  DestinyDestinationDefinition: { [key: number]: DestinyDestinationDefinition };
  DestinyEquipmentSlotDefinition: { [key: number]: DestinyEquipmentSlotDefinition };
  DestinyInventoryItemDefinition: { [key: number]: DestinyInventoryItemDefinition };
  DestinyLocationDefinition: { [key: number]: DestinyLocationDefinition };
  DestinyLoreDefinition: { [key: number]: DestinyLoreDefinition };
  DestinyObjectiveDefinition: { [key: number]: DestinyObjectiveDefinition };
  DestinyProgressionDefinition: { [key: number]: DestinyProgressionDefinition };
  DestinyProgressionLevelRequirementDefinition: { [key: number]: DestinyProgressionLevelRequirementDefinition };
  DestinySeasonDefinition: { [key: number]: DestinySeasonDefinition };
  DestinySeasonPassDefinition: { [key: number]: DestinySeasonPassDefinition };
  DestinySocketCategoryDefinition: { [key: number]: DestinySocketCategoryDefinition };
  DestinySocketTypeDefinition: { [key: number]: DestinySocketTypeDefinition };
  DestinyTraitDefinition: { [key: number]: DestinyTraitDefinition };
  DestinyTraitCategoryDefinition: { [key: number]: DestinyTraitCategoryDefinition };
  DestinyVendorDefinition: { [key: number]: DestinyVendorDefinition };
  DestinyMilestoneDefinition: { [key: number]: DestinyMilestoneDefinition };
  DestinyActivityModifierDefinition: { [key: number]: DestinyActivityModifierDefinition };
  DestinyReportReasonCategoryDefinition: { [key: number]: DestinyReportReasonCategoryDefinition };
  DestinyArtifactDefinition: { [key: number]: DestinyArtifactDefinition };
  DestinyBreakerTypeDefinition: { [key: number]: DestinyBreakerTypeDefinition };
  DestinyChecklistDefinition: { [key: number]: DestinyChecklistDefinition };
  DestinyEnergyTypeDefinition: { [key: number]: DestinyEnergyTypeDefinition };
}

/**
 * languages the manifest comes in, as their required keys to download them
 */
export const destinyManifestLanguages = [
  'de',
  'en',
  'es',
  'es-mx',
  'fr',
  'it',
  'ja',
  'ko',
  'pl',
  'pt-br',
  'ru',
  'zh-chs',
  'zh-cht',
] as const;

export type DestinyManifestLanguage = typeof destinyManifestLanguages[number];




// thoughts:
// this relies on the assumption that the separate
// manifest pieces offered in jsonWorldComponentContentPaths,
// will all be present in the big manifest at jsonWorldContentPaths.

// this has been the case so far, but there aren't
// strict spec standards for how the manifest will be available

export type DestinyManifestComponentName = keyof AllDestinyManifestComponents;

export type DestinyManifestSlice<K extends Readonly<DestinyManifestComponentName[]>> = Pick<
  AllDestinyManifestComponents,
  K[number]
>;

/**
 * given a STRING table name, returns that TYPE, so that you can write a function like:
 * func<K extends DestinyManifestComponentName>(arg0:K):DestinyDefinitionFrom<K>{...}
 * i.e.
 * func('DestinyInventoryItemDefinition') will return type DestinyInventoryItemDefinition
 */
export type DestinyDefinitionFrom<
  K extends DestinyManifestComponentName
> = AllDestinyManifestComponents[K][number];

export interface GetAllDestinyManifestComponentsParams {
  destinyManifest: DestinyManifest;
  language: DestinyManifestLanguage;
}
/** fetches the enormous combined JSON manifest file */
export function getAllDestinyManifestComponents(
  http: HttpClient,
  params: GetAllDestinyManifestComponentsParams
): Promise<AllDestinyManifestComponents> {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net'+params.destinyManifest.jsonWorldContentPaths[params.language],
  });
}

export interface GetDestinyManifestComponentParams<T extends DestinyManifestComponentName> {
  destinyManifest: DestinyManifest;
  tableName: T;
  language: DestinyManifestLanguage;
}
/**
 * this fetches and returns a single table (Component) from the d2 manifest
 * i.e. DestinyInventoryItemDefinition / DestinyObjectiveDefinition /
 * DestinyVendorDefinition / DestinySeasonDefinition / etc.
 *
 * due to typescript limitations, the table name needs to be recognized by
 * typescript as a const (not mutable between inception and going into the function),
 * so that it considers it a table name and not just a string.
 *
 * this is easy with a string, since
 *
 * `const x = 'thing';` is type `'thing'`, not type `string`,
 *
 * but make sure it's not a `let x =` or a dynamically set string.
 */
export function getDestinyManifestComponent<T extends DestinyManifestComponentName>(
  http: HttpClient,
  params: GetDestinyManifestComponentParams<T>
): Promise<AllDestinyManifestComponents[T]> {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net'+
      params.destinyManifest.jsonWorldComponentContentPaths[params.language][params.tableName]
    ,
  });
}

export interface GetDestinyManifestSliceParams<T extends DestinyManifestComponentName[]> {
  destinyManifest: DestinyManifest;
  tableNames: T;
  language: DestinyManifestLanguage;
}
/**
 * this returns a similar structure to getAllDestinyManifestComponents (the big manifest json)
 * but only specific components within. it bundles multiple single tables requests,
 * into a single properly typed object with keys named after manifest components
 *
 * i.e. `{ DestinyInventoryItemDefinition: etc...,
 * DestinyObjectiveDefinition: etc... }`
 *
 * due to typescript limitations, the array of tableNames needs to be recognized by
 * typescript as readonly (not mutable between inception and going into the function),
 * so that it considers them table names and not just strings.
 *
 * like `['DestinyInventoryItemDefinition' as const]`
 *
 * or maybe `['DestinyInventoryItemDefinition'] as const`
 *
 * or just feed in into the function hardcoded like
 *
 * `function(['DestinyInventoryItemDefinition'])`
 */
export async function getDestinyManifestSlice<T extends DestinyManifestComponentName[]>(
  http: HttpClient,
  params: GetDestinyManifestSliceParams<T>
): Promise<DestinyManifestSlice<T>> {
  const downloadedTables = await Promise.all(
    params.tableNames.map(async (tableName) => {
      const tableContent = await getDestinyManifestComponent(http, {
        destinyManifest: params.destinyManifest,
        tableName,
        language: params.language,
      });
      return { tableName, tableContent };
    })
  );
  const manifestSlice = {} as DestinyManifestSlice<T>;
  for (const downloadedTable of downloadedTables) {
    manifestSlice[downloadedTable.tableName] = downloadedTable.tableContent;
  }
  return manifestSlice;
}
