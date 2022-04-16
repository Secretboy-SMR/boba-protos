// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "FishPoolInfo.proto" (syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message FishPoolInfo
 */
export interface FishPoolInfo {
    /**
     * @generated from protobuf field: uint32 pool_id = 1;
     */
    poolId: number;
    /**
     * @generated from protobuf field: repeated uint32 fish_area_list = 2;
     */
    fishAreaList: number[];
    /**
     * @generated from protobuf field: uint32 today_fish_num = 3;
     */
    todayFishNum: number;
}
declare class FishPoolInfo$Type extends MessageType<FishPoolInfo> {
    constructor();
    create(value?: PartialMessage<FishPoolInfo>): FishPoolInfo;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FishPoolInfo): FishPoolInfo;
    internalBinaryWrite(message: FishPoolInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message FishPoolInfo
 */
export declare const FishPoolInfo: FishPoolInfo$Type;
export {};