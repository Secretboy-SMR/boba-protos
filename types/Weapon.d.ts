// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "Weapon.proto" (syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message Weapon
 */
export interface Weapon {
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
     * @generated from protobuf field: map<uint32, uint32> affix_map = 4;
     */
    affixMap: {
        [key: number]: number;
    };
}
declare class Weapon$Type extends MessageType<Weapon> {
    constructor();
    create(value?: PartialMessage<Weapon>): Weapon;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Weapon): Weapon;
    private binaryReadMap4;
    internalBinaryWrite(message: Weapon, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message Weapon
 */
export declare const Weapon: Weapon$Type;
export {};