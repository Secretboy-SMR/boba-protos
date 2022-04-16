// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "ScenePlayerInfoNotify.proto" (syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { ScenePlayerInfo } from "./ScenePlayerInfo";
/**
 * @generated from protobuf message ScenePlayerInfoNotify
 */
export interface ScenePlayerInfoNotify {
    /**
     * @generated from protobuf field: repeated ScenePlayerInfo player_info_list = 1;
     */
    playerInfoList: ScenePlayerInfo[];
}
/**
 * @generated from protobuf enum ScenePlayerInfoNotify.CmdId
 */
export declare enum ScenePlayerInfoNotify_CmdId {
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
     * @generated from protobuf enum value: CMD_ID = 293;
     */
    CMD_ID = 293
}
declare class ScenePlayerInfoNotify$Type extends MessageType<ScenePlayerInfoNotify> {
    constructor();
    create(value?: PartialMessage<ScenePlayerInfoNotify>): ScenePlayerInfoNotify;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ScenePlayerInfoNotify): ScenePlayerInfoNotify;
    internalBinaryWrite(message: ScenePlayerInfoNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ScenePlayerInfoNotify
 */
export declare const ScenePlayerInfoNotify: ScenePlayerInfoNotify$Type;
export {};
