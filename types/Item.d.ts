// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "Item.proto" (syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Furniture } from "./Furniture";
import { Equip } from "./Equip";
import { Material } from "./Material";
/**
 * @generated from protobuf message Item
 */
export interface Item {
    /**
     * @generated from protobuf oneof: Detail
     */
    detail: {
        oneofKind: "material";
        /**
         * @generated from protobuf field: Material material = 5;
         */
        material: Material;
    } | {
        oneofKind: "equip";
        /**
         * @generated from protobuf field: Equip equip = 6;
         */
        equip: Equip;
    } | {
        oneofKind: "furniture";
        /**
         * @generated from protobuf field: Furniture furniture = 7;
         */
        furniture: Furniture;
    } | {
        oneofKind: undefined;
    };
    /**
     * @generated from protobuf field: uint32 item_id = 1;
     */
    itemId: number;
    /**
     * @generated from protobuf field: uint64 guid = 2;
     */
    guid: bigint;
}
declare class Item$Type extends MessageType<Item> {
    constructor();
    create(value?: PartialMessage<Item>): Item;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Item): Item;
    internalBinaryWrite(message: Item, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message Item
 */
export declare const Item: Item$Type;
export {};
