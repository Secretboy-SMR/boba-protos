// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "SceneInitFinishReq.proto" (syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message SceneInitFinishReq
 */
export interface SceneInitFinishReq {
    /**
     * @generated from protobuf field: uint32 enter_scene_token = 1;
     */
    enterSceneToken: number;
}
/**
 * @generated from protobuf enum SceneInitFinishReq.CmdId
 */
export declare enum SceneInitFinishReq_CmdId {
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
     * @generated from protobuf enum value: CMD_ID = 284;
     */
    CMD_ID = 284
}
declare class SceneInitFinishReq$Type extends MessageType<SceneInitFinishReq> {
    constructor();
    create(value?: PartialMessage<SceneInitFinishReq>): SceneInitFinishReq;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SceneInitFinishReq): SceneInitFinishReq;
    internalBinaryWrite(message: SceneInitFinishReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message SceneInitFinishReq
 */
export declare const SceneInitFinishReq: SceneInitFinishReq$Type;
export {};
