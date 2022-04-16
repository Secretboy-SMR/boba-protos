"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResVersionConfig = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ResVersionConfig$Type extends runtime_5.MessageType {
    constructor() {
        super("ResVersionConfig", [
            { no: 1, name: "version", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "relogin", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "md5", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "release_total_size", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "version_suffix", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "branch", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "next_script_version", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { version: 0, relogin: false, md5: "", releaseTotalSize: "", versionSuffix: "", branch: "", nextScriptVersion: "" };
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
                case /* uint32 version */ 1:
                    message.version = reader.uint32();
                    break;
                case /* bool relogin */ 2:
                    message.relogin = reader.bool();
                    break;
                case /* string md5 */ 3:
                    message.md5 = reader.string();
                    break;
                case /* string release_total_size */ 4:
                    message.releaseTotalSize = reader.string();
                    break;
                case /* string version_suffix */ 5:
                    message.versionSuffix = reader.string();
                    break;
                case /* string branch */ 6:
                    message.branch = reader.string();
                    break;
                case /* string next_script_version */ 7:
                    message.nextScriptVersion = reader.string();
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
        /* uint32 version = 1; */
        if (message.version !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.version);
        /* bool relogin = 2; */
        if (message.relogin !== false)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.relogin);
        /* string md5 = 3; */
        if (message.md5 !== "")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.md5);
        /* string release_total_size = 4; */
        if (message.releaseTotalSize !== "")
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.releaseTotalSize);
        /* string version_suffix = 5; */
        if (message.versionSuffix !== "")
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.versionSuffix);
        /* string branch = 6; */
        if (message.branch !== "")
            writer.tag(6, runtime_1.WireType.LengthDelimited).string(message.branch);
        /* string next_script_version = 7; */
        if (message.nextScriptVersion !== "")
            writer.tag(7, runtime_1.WireType.LengthDelimited).string(message.nextScriptVersion);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ResVersionConfig
 */
exports.ResVersionConfig = new ResVersionConfig$Type();
