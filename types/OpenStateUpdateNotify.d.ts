// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "OpenStateUpdateNotify.proto" (syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message OpenStateUpdateNotify
 */
export interface OpenStateUpdateNotify {
    /**
     * @generated from protobuf field: map<uint32, uint32> open_state_map = 1;
     */
    openStateMap: {
        [key: number]: number;
    };
}
/**
 * @generated from protobuf enum OpenStateUpdateNotify.CmdId
 */
export declare enum OpenStateUpdateNotify_CmdId {
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
     * @generated from protobuf enum value: CMD_ID = 196;
     */
    CMD_ID = 196
}
declare class OpenStateUpdateNotify$Type extends MessageType<OpenStateUpdateNotify> {
    constructor();
    create(value?: PartialMessage<OpenStateUpdateNotify>): OpenStateUpdateNotify;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OpenStateUpdateNotify): OpenStateUpdateNotify;
    private binaryReadMap1;
    internalBinaryWrite(message: OpenStateUpdateNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message OpenStateUpdateNotify
 */
export declare const OpenStateUpdateNotify: OpenStateUpdateNotify$Type;
export {};
