"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Birthday = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class Birthday$Type extends runtime_5.MessageType {
    constructor() {
        super("Birthday", [
            { no: 1, name: "month", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "day", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { month: 0, day: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 month */ 1:
                    message.month = reader.uint32();
                    break;
                case /* uint32 day */ 2:
                    message.day = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 month = 1; */
        if (message.month !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.month);
        /* uint32 day = 2; */
        if (message.day !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.day);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Birthday
 */
exports.Birthday = new Birthday$Type();
