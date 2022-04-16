// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "TrialAvatarGrantRecord.proto" (syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message TrialAvatarGrantRecord
 */
export interface TrialAvatarGrantRecord {
    /**
     * @generated from protobuf field: uint32 grant_reason = 1;
     */
    grantReason: number;
    /**
     * @generated from protobuf field: uint32 from_parent_quest_id = 2;
     */
    fromParentQuestId: number;
}
/**
 * @generated from protobuf enum TrialAvatarGrantRecord.GrantReason
 */
export declare enum TrialAvatarGrantRecord_GrantReason {
    /**
     * @generated from protobuf enum value: INVALID = 0;
     */
    INVALID = 0,
    /**
     * @generated from protobuf enum value: GRANT_BY_QUEST = 1;
     */
    GRANT_BY_QUEST = 1,
    /**
     * @generated from protobuf enum value: GRANT_BY_TRIAL_AVATAR_ACTIVITY = 2;
     */
    GRANT_BY_TRIAL_AVATAR_ACTIVITY = 2,
    /**
     * @generated from protobuf enum value: GRANT_BY_DUNGEON_ELEMENT_CHALLENGE = 3;
     */
    GRANT_BY_DUNGEON_ELEMENT_CHALLENGE = 3,
    /**
     * @generated from protobuf enum value: GRANT_BY_MIST_TRIAL_ACTIVITY = 4;
     */
    GRANT_BY_MIST_TRIAL_ACTIVITY = 4,
    /**
     * @generated from protobuf enum value: GRANT_BY_SUMO_ACTIVITY = 5;
     */
    GRANT_BY_SUMO_ACTIVITY = 5
}
declare class TrialAvatarGrantRecord$Type extends MessageType<TrialAvatarGrantRecord> {
    constructor();
    create(value?: PartialMessage<TrialAvatarGrantRecord>): TrialAvatarGrantRecord;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TrialAvatarGrantRecord): TrialAvatarGrantRecord;
    internalBinaryWrite(message: TrialAvatarGrantRecord, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message TrialAvatarGrantRecord
 */
export declare const TrialAvatarGrantRecord: TrialAvatarGrantRecord$Type;
export {};
