// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "ServantInfo.proto" (syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message ServantInfo
 */
export interface ServantInfo {
    /**
     * @generated from protobuf field: uint32 master_entity_id = 1;
     */
    masterEntityId: number;
    /**
     * @generated from protobuf field: uint32 born_slot_index = 2;
     */
    bornSlotIndex: number;
}
declare class ServantInfo$Type extends MessageType<ServantInfo> {
    constructor();
    create(value?: PartialMessage<ServantInfo>): ServantInfo;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ServantInfo): ServantInfo;
    internalBinaryWrite(message: ServantInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ServantInfo
 */
export declare const ServantInfo: ServantInfo$Type;
export {};
