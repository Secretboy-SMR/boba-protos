// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "FoundationInfo.proto" (syntax proto3),// tslint:disable
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { BuildingInfo } from "./BuildingInfo";
import { FoundationStatus } from "./FoundationStatus";
// @generated message type with reflection information, may provide speed optimized methods
class FoundationInfo$Type extends MessageType {
    constructor() {
        super("FoundationInfo", [
            { no: 1, name: "status", kind: "enum", T: () => ["FoundationStatus", FoundationStatus] },
            { no: 2, name: "uid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "current_building_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "begin_build_time_ms", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "demolition_refund", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "building_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => BuildingInfo },
            { no: 7, name: "current_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "max_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "locked_by_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { status: 0, uidList: [], currentBuildingId: 0, beginBuildTimeMs: 0n, demolitionRefund: 0, buildingList: [], currentNum: 0, maxNum: 0, lockedByUid: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* FoundationStatus status */ 1:
                    message.status = reader.int32();
                    break;
                case /* repeated uint32 uid_list */ 2:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.uidList.push(reader.uint32());
                    else
                        message.uidList.push(reader.uint32());
                    break;
                case /* uint32 current_building_id */ 3:
                    message.currentBuildingId = reader.uint32();
                    break;
                case /* uint64 begin_build_time_ms */ 4:
                    message.beginBuildTimeMs = reader.uint64().toBigInt();
                    break;
                case /* uint32 demolition_refund */ 5:
                    message.demolitionRefund = reader.uint32();
                    break;
                case /* repeated BuildingInfo building_list */ 6:
                    message.buildingList.push(BuildingInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 current_num */ 7:
                    message.currentNum = reader.uint32();
                    break;
                case /* uint32 max_num */ 8:
                    message.maxNum = reader.uint32();
                    break;
                case /* uint32 locked_by_uid */ 9:
                    message.lockedByUid = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* FoundationStatus status = 1; */
        if (message.status !== 0)
            writer.tag(1, WireType.Varint).int32(message.status);
        /* repeated uint32 uid_list = 2; */
        if (message.uidList.length) {
            writer.tag(2, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.uidList.length; i++)
                writer.uint32(message.uidList[i]);
            writer.join();
        }
        /* uint32 current_building_id = 3; */
        if (message.currentBuildingId !== 0)
            writer.tag(3, WireType.Varint).uint32(message.currentBuildingId);
        /* uint64 begin_build_time_ms = 4; */
        if (message.beginBuildTimeMs !== 0n)
            writer.tag(4, WireType.Varint).uint64(message.beginBuildTimeMs);
        /* uint32 demolition_refund = 5; */
        if (message.demolitionRefund !== 0)
            writer.tag(5, WireType.Varint).uint32(message.demolitionRefund);
        /* repeated BuildingInfo building_list = 6; */
        for (let i = 0; i < message.buildingList.length; i++)
            BuildingInfo.internalBinaryWrite(message.buildingList[i], writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* uint32 current_num = 7; */
        if (message.currentNum !== 0)
            writer.tag(7, WireType.Varint).uint32(message.currentNum);
        /* uint32 max_num = 8; */
        if (message.maxNum !== 0)
            writer.tag(8, WireType.Varint).uint32(message.maxNum);
        /* uint32 locked_by_uid = 9; */
        if (message.lockedByUid !== 0)
            writer.tag(9, WireType.Varint).uint32(message.lockedByUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FoundationInfo
 */
export const FoundationInfo = new FoundationInfo$Type();
