// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "FoundationInfo.proto" (syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { BuildingInfo } from "./BuildingInfo";
import { FoundationStatus } from "./FoundationStatus";
/**
 * @generated from protobuf message FoundationInfo
 */
export interface FoundationInfo {
    /**
     * @generated from protobuf field: FoundationStatus status = 1;
     */
    status: FoundationStatus;
    /**
     * @generated from protobuf field: repeated uint32 uid_list = 2;
     */
    uidList: number[];
    /**
     * @generated from protobuf field: uint32 current_building_id = 3;
     */
    currentBuildingId: number;
    /**
     * @generated from protobuf field: uint64 begin_build_time_ms = 4;
     */
    beginBuildTimeMs: bigint;
    /**
     * @generated from protobuf field: uint32 demolition_refund = 5;
     */
    demolitionRefund: number;
    /**
     * @generated from protobuf field: repeated BuildingInfo building_list = 6;
     */
    buildingList: BuildingInfo[];
    /**
     * @generated from protobuf field: uint32 current_num = 7;
     */
    currentNum: number;
    /**
     * @generated from protobuf field: uint32 max_num = 8;
     */
    maxNum: number;
    /**
     * @generated from protobuf field: uint32 locked_by_uid = 9;
     */
    lockedByUid: number;
}
declare class FoundationInfo$Type extends MessageType<FoundationInfo> {
    constructor();
    create(value?: PartialMessage<FoundationInfo>): FoundationInfo;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FoundationInfo): FoundationInfo;
    internalBinaryWrite(message: FoundationInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message FoundationInfo
 */
export declare const FoundationInfo: FoundationInfo$Type;
export {};
