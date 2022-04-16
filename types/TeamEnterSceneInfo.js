// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "TeamEnterSceneInfo.proto" (syntax proto3),// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { AbilityControlBlock } from "./AbilityControlBlock";
import { AbilitySyncStateInfo } from "./AbilitySyncStateInfo";
// @generated message type with reflection information, may provide speed optimized methods
class TeamEnterSceneInfo$Type extends MessageType {
    constructor() {
        super("TeamEnterSceneInfo", [
            { no: 1, name: "team_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "team_ability_info", kind: "message", T: () => AbilitySyncStateInfo },
            { no: 3, name: "ability_control_block", kind: "message", T: () => AbilityControlBlock }
        ]);
    }
    create(value) {
        const message = { teamEntityId: 0 };
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
                case /* uint32 team_entity_id */ 1:
                    message.teamEntityId = reader.uint32();
                    break;
                case /* AbilitySyncStateInfo team_ability_info */ 2:
                    message.teamAbilityInfo = AbilitySyncStateInfo.internalBinaryRead(reader, reader.uint32(), options, message.teamAbilityInfo);
                    break;
                case /* AbilityControlBlock ability_control_block */ 3:
                    message.abilityControlBlock = AbilityControlBlock.internalBinaryRead(reader, reader.uint32(), options, message.abilityControlBlock);
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
        /* uint32 team_entity_id = 1; */
        if (message.teamEntityId !== 0)
            writer.tag(1, WireType.Varint).uint32(message.teamEntityId);
        /* AbilitySyncStateInfo team_ability_info = 2; */
        if (message.teamAbilityInfo)
            AbilitySyncStateInfo.internalBinaryWrite(message.teamAbilityInfo, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* AbilityControlBlock ability_control_block = 3; */
        if (message.abilityControlBlock)
            AbilityControlBlock.internalBinaryWrite(message.abilityControlBlock, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TeamEnterSceneInfo
 */
export const TeamEnterSceneInfo = new TeamEnterSceneInfo$Type();