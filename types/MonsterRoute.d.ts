// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "MonsterRoute.proto" (syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { RoutePoint } from "./RoutePoint";
/**
 * @generated from protobuf message MonsterRoute
 */
export interface MonsterRoute {
    /**
     * @generated from protobuf field: repeated RoutePoint route_points = 1;
     */
    routePoints: RoutePoint[];
    /**
     * @generated from protobuf field: uint32 speed_level = 2;
     */
    speedLevel: number;
    /**
     * @generated from protobuf field: uint32 route_type = 3;
     */
    routeType: number;
    /**
     * @generated from protobuf field: float arrive_range = 4;
     */
    arriveRange: number;
}
declare class MonsterRoute$Type extends MessageType<MonsterRoute> {
    constructor();
    create(value?: PartialMessage<MonsterRoute>): MonsterRoute;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MonsterRoute): MonsterRoute;
    internalBinaryWrite(message: MonsterRoute, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message MonsterRoute
 */
export declare const MonsterRoute: MonsterRoute$Type;
export {};