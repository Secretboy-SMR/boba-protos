// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "SceneEntityAiInfo.proto" (syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { ServantInfo } from "./ServantInfo";
import { Vector } from "./Vector";
/**
 * @generated from protobuf message SceneEntityAiInfo
 */
export interface SceneEntityAiInfo {
    /**
     * @generated from protobuf field: bool is_ai_open = 1;
     */
    isAiOpen: boolean;
    /**
     * @generated from protobuf field: Vector born_pos = 2;
     */
    bornPos?: Vector;
    /**
     * @generated from protobuf field: map<uint32, uint32> skill_cd_map = 3;
     */
    skillCdMap: {
        [key: number]: number;
    };
    /**
     * @generated from protobuf field: ServantInfo servant_info = 4;
     */
    servantInfo?: ServantInfo;
    /**
     * @generated from protobuf field: map<uint32, uint32> ai_threat_map = 5;
     */
    aiThreatMap: {
        [key: number]: number;
    };
    /**
     * @generated from protobuf field: map<uint32, uint32> skill_group_cd_map = 6;
     */
    skillGroupCdMap: {
        [key: number]: number;
    };
    /**
     * @generated from protobuf field: uint32 cur_tactic = 7;
     */
    curTactic: number;
}
declare class SceneEntityAiInfo$Type extends MessageType<SceneEntityAiInfo> {
    constructor();
    create(value?: PartialMessage<SceneEntityAiInfo>): SceneEntityAiInfo;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SceneEntityAiInfo): SceneEntityAiInfo;
    private binaryReadMap3;
    private binaryReadMap5;
    private binaryReadMap6;
    internalBinaryWrite(message: SceneEntityAiInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message SceneEntityAiInfo
 */
export declare const SceneEntityAiInfo: SceneEntityAiInfo$Type;
export {};