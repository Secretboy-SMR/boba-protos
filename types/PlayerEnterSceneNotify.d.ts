// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "PlayerEnterSceneNotify.proto" (syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { EnterType } from "./EnterType";
import { Vector } from "./Vector";
/**
 * @generated from protobuf message PlayerEnterSceneNotify
 */
export interface PlayerEnterSceneNotify {
    /**
     * @generated from protobuf field: uint32 scene_id = 1;
     */
    sceneId: number;
    /**
     * @generated from protobuf field: Vector pos = 2;
     */
    pos?: Vector;
    /**
     * @generated from protobuf field: uint64 scene_begin_time = 3;
     */
    sceneBeginTime: bigint;
    /**
     * @generated from protobuf field: EnterType type = 4;
     */
    type: EnterType;
    /**
     * @generated from protobuf field: uint32 target_uid = 6;
     */
    targetUid: number;
    /**
     * @generated from protobuf field: uint32 prev_scene_id = 9;
     */
    prevSceneId: number;
    /**
     * @generated from protobuf field: Vector prev_pos = 10;
     */
    prevPos?: Vector;
    /**
     * @generated from protobuf field: uint32 dungeon_id = 11;
     */
    dungeonId: number;
    /**
     * @generated from protobuf field: uint32 world_level = 12;
     */
    worldLevel: number;
    /**
     * @generated from protobuf field: uint32 enter_scene_token = 13;
     */
    enterSceneToken: number;
    /**
     * @generated from protobuf field: bool is_first_login_enter_scene = 14;
     */
    isFirstLoginEnterScene: boolean;
    /**
     * @generated from protobuf field: repeated uint32 scene_tag_id_list = 15;
     */
    sceneTagIdList: number[];
    /**
     * @generated from protobuf field: bool is_skip_ui = 16;
     */
    isSkipUi: boolean;
    /**
     * @generated from protobuf field: uint32 enter_reason = 17;
     */
    enterReason: number;
    /**
     * @generated from protobuf field: uint32 world_type = 18;
     */
    worldType: number;
    /**
     * @generated from protobuf field: string scene_transaction = 19;
     */
    sceneTransaction: string;
}
/**
 * @generated from protobuf enum PlayerEnterSceneNotify.CmdId
 */
export declare enum PlayerEnterSceneNotify_CmdId {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    NONE = 0,
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ENET_CHANNEL_ID = 0,
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ENET_IS_RELIABLE = 1,
    /**
     * @generated from protobuf enum value: CMD_ID = 249;
     */
    CMD_ID = 249
}
declare class PlayerEnterSceneNotify$Type extends MessageType<PlayerEnterSceneNotify> {
    constructor();
    create(value?: PartialMessage<PlayerEnterSceneNotify>): PlayerEnterSceneNotify;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PlayerEnterSceneNotify): PlayerEnterSceneNotify;
    internalBinaryWrite(message: PlayerEnterSceneNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message PlayerEnterSceneNotify
 */
export declare const PlayerEnterSceneNotify: PlayerEnterSceneNotify$Type;
export {};