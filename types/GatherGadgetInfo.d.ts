// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "GatherGadgetInfo.proto" (syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message GatherGadgetInfo
 */
export interface GatherGadgetInfo {
    /**
     * @generated from protobuf field: uint32 item_id = 1;
     */
    itemId: number;
    /**
     * @generated from protobuf field: bool is_forbid_guest = 2;
     */
    isForbidGuest: boolean;
}
declare class GatherGadgetInfo$Type extends MessageType<GatherGadgetInfo> {
    constructor();
    create(value?: PartialMessage<GatherGadgetInfo>): GatherGadgetInfo;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GatherGadgetInfo): GatherGadgetInfo;
    internalBinaryWrite(message: GatherGadgetInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message GatherGadgetInfo
 */
export declare const GatherGadgetInfo: GatherGadgetInfo$Type;
export {};