// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "GadgetCrucibleInfo.proto" (syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message GadgetCrucibleInfo
 */
export interface GadgetCrucibleInfo {
    /**
     * @generated from protobuf field: uint32 mp_play_id = 1;
     */
    mpPlayId: number;
    /**
     * @generated from protobuf field: uint32 prepare_end_time = 2;
     */
    prepareEndTime: number;
}
declare class GadgetCrucibleInfo$Type extends MessageType<GadgetCrucibleInfo> {
    constructor();
    create(value?: PartialMessage<GadgetCrucibleInfo>): GadgetCrucibleInfo;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GadgetCrucibleInfo): GadgetCrucibleInfo;
    internalBinaryWrite(message: GadgetCrucibleInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message GadgetCrucibleInfo
 */
export declare const GadgetCrucibleInfo: GadgetCrucibleInfo$Type;
export {};
