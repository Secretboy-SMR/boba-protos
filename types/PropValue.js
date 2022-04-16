// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "PropValue.proto" (syntax proto3),// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
// @generated message type with reflection information, may provide speed optimized methods
class PropValue$Type extends MessageType {
    constructor() {
        super("PropValue", [
            { no: 2, name: "ival", kind: "scalar", oneof: "value", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "fval", kind: "scalar", oneof: "value", T: 2 /*ScalarType.FLOAT*/ },
            { no: 1, name: "type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "val", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { value: { oneofKind: undefined }, type: 0, val: 0n };
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
                case /* int64 ival */ 2:
                    message.value = {
                        oneofKind: "ival",
                        ival: reader.int64().toBigInt()
                    };
                    break;
                case /* float fval */ 3:
                    message.value = {
                        oneofKind: "fval",
                        fval: reader.float()
                    };
                    break;
                case /* uint32 type */ 1:
                    message.type = reader.uint32();
                    break;
                case /* int64 val */ 4:
                    message.val = reader.int64().toBigInt();
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
        /* int64 ival = 2; */
        if (message.value.oneofKind === "ival")
            writer.tag(2, WireType.Varint).int64(message.value.ival);
        /* float fval = 3; */
        if (message.value.oneofKind === "fval")
            writer.tag(3, WireType.Bit32).float(message.value.fval);
        /* uint32 type = 1; */
        if (message.type !== 0)
            writer.tag(1, WireType.Varint).uint32(message.type);
        /* int64 val = 4; */
        if (message.val !== 0n)
            writer.tag(4, WireType.Varint).int64(message.val);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PropValue
 */
export const PropValue = new PropValue$Type();