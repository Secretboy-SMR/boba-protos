// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "AbilityAppliedModifier.proto" (syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { ModifierDurability } from "./ModifierDurability";
import { AbilityAttachedModifier } from "./AbilityAttachedModifier";
import { AbilityString } from "./AbilityString";
/**
 * @generated from protobuf message AbilityAppliedModifier
 */
export interface AbilityAppliedModifier {
    /**
     * @generated from protobuf field: int32 modifier_local_id = 1;
     */
    modifierLocalId: number;
    /**
     * @generated from protobuf field: uint32 parent_ability_entity_id = 2;
     */
    parentAbilityEntityId: number;
    /**
     * @generated from protobuf field: AbilityString parent_ability_name = 3;
     */
    parentAbilityName?: AbilityString;
    /**
     * @generated from protobuf field: AbilityString parent_ability_override = 4;
     */
    parentAbilityOverride?: AbilityString;
    /**
     * @generated from protobuf field: uint32 instanced_ability_id = 5;
     */
    instancedAbilityId: number;
    /**
     * @generated from protobuf field: uint32 instanced_modifier_id = 6;
     */
    instancedModifierId: number;
    /**
     * @generated from protobuf field: float exist_duration = 7;
     */
    existDuration: number;
    /**
     * @generated from protobuf field: AbilityAttachedModifier attached_instanced_modifier = 8;
     */
    attachedInstancedModifier?: AbilityAttachedModifier;
    /**
     * @generated from protobuf field: uint32 apply_entity_id = 9;
     */
    applyEntityId: number;
    /**
     * @generated from protobuf field: bool is_attached_parent_ability = 10;
     */
    isAttachedParentAbility: boolean;
    /**
     * @generated from protobuf field: ModifierDurability modifier_durability = 11;
     */
    modifierDurability?: ModifierDurability;
    /**
     * @generated from protobuf field: uint32 sbuff_uid = 12;
     */
    sbuffUid: number;
    /**
     * @generated from protobuf field: bool is_serverbuff_modifier = 13;
     */
    isServerbuffModifier: boolean;
}
declare class AbilityAppliedModifier$Type extends MessageType<AbilityAppliedModifier> {
    constructor();
    create(value?: PartialMessage<AbilityAppliedModifier>): AbilityAppliedModifier;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AbilityAppliedModifier): AbilityAppliedModifier;
    internalBinaryWrite(message: AbilityAppliedModifier, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message AbilityAppliedModifier
 */
export declare const AbilityAppliedModifier: AbilityAppliedModifier$Type;
export {};
