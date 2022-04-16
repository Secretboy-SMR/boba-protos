// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "AbilitySyncStateInfo.proto" (syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { AbilityMixinRecoverInfo } from "./AbilityMixinRecoverInfo";
import { AbilityAppliedModifier } from "./AbilityAppliedModifier";
import { AbilityAppliedAbility } from "./AbilityAppliedAbility";
import { AbilityScalarValueEntry } from "./AbilityScalarValueEntry";
/**
 * @generated from protobuf message AbilitySyncStateInfo
 */
export interface AbilitySyncStateInfo {
    /**
     * @generated from protobuf field: bool is_inited = 1;
     */
    isInited: boolean;
    /**
     * @generated from protobuf field: repeated AbilityScalarValueEntry dynamic_value_map = 2;
     */
    dynamicValueMap: AbilityScalarValueEntry[];
    /**
     * @generated from protobuf field: repeated AbilityAppliedAbility applied_abilities = 3;
     */
    appliedAbilities: AbilityAppliedAbility[];
    /**
     * @generated from protobuf field: repeated AbilityAppliedModifier applied_modifiers = 4;
     */
    appliedModifiers: AbilityAppliedModifier[];
    /**
     * @generated from protobuf field: repeated AbilityMixinRecoverInfo mixin_recover_infos = 5;
     */
    mixinRecoverInfos: AbilityMixinRecoverInfo[];
    /**
     * @generated from protobuf field: repeated AbilityScalarValueEntry sgv_dynamic_value_map = 6;
     */
    sgvDynamicValueMap: AbilityScalarValueEntry[];
}
declare class AbilitySyncStateInfo$Type extends MessageType<AbilitySyncStateInfo> {
    constructor();
    create(value?: PartialMessage<AbilitySyncStateInfo>): AbilitySyncStateInfo;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AbilitySyncStateInfo): AbilitySyncStateInfo;
    internalBinaryWrite(message: AbilitySyncStateInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message AbilitySyncStateInfo
 */
export declare const AbilitySyncStateInfo: AbilitySyncStateInfo$Type;
export {};
