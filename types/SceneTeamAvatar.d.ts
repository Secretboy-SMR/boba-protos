// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "SceneTeamAvatar.proto" (syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { AbilityControlBlock } from "./AbilityControlBlock";
import { SceneEntityInfo } from "./SceneEntityInfo";
import { ServerBuff } from "./ServerBuff";
import { AbilitySyncStateInfo } from "./AbilitySyncStateInfo";
import { SceneAvatarInfo } from "./SceneAvatarInfo";
import { AvatarInfo } from "./AvatarInfo";
/**
 * @generated from protobuf message SceneTeamAvatar
 */
export interface SceneTeamAvatar {
    /**
     * @generated from protobuf field: uint32 player_uid = 1;
     */
    playerUid: number;
    /**
     * @generated from protobuf field: uint64 avatar_guid = 2;
     */
    avatarGuid: bigint;
    /**
     * @generated from protobuf field: uint32 scene_id = 3;
     */
    sceneId: number;
    /**
     * @generated from protobuf field: uint32 entity_id = 4;
     */
    entityId: number;
    /**
     * @generated from protobuf field: AvatarInfo avatar_info = 5;
     */
    avatarInfo?: AvatarInfo;
    /**
     * @generated from protobuf field: SceneAvatarInfo scene_avatar_info = 6;
     */
    sceneAvatarInfo?: SceneAvatarInfo;
    /**
     * @generated from protobuf field: AbilitySyncStateInfo avatar_ability_info = 7;
     */
    avatarAbilityInfo?: AbilitySyncStateInfo;
    /**
     * @generated from protobuf field: repeated ServerBuff server_buff_list = 8;
     */
    serverBuffList: ServerBuff[];
    /**
     * @generated from protobuf field: SceneEntityInfo scene_entity_info = 9;
     */
    sceneEntityInfo?: SceneEntityInfo;
    /**
     * @generated from protobuf field: uint64 weapon_guid = 10;
     */
    weaponGuid: bigint;
    /**
     * @generated from protobuf field: uint32 weapon_entity_id = 11;
     */
    weaponEntityId: number;
    /**
     * @generated from protobuf field: AbilitySyncStateInfo weapon_ability_info = 12;
     */
    weaponAbilityInfo?: AbilitySyncStateInfo;
    /**
     * @generated from protobuf field: AbilityControlBlock ability_control_block = 13;
     */
    abilityControlBlock?: AbilityControlBlock;
    /**
     * @generated from protobuf field: bool is_reconnect = 14;
     */
    isReconnect: boolean;
    /**
     * @generated from protobuf field: bool is_player_cur_avatar = 15;
     */
    isPlayerCurAvatar: boolean;
    /**
     * @generated from protobuf field: bool is_on_scene = 16;
     */
    isOnScene: boolean;
}
declare class SceneTeamAvatar$Type extends MessageType<SceneTeamAvatar> {
    constructor();
    create(value?: PartialMessage<SceneTeamAvatar>): SceneTeamAvatar;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SceneTeamAvatar): SceneTeamAvatar;
    internalBinaryWrite(message: SceneTeamAvatar, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message SceneTeamAvatar
 */
export declare const SceneTeamAvatar: SceneTeamAvatar$Type;
export {};