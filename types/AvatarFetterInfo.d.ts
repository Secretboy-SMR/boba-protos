// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "AvatarFetterInfo.proto" (syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { FetterData } from "./FetterData";
/**
 * @generated from protobuf message AvatarFetterInfo
 */
export interface AvatarFetterInfo {
    /**
     * @generated from protobuf field: uint32 exp_number = 1;
     */
    expNumber: number;
    /**
     * @generated from protobuf field: uint32 exp_level = 2;
     */
    expLevel: number;
    /**
     * @generated from protobuf field: repeated uint32 open_id_list = 3;
     */
    openIdList: number[];
    /**
     * @generated from protobuf field: repeated uint32 finish_id_list = 4;
     */
    finishIdList: number[];
    /**
     * @generated from protobuf field: repeated uint32 rewarded_fetter_level_list = 5;
     */
    rewardedFetterLevelList: number[];
    /**
     * @generated from protobuf field: repeated FetterData fetter_list = 6;
     */
    fetterList: FetterData[];
}
declare class AvatarFetterInfo$Type extends MessageType<AvatarFetterInfo> {
    constructor();
    create(value?: PartialMessage<AvatarFetterInfo>): AvatarFetterInfo;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AvatarFetterInfo): AvatarFetterInfo;
    internalBinaryWrite(message: AvatarFetterInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message AvatarFetterInfo
 */
export declare const AvatarFetterInfo: AvatarFetterInfo$Type;
export {};
