// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "HostPlayerNotify.proto" (syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message HostPlayerNotify
 */
export interface HostPlayerNotify {
    /**
     * @generated from protobuf field: uint32 host_uid = 1;
     */
    hostUid: number;
    /**
     * @generated from protobuf field: uint32 host_peer_id = 2;
     */
    hostPeerId: number;
}
/**
 * @generated from protobuf enum HostPlayerNotify.CmdId
 */
export declare enum HostPlayerNotify_CmdId {
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
     * @generated from protobuf enum value: CMD_ID = 389;
     */
    CMD_ID = 389
}
declare class HostPlayerNotify$Type extends MessageType<HostPlayerNotify> {
    constructor();
    create(value?: PartialMessage<HostPlayerNotify>): HostPlayerNotify;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HostPlayerNotify): HostPlayerNotify;
    internalBinaryWrite(message: HostPlayerNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message HostPlayerNotify
 */
export declare const HostPlayerNotify: HostPlayerNotify$Type;
export {};