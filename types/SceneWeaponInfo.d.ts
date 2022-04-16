// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "SceneWeaponInfo.proto" (syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { AbilitySyncStateInfo } from "./AbilitySyncStateInfo";
/**
 * @generated from protobuf message SceneWeaponInfo
 */
export interface SceneWeaponInfo {
    /**
     * @generated from protobuf field: uint32 entity_id = 1;
     */
    entityId: number;
    /**
     * @generated from protobuf field: uint32 gadget_id = 2;
     */
    gadgetId: number;
    /**
     * @generated from protobuf field: uint32 item_id = 3;
     */
    itemId: number;
    /**
     * @generated from protobuf field: uint64 guid = 4;
     */
    guid: bigint;
    /**
     * @generated from protobuf field: uint32 level = 5;
     */
    level: number;
    /**
     * @generated from protobuf field: uint32 promote_level = 6;
     */
    promoteLevel: number;
    /**
     * @generated from protobuf field: AbilitySyncStateInfo ability_info = 7;
     */
    abilityInfo?: AbilitySyncStateInfo;
    /**
     * @generated from protobuf field: map<uint32, uint32> affix_map = 8;
     */
    affixMap: {
        [key: number]: number;
    };
}
declare class SceneWeaponInfo$Type extends MessageType<SceneWeaponInfo> {
    constructor();
    create(value?: PartialMessage<SceneWeaponInfo>): SceneWeaponInfo;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SceneWeaponInfo): SceneWeaponInfo;
    private binaryReadMap8;
    internalBinaryWrite(message: SceneWeaponInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message SceneWeaponInfo
 */
export declare const SceneWeaponInfo: SceneWeaponInfo$Type;
export {};
