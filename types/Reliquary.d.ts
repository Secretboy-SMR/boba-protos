// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "Reliquary.proto" (syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message Reliquary
 */
export interface Reliquary {
    /**
     * @generated from protobuf field: uint32 level = 1;
     */
    level: number;
    /**
     * @generated from protobuf field: uint32 exp = 2;
     */
    exp: number;
    /**
     * @generated from protobuf field: uint32 promote_level = 3;
     */
    promoteLevel: number;
    /**
     * @generated from protobuf field: uint32 main_prop_id = 4;
     */
    mainPropId: number;
    /**
     * @generated from protobuf field: repeated uint32 append_prop_id_list = 5;
     */
    appendPropIdList: number[];
}
declare class Reliquary$Type extends MessageType<Reliquary> {
    constructor();
    create(value?: PartialMessage<Reliquary>): Reliquary;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Reliquary): Reliquary;
    internalBinaryWrite(message: Reliquary, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message Reliquary
 */
export declare const Reliquary: Reliquary$Type;
export {};