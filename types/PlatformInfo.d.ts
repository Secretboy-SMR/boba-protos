// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "PlatformInfo.proto" (syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Route } from "./Route";
import { MovingPlatformType } from "./MovingPlatformType";
import { MathQuaternion } from "./MathQuaternion";
import { Vector } from "./Vector";
/**
 * @generated from protobuf message PlatformInfo
 */
export interface PlatformInfo {
    /**
     * @generated from protobuf field: uint32 route_id = 1;
     */
    routeId: number;
    /**
     * @generated from protobuf field: int32 start_index = 2;
     */
    startIndex: number;
    /**
     * @generated from protobuf field: uint32 start_route_time = 3;
     */
    startRouteTime: number;
    /**
     * @generated from protobuf field: uint32 start_scene_time = 4;
     */
    startSceneTime: number;
    /**
     * @generated from protobuf field: Vector start_pos = 7;
     */
    startPos?: Vector;
    /**
     * @generated from protobuf field: bool is_started = 8;
     */
    isStarted: boolean;
    /**
     * @generated from protobuf field: MathQuaternion start_rot = 9;
     */
    startRot?: MathQuaternion;
    /**
     * @generated from protobuf field: uint32 stop_scene_time = 10;
     */
    stopSceneTime: number;
    /**
     * @generated from protobuf field: Vector pos_offset = 11;
     */
    posOffset?: Vector;
    /**
     * @generated from protobuf field: MathQuaternion rot_offset = 12;
     */
    rotOffset?: MathQuaternion;
    /**
     * @generated from protobuf field: MovingPlatformType moving_platform_type = 13;
     */
    movingPlatformType: MovingPlatformType;
    /**
     * @generated from protobuf field: bool is_active = 14;
     */
    isActive: boolean;
    /**
     * @generated from protobuf field: Route route = 15;
     */
    route?: Route;
    /**
     * @generated from protobuf field: uint32 point_id = 16;
     */
    pointId: number;
}
declare class PlatformInfo$Type extends MessageType<PlatformInfo> {
    constructor();
    create(value?: PartialMessage<PlatformInfo>): PlatformInfo;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PlatformInfo): PlatformInfo;
    internalBinaryWrite(message: PlatformInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message PlatformInfo
 */
export declare const PlatformInfo: PlatformInfo$Type;
export {};
