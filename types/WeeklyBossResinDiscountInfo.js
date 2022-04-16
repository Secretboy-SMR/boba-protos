"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeeklyBossResinDiscountInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class WeeklyBossResinDiscountInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("WeeklyBossResinDiscountInfo", [
            { no: 1, name: "discount_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "discount_num_limit", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "resin_cost", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "original_resin_cost", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { discountNum: 0, discountNumLimit: 0, resinCost: 0, originalResinCost: 0 };
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
                case /* uint32 discount_num */ 1:
                    message.discountNum = reader.uint32();
                    break;
                case /* uint32 discount_num_limit */ 2:
                    message.discountNumLimit = reader.uint32();
                    break;
                case /* uint32 resin_cost */ 3:
                    message.resinCost = reader.uint32();
                    break;
                case /* uint32 original_resin_cost */ 4:
                    message.originalResinCost = reader.uint32();
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
        /* uint32 discount_num = 1; */
        if (message.discountNum !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.discountNum);
        /* uint32 discount_num_limit = 2; */
        if (message.discountNumLimit !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.discountNumLimit);
        /* uint32 resin_cost = 3; */
        if (message.resinCost !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.resinCost);
        /* uint32 original_resin_cost = 4; */
        if (message.originalResinCost !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.originalResinCost);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WeeklyBossResinDiscountInfo
 */
exports.WeeklyBossResinDiscountInfo = new WeeklyBossResinDiscountInfo$Type();
