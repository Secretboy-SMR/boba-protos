// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "StatueGadgetInfo.proto" (syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message StatueGadgetInfo
 */
export interface StatueGadgetInfo {
    /**
     * @generated from protobuf field: repeated uint32 opened_statue_uid_list = 1;
     */
    openedStatueUidList: number[];
}
declare class StatueGadgetInfo$Type extends MessageType<StatueGadgetInfo> {
    constructor();
    create(value?: PartialMessage<StatueGadgetInfo>): StatueGadgetInfo;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StatueGadgetInfo): StatueGadgetInfo;
    internalBinaryWrite(message: StatueGadgetInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message StatueGadgetInfo
 */
export declare const StatueGadgetInfo: StatueGadgetInfo$Type;
export {};
