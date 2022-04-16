// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "BuildingInfo.proto" (syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message BuildingInfo
 */
export interface BuildingInfo {
    /**
     * @generated from protobuf field: uint32 building_id = 1;
     */
    buildingId: number;
    /**
     * @generated from protobuf field: uint32 point_config_id = 2;
     */
    pointConfigId: number;
    /**
     * @generated from protobuf field: uint32 cost = 3;
     */
    cost: number;
    /**
     * @generated from protobuf field: uint32 level = 4;
     */
    level: number;
    /**
     * @generated from protobuf field: uint32 refund = 5;
     */
    refund: number;
    /**
     * @generated from protobuf field: uint32 owner_uid = 6;
     */
    ownerUid: number;
}
declare class BuildingInfo$Type extends MessageType<BuildingInfo> {
    constructor();
    create(value?: PartialMessage<BuildingInfo>): BuildingInfo;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BuildingInfo): BuildingInfo;
    internalBinaryWrite(message: BuildingInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message BuildingInfo
 */
export declare const BuildingInfo: BuildingInfo$Type;
export {};