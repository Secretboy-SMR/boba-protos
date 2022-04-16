// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "Reliquary.proto" (syntax proto3),// tslint:disable
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
// @generated message type with reflection information, may provide speed optimized methods
class Reliquary$Type extends MessageType {
    constructor() {
        super("Reliquary", [
            { no: 1, name: "level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "exp", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "promote_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "main_prop_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "append_prop_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { level: 0, exp: 0, promoteLevel: 0, mainPropId: 0, appendPropIdList: [] };
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
                case /* uint32 level */ 1:
                    message.level = reader.uint32();
                    break;
                case /* uint32 exp */ 2:
                    message.exp = reader.uint32();
                    break;
                case /* uint32 promote_level */ 3:
                    message.promoteLevel = reader.uint32();
                    break;
                case /* uint32 main_prop_id */ 4:
                    message.mainPropId = reader.uint32();
                    break;
                case /* repeated uint32 append_prop_id_list */ 5:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.appendPropIdList.push(reader.uint32());
                    else
                        message.appendPropIdList.push(reader.uint32());
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
        /* uint32 level = 1; */
        if (message.level !== 0)
            writer.tag(1, WireType.Varint).uint32(message.level);
        /* uint32 exp = 2; */
        if (message.exp !== 0)
            writer.tag(2, WireType.Varint).uint32(message.exp);
        /* uint32 promote_level = 3; */
        if (message.promoteLevel !== 0)
            writer.tag(3, WireType.Varint).uint32(message.promoteLevel);
        /* uint32 main_prop_id = 4; */
        if (message.mainPropId !== 0)
            writer.tag(4, WireType.Varint).uint32(message.mainPropId);
        /* repeated uint32 append_prop_id_list = 5; */
        if (message.appendPropIdList.length) {
            writer.tag(5, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.appendPropIdList.length; i++)
                writer.uint32(message.appendPropIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Reliquary
 */
export const Reliquary = new Reliquary$Type();
