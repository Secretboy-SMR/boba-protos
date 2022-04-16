// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "WorldDataNotify.proto" (syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { PropValue } from "./PropValue";
/**
 * @generated from protobuf message WorldDataNotify
 */
export interface WorldDataNotify {
    /**
     * @generated from protobuf field: map<uint32, PropValue> world_prop_map = 1;
     */
    worldPropMap: {
        [key: number]: PropValue;
    };
}
/**
 * @generated from protobuf enum WorldDataNotify.CmdId
 */
export declare enum WorldDataNotify_CmdId {
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
     * @generated from protobuf enum value: CMD_ID = 3219;
     */
    CMD_ID = 3219
}
/**
 * @generated from protobuf enum WorldDataNotify.DataType
 */
export declare enum WorldDataNotify_DataType {
    /**
     * @generated from protobuf enum value: DATA_NONE = 0;
     */
    DATA_NONE = 0,
    /**
     * @generated from protobuf enum value: WORLD_LEVEL = 1;
     */
    WORLD_LEVEL = 1,
    /**
     * @generated from protobuf enum value: IS_IN_MP_MODE = 2;
     */
    IS_IN_MP_MODE = 2
}
declare class WorldDataNotify$Type extends MessageType<WorldDataNotify> {
    constructor();
    create(value?: PartialMessage<WorldDataNotify>): WorldDataNotify;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WorldDataNotify): WorldDataNotify;
    private binaryReadMap1;
    internalBinaryWrite(message: WorldDataNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message WorldDataNotify
 */
export declare const WorldDataNotify: WorldDataNotify$Type;
export {};
