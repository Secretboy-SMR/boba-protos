// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "SceneEntityAppearNotify.proto" (syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { VisionType } from "./VisionType";
import { SceneEntityInfo } from "./SceneEntityInfo";
/**
 * @generated from protobuf message SceneEntityAppearNotify
 */
export interface SceneEntityAppearNotify {
    /**
     * @generated from protobuf field: repeated SceneEntityInfo entity_list = 1;
     */
    entityList: SceneEntityInfo[];
    /**
     * @generated from protobuf field: VisionType appear_type = 2;
     */
    appearType: VisionType;
    /**
     * @generated from protobuf field: uint32 param = 3;
     */
    param: number;
}
/**
 * @generated from protobuf enum SceneEntityAppearNotify.CmdId
 */
export declare enum SceneEntityAppearNotify_CmdId {
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
     * @generated from protobuf enum value: CMD_ID = 201;
     */
    CMD_ID = 201
}
declare class SceneEntityAppearNotify$Type extends MessageType<SceneEntityAppearNotify> {
    constructor();
    create(value?: PartialMessage<SceneEntityAppearNotify>): SceneEntityAppearNotify;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SceneEntityAppearNotify): SceneEntityAppearNotify;
    internalBinaryWrite(message: SceneEntityAppearNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message SceneEntityAppearNotify
 */
export declare const SceneEntityAppearNotify: SceneEntityAppearNotify$Type;
export {};