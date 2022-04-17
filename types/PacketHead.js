"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacketHead = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class PacketHead$Type extends runtime_5.MessageType {
    constructor() {
        super("PacketHead", [
            { no: 1, name: "packet_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "rpc_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "client_sequence_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "enet_channel_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "enet_is_reliable", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "sent_ms", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 11, name: "user_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "user_ip", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "user_session_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 21, name: "recv_time_ms", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 22, name: "rpc_begin_time_ms", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 23, name: "ext_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 24, name: "sender_app_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 31, name: "source_service", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 32, name: "target_service", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 33, name: "service_app_id_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 34, name: "is_set_game_thread", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 35, name: "game_thread_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { packetId: 0, rpcId: 0, clientSequenceId: 0, enetChannelId: 0, enetIsReliable: 0, sentMs: 0n, userId: 0, userIp: 0, userSessionId: 0, recvTimeMs: 0n, rpcBeginTimeMs: 0, extMap: {}, senderAppId: 0, sourceService: 0, targetService: 0, serviceAppIdMap: {}, isSetGameThread: false, gameThreadIndex: 0 };
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
                case /* uint32 packet_id */ 1:
                    message.packetId = reader.uint32();
                    break;
                case /* uint32 rpc_id */ 2:
                    message.rpcId = reader.uint32();
                    break;
                case /* uint32 client_sequence_id */ 3:
                    message.clientSequenceId = reader.uint32();
                    break;
                case /* uint32 enet_channel_id */ 4:
                    message.enetChannelId = reader.uint32();
                    break;
                case /* uint32 enet_is_reliable */ 5:
                    message.enetIsReliable = reader.uint32();
                    break;
                case /* uint64 sent_ms */ 6:
                    message.sentMs = reader.uint64().toBigInt();
                    break;
                case /* uint32 user_id */ 11:
                    message.userId = reader.uint32();
                    break;
                case /* uint32 user_ip */ 12:
                    message.userIp = reader.uint32();
                    break;
                case /* uint32 user_session_id */ 13:
                    message.userSessionId = reader.uint32();
                    break;
                case /* uint64 recv_time_ms */ 21:
                    message.recvTimeMs = reader.uint64().toBigInt();
                    break;
                case /* uint32 rpc_begin_time_ms */ 22:
                    message.rpcBeginTimeMs = reader.uint32();
                    break;
                case /* map<uint32, uint32> ext_map */ 23:
                    this.binaryReadMap23(message.extMap, reader, options);
                    break;
                case /* uint32 sender_app_id */ 24:
                    message.senderAppId = reader.uint32();
                    break;
                case /* uint32 source_service */ 31:
                    message.sourceService = reader.uint32();
                    break;
                case /* uint32 target_service */ 32:
                    message.targetService = reader.uint32();
                    break;
                case /* map<uint32, uint32> service_app_id_map */ 33:
                    this.binaryReadMap33(message.serviceAppIdMap, reader, options);
                    break;
                case /* bool is_set_game_thread */ 34:
                    message.isSetGameThread = reader.bool();
                    break;
                case /* uint32 game_thread_index */ 35:
                    message.gameThreadIndex = reader.uint32();
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
    binaryReadMap23(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field PacketHead.ext_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    binaryReadMap33(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field PacketHead.service_app_id_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 packet_id = 1; */
        if (message.packetId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.packetId);
        /* uint32 rpc_id = 2; */
        if (message.rpcId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.rpcId);
        /* uint32 client_sequence_id = 3; */
        if (message.clientSequenceId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.clientSequenceId);
        /* uint32 enet_channel_id = 4; */
        if (message.enetChannelId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.enetChannelId);
        /* uint32 enet_is_reliable = 5; */
        if (message.enetIsReliable !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.enetIsReliable);
        /* uint64 sent_ms = 6; */
        if (message.sentMs !== 0n)
            writer.tag(6, runtime_1.WireType.Varint).uint64(message.sentMs);
        /* uint32 user_id = 11; */
        if (message.userId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.userId);
        /* uint32 user_ip = 12; */
        if (message.userIp !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.userIp);
        /* uint32 user_session_id = 13; */
        if (message.userSessionId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.userSessionId);
        /* uint64 recv_time_ms = 21; */
        if (message.recvTimeMs !== 0n)
            writer.tag(21, runtime_1.WireType.Varint).uint64(message.recvTimeMs);
        /* uint32 rpc_begin_time_ms = 22; */
        if (message.rpcBeginTimeMs !== 0)
            writer.tag(22, runtime_1.WireType.Varint).uint32(message.rpcBeginTimeMs);
        /* map<uint32, uint32> ext_map = 23; */
        for (let k of Object.keys(message.extMap))
            writer.tag(23, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.extMap[k]).join();
        /* uint32 sender_app_id = 24; */
        if (message.senderAppId !== 0)
            writer.tag(24, runtime_1.WireType.Varint).uint32(message.senderAppId);
        /* uint32 source_service = 31; */
        if (message.sourceService !== 0)
            writer.tag(31, runtime_1.WireType.Varint).uint32(message.sourceService);
        /* uint32 target_service = 32; */
        if (message.targetService !== 0)
            writer.tag(32, runtime_1.WireType.Varint).uint32(message.targetService);
        /* map<uint32, uint32> service_app_id_map = 33; */
        for (let k of Object.keys(message.serviceAppIdMap))
            writer.tag(33, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.serviceAppIdMap[k]).join();
        /* bool is_set_game_thread = 34; */
        if (message.isSetGameThread !== false)
            writer.tag(34, runtime_1.WireType.Varint).bool(message.isSetGameThread);
        /* uint32 game_thread_index = 35; */
        if (message.gameThreadIndex !== 0)
            writer.tag(35, runtime_1.WireType.Varint).uint32(message.gameThreadIndex);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PacketHead
 */
exports.PacketHead = new PacketHead$Type();
