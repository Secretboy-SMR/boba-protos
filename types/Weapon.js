"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weapon = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class Weapon$Type extends runtime_5.MessageType {
    constructor() {
        super("Weapon", [
            { no: 1, name: "level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "exp", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "promote_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "affix_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { level: 0, exp: 0, promoteLevel: 0, affixMap: {} };
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
                case /* uint32 level */ 1:
                    message.level = reader.uint32();
                    break;
                case /* uint32 exp */ 2:
                    message.exp = reader.uint32();
                    break;
                case /* uint32 promote_level */ 3:
                    message.promoteLevel = reader.uint32();
                    break;
                case /* map<uint32, uint32> affix_map */ 4:
                    this.binaryReadMap4(message.affixMap, reader, options);
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
    binaryReadMap4(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field Weapon.affix_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 level = 1; */
        if (message.level !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.level);
        /* uint32 exp = 2; */
        if (message.exp !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.exp);
        /* uint32 promote_level = 3; */
        if (message.promoteLevel !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.promoteLevel);
        /* map<uint32, uint32> affix_map = 4; */
        for (let k of Object.keys(message.affixMap))
            writer.tag(4, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.affixMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Weapon
 */
exports.Weapon = new Weapon$Type();
