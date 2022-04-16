// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "GetPlayerTokenRsp.proto" (syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message GetPlayerTokenRsp
 */
export interface GetPlayerTokenRsp {
    /**
     * @generated from protobuf field: int32 retcode = 1;
     */
    retcode: number;
    /**
     * @generated from protobuf field: string msg = 2;
     */
    msg: string;
    /**
     * @generated from protobuf field: uint32 uid = 3;
     */
    uid: number;
    /**
     * @generated from protobuf field: string token = 4;
     */
    token: string;
    /**
     * @generated from protobuf field: uint32 black_uid_end_time = 5;
     */
    blackUidEndTime: number;
    /**
     * @generated from protobuf field: uint32 account_type = 6;
     */
    accountType: number;
    /**
     * @generated from protobuf field: string account_uid = 7;
     */
    accountUid: string;
    /**
     * @generated from protobuf field: bool is_proficient_player = 8;
     */
    isProficientPlayer: boolean;
    /**
     * @generated from protobuf field: string secret_key = 9;
     */
    secretKey: string;
    /**
     * @generated from protobuf field: uint32 gm_uid = 10;
     */
    gmUid: number;
    /**
     * @generated from protobuf field: uint64 secret_key_seed = 11;
     */
    secretKeySeed: bigint;
    /**
     * @generated from protobuf field: bytes security_cmd_buffer = 12;
     */
    securityCmdBuffer: Uint8Array;
    /**
     * @generated from protobuf field: uint32 platform_type = 13;
     */
    platformType: number;
    /**
     * @generated from protobuf field: bytes extra_bin_data = 14;
     */
    extraBinData: Uint8Array;
    /**
     * @generated from protobuf field: bool is_guest = 15;
     */
    isGuest: boolean;
    /**
     * @generated from protobuf field: uint32 channel_id = 16;
     */
    channelId: number;
    /**
     * @generated from protobuf field: uint32 sub_channel_id = 17;
     */
    subChannelId: number;
    /**
     * @generated from protobuf field: uint32 tag = 18;
     */
    tag: number;
    /**
     * @generated from protobuf field: string country_code = 19;
     */
    countryCode: string;
    /**
     * @generated from protobuf field: bool is_login_white_list = 20;
     */
    isLoginWhiteList: boolean;
    /**
     * @generated from protobuf field: string psn_id = 21;
     */
    psnId: string;
    /**
     * @generated from protobuf field: string client_version_random_key = 22;
     */
    clientVersionRandomKey: string;
    /**
     * @generated from protobuf field: uint32 reg_platform = 23;
     */
    regPlatform: number;
    /**
     * @generated from protobuf field: string client_ip_str = 24;
     */
    clientIpStr: string;
}
/**
 * @generated from protobuf enum GetPlayerTokenRsp.CmdId
 */
export declare enum GetPlayerTokenRsp_CmdId {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    NONE = 0,
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ENET_CHANNEL_ID = 0,
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ENET_IS_RELIABLE = 1,
    /**
     * @generated from protobuf enum value: CMD_ID = 118;
     */
    CMD_ID = 118
}
declare class GetPlayerTokenRsp$Type extends MessageType<GetPlayerTokenRsp> {
    constructor();
    create(value?: PartialMessage<GetPlayerTokenRsp>): GetPlayerTokenRsp;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetPlayerTokenRsp): GetPlayerTokenRsp;
    internalBinaryWrite(message: GetPlayerTokenRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message GetPlayerTokenRsp
 */
export declare const GetPlayerTokenRsp: GetPlayerTokenRsp$Type;
export {};