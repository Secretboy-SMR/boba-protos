// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "RoutePoint.proto" (syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { MathQuaternion } from "./MathQuaternion";
import { Vector } from "./Vector";
/**
 * @generated from protobuf message RoutePoint
 */
export interface RoutePoint {
    /**
     * @generated from protobuf oneof: MoveParams
     */
    moveParams: {
        oneofKind: "velocity";
        /**
         * @generated from protobuf field: float velocity = 11;
         */
        velocity: number;
    } | {
        oneofKind: "time";
        /**
         * @generated from protobuf field: float time = 12;
         */
        time: number;
    } | {
        oneofKind: undefined;
    };
    /**
     * @generated from protobuf oneof: RotateParams
     */
    rotateParams: {
        oneofKind: "rotation";
        /**
         * @generated from protobuf field: Vector rotation = 21;
         */
        rotation: Vector;
    } | {
        oneofKind: "rotationSpeed";
        /**
         * @generated from protobuf field: MathQuaternion rotation_speed = 22;
         */
        rotationSpeed: MathQuaternion;
    } | {
        oneofKind: "axisSpeed";
        /**
         * @generated from protobuf field: MathQuaternion axis_speed = 23;
         */
        axisSpeed: MathQuaternion;
    } | {
        oneofKind: undefined;
    };
    /**
     * @generated from protobuf field: Vector position = 1;
     */
    position?: Vector;
    /**
     * @generated from protobuf field: float arrive_range = 2;
     */
    arriveRange: number;
}
declare class RoutePoint$Type extends MessageType<RoutePoint> {
    constructor();
    create(value?: PartialMessage<RoutePoint>): RoutePoint;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RoutePoint): RoutePoint;
    internalBinaryWrite(message: RoutePoint, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message RoutePoint
 */
export declare const RoutePoint: RoutePoint$Type;
export {};