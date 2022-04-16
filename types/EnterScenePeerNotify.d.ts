// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "EnterScenePeerNotify.proto" (syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message EnterScenePeerNotify
 */
export interface EnterScenePeerNotify {
    /**
     * @generated from protobuf field: uint32 dest_scene_id = 1;
     */
    destSceneId: number;
    /**
     * @generated from protobuf field: uint32 peer_id = 2;
     */
    peerId: number;
    /**
     * @generated from protobuf field: uint32 host_peer_id = 3;
     */
    hostPeerId: number;
    /**
     * @generated from protobuf field: uint32 enter_scene_token = 4;
     */
    enterSceneToken: number;
}
/**
 * @generated from protobuf enum EnterScenePeerNotify.CmdId
 */
export declare enum EnterScenePeerNotify_CmdId {
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
     * @generated from protobuf enum value: CMD_ID = 223;
     */
    CMD_ID = 223
}
declare class EnterScenePeerNotify$Type extends MessageType<EnterScenePeerNotify> {
    constructor();
    create(value?: PartialMessage<EnterScenePeerNotify>): EnterScenePeerNotify;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EnterScenePeerNotify): EnterScenePeerNotify;
    internalBinaryWrite(message: EnterScenePeerNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message EnterScenePeerNotify
 */
export declare const EnterScenePeerNotify: EnterScenePeerNotify$Type;
export {};
