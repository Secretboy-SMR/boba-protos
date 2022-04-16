// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "PlayerEnterSceneInfoNotify.proto" (syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { MPLevelEntityInfo } from "./MPLevelEntityInfo";
import { TeamEnterSceneInfo } from "./TeamEnterSceneInfo";
import { AvatarEnterSceneInfo } from "./AvatarEnterSceneInfo";
/**
 * @generated from protobuf message PlayerEnterSceneInfoNotify
 */
export interface PlayerEnterSceneInfoNotify {
    /**
     * @generated from protobuf field: uint32 cur_avatar_entity_id = 1;
     */
    curAvatarEntityId: number;
    /**
     * @generated from protobuf field: repeated AvatarEnterSceneInfo avatar_enter_info = 2;
     */
    avatarEnterInfo: AvatarEnterSceneInfo[];
    /**
     * @generated from protobuf field: TeamEnterSceneInfo team_enter_info = 3;
     */
    teamEnterInfo?: TeamEnterSceneInfo;
    /**
     * @generated from protobuf field: MPLevelEntityInfo mp_level_entity_info = 4;
     */
    mpLevelEntityInfo?: MPLevelEntityInfo;
    /**
     * @generated from protobuf field: uint32 enter_scene_token = 5;
     */
    enterSceneToken: number;
}
/**
 * @generated from protobuf enum PlayerEnterSceneInfoNotify.CmdId
 */
export declare enum PlayerEnterSceneInfoNotify_CmdId {
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 0;
     */
    ENET_CHANNEL_ID = 0,
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 0;
     */
    NONE = 0,
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ENET_IS_RELIABLE = 1,
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    IS_ALLOW_CLIENT = 1,
    /**
     * @generated from protobuf enum value: CMD_ID = 246;
     */
    CMD_ID = 246
}
declare class PlayerEnterSceneInfoNotify$Type extends MessageType<PlayerEnterSceneInfoNotify> {
    constructor();
    create(value?: PartialMessage<PlayerEnterSceneInfoNotify>): PlayerEnterSceneInfoNotify;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PlayerEnterSceneInfoNotify): PlayerEnterSceneInfoNotify;
    internalBinaryWrite(message: PlayerEnterSceneInfoNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message PlayerEnterSceneInfoNotify
 */
export declare const PlayerEnterSceneInfoNotify: PlayerEnterSceneInfoNotify$Type;
export {};
