/* eslint-disable prettier/prettier */
export interface StoreRootConfig {
    dirname: string;
}

export interface StoreFeatureConfig {
    filename: string;
}
// partial cho pheps co hoac khong co du lieu
export type StoreConfig = Partial<StoreRootConfig & StoreFeatureConfig>;

export const STORE_CONFIG_TOKEN = 'STORE_CONFIG_TOKEN';
