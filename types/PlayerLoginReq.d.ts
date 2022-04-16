// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "PlayerLoginReq.proto" (syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { AdjustTrackingInfo } from "./AdjustTrackingInfo";
import { TrackingIOInfo } from "./TrackingIOInfo";
/**
 * @generated from protobuf message PlayerLoginReq
 */
export interface PlayerLoginReq {
    /**
     * @generated from protobuf field: string token = 1;
     */
    token: string;
    /**
     * @generated from protobuf field: string client_version = 2;
     */
    clientVersion: string;
    /**
     * @generated from protobuf field: string system_version = 3;
     */
    systemVersion: string;
    /**
     * @generated from protobuf field: string device_name = 4;
     */
    deviceName: string;
    /**
     * @generated from protobuf field: string device_uuid = 5;
     */
    deviceUuid: string;
    /**
     * @generated from protobuf field: uint32 target_uid = 6;
     */
    targetUid: number;
    /**
     * @generated from protobuf field: uint64 login_rand = 7;
     */
    loginRand: bigint;
    /**
     * @generated from protobuf field: bool is_editor = 8;
     */
    isEditor: boolean;
    /**
     * @generated from protobuf field: uint32 language_type = 9;
     */
    languageType: number;
    /**
     * @generated from protobuf field: uint32 account_type = 10;
     */
    accountType: number;
    /**
     * @generated from protobuf field: string account_uid = 11;
     */
    accountUid: string;
    /**
     * @generated from protobuf field: string platform = 12;
     */
    platform: string;
    /**
     * @generated from protobuf field: string device_info = 13;
     */
    deviceInfo: string;
    /**
     * @generated from protobuf field: uint32 platform_type = 14;
     */
    platformType: number;
    /**
     * @generated from protobuf field: bool is_guest = 15;
     */
    isGuest: boolean;
    /**
     * @generated from protobuf field: uint32 cloud_client_ip = 16;
     */
    cloudClientIp: number;
    /**
     * @generated from protobuf field: uint32 gm_uid = 17;
     */
    gmUid: number;
    /**
     * @generated from protobuf field: string checksum = 18;
     */
    checksum: string;
    /**
     * @generated from protobuf field: string online_id = 19;
     */
    onlineId: string;
    /**
     * @generated from protobuf field: uint32 client_token = 20;
     */
    clientToken: number;
    /**
     * @generated from protobuf field: bytes security_cmd_reply = 21;
     */
    securityCmdReply: Uint8Array;
    /**
     * @generated from protobuf field: bytes extra_bin_data = 22;
     */
    extraBinData: Uint8Array;
    /**
     * @generated from protobuf field: string cps = 23;
     */
    cps: string;
    /**
     * @generated from protobuf field: uint32 channel_id = 24;
     */
    channelId: number;
    /**
     * @generated from protobuf field: uint32 sub_channel_id = 25;
     */
    subChannelId: number;
    /**
     * @generated from protobuf field: string checksum_client_version = 26;
     */
    checksumClientVersion: string;
    /**
     * @generated from protobuf field: uint32 tag = 27;
     */
    tag: number;
    /**
     * @generated from protobuf field: TrackingIOInfo tracking_io_info = 28;
     */
    trackingIoInfo?: TrackingIOInfo;
    /**
     * @generated from protobuf field: string country_code = 29;
     */
    countryCode: string;
    /**
     * @generated from protobuf field: uint32 client_data_version = 30;
     */
    clientDataVersion: number;
    /**
     * @generated from protobuf field: bytes environment_error_code = 31;
     */
    environmentErrorCode: Uint8Array;
    /**
     * @generated from protobuf field: uint32 target_home_owner_uid = 32;
     */
    targetHomeOwnerUid: number;
    /**
     * @generated from protobuf field: string psn_id = 33;
     */
    psnId: string;
    /**
     * @generated from protobuf field: string client_verison_hash = 34;
     */
    clientVerisonHash: string;
    /**
     * @generated from protobuf field: bool is_transfer = 35;
     */
    isTransfer: boolean;
    /**
     * @generated from protobuf field: uint32 reg_platform = 36;
     */
    regPlatform: number;
    /**
     * @generated from protobuf field: uint32 target_home_param = 37;
     */
    targetHomeParam: number;
    /**
     * @generated from protobuf field: AdjustTrackingInfo adjust_tracking_info = 38;
     */
    adjustTrackingInfo?: AdjustTrackingInfo;
}
/**
 * @generated from protobuf enum PlayerLoginReq.CmdId
 */
export declare enum PlayerLoginReq_CmdId {
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 0;
     */
    ENET_CHANNEL_ID = 0,
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 0;
     */
    NONE = 0,
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ENET_IS_RELIABLE = 1,
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    IS_ALLOW_CLIENT = 1,
    /**
     * @generated from protobuf enum value: CMD_ID = 189;
     */
    CMD_ID = 189
}
declare class PlayerLoginReq$Type extends MessageType<PlayerLoginReq> {
    constructor();
    create(value?: PartialMessage<PlayerLoginReq>): PlayerLoginReq;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PlayerLoginReq): PlayerLoginReq;
    internalBinaryWrite(message: PlayerLoginReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message PlayerLoginReq
 */
export declare const PlayerLoginReq: PlayerLoginReq$Type;
export {};