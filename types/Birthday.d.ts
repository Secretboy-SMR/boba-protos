// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "Birthday.proto" (syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message Birthday
 */
export interface Birthday {
    /**
     * @generated from protobuf field: uint32 month = 1;
     */
    month: number;
    /**
     * @generated from protobuf field: uint32 day = 2;
     */
    day: number;
}
declare class Birthday$Type extends MessageType<Birthday> {
    constructor();
    create(value?: PartialMessage<Birthday>): Birthday;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Birthday): Birthday;
    internalBinaryWrite(message: Birthday, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message Birthday
 */
export declare const Birthday: Birthday$Type;
export {};
