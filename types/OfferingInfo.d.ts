// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "OfferingInfo.proto" (syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message OfferingInfo
 */
export interface OfferingInfo {
    /**
     * @generated from protobuf field: uint32 offering_id = 1;
     */
    offeringId: number;
}
declare class OfferingInfo$Type extends MessageType<OfferingInfo> {
    constructor();
    create(value?: PartialMessage<OfferingInfo>): OfferingInfo;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OfferingInfo): OfferingInfo;
    internalBinaryWrite(message: OfferingInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message OfferingInfo
 */
export declare const OfferingInfo: OfferingInfo$Type;
export {};
