// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "PlayerGameTimeNotify.proto" (syntax proto3),// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf enum PlayerGameTimeNotify.CmdId
 */
export var PlayerGameTimeNotify_CmdId;
(function (PlayerGameTimeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 0;
     */
    PlayerGameTimeNotify_CmdId[PlayerGameTimeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 0;
     */
    PlayerGameTimeNotify_CmdId[PlayerGameTimeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerGameTimeNotify_CmdId[PlayerGameTimeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerGameTimeNotify_CmdId[PlayerGameTimeNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
    /**
     * @generated from protobuf enum value: CMD_ID = 112;
     */
    PlayerGameTimeNotify_CmdId[PlayerGameTimeNotify_CmdId["CMD_ID"] = 112] = "CMD_ID";
})(PlayerGameTimeNotify_CmdId || (PlayerGameTimeNotify_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class PlayerGameTimeNotify$Type extends MessageType {
    constructor() {
        super("PlayerGameTimeNotify", [
            { no: 1, name: "game_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "is_home", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { gameTime: 0, uid: 0, isHome: false };
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
                case /* uint32 game_time */ 1:
                    message.gameTime = reader.uint32();
                    break;
                case /* uint32 uid */ 2:
                    message.uid = reader.uint32();
                    break;
                case /* bool is_home */ 3:
                    message.isHome = reader.bool();
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
        /* uint32 game_time = 1; */
        if (message.gameTime !== 0)
            writer.tag(1, WireType.Varint).uint32(message.gameTime);
        /* uint32 uid = 2; */
        if (message.uid !== 0)
            writer.tag(2, WireType.Varint).uint32(message.uid);
        /* bool is_home = 3; */
        if (message.isHome !== false)
            writer.tag(3, WireType.Varint).bool(message.isHome);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerGameTimeNotify
 */
export const PlayerGameTimeNotify = new PlayerGameTimeNotify$Type();
