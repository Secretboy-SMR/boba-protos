// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "AbilitySyncStateInfo.proto" (syntax proto3),// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { AbilityMixinRecoverInfo } from "./AbilityMixinRecoverInfo";
import { AbilityAppliedModifier } from "./AbilityAppliedModifier";
import { AbilityAppliedAbility } from "./AbilityAppliedAbility";
import { AbilityScalarValueEntry } from "./AbilityScalarValueEntry";
// @generated message type with reflection information, may provide speed optimized methods
class AbilitySyncStateInfo$Type extends MessageType {
    constructor() {
        super("AbilitySyncStateInfo", [
            { no: 1, name: "is_inited", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "dynamic_value_map", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AbilityScalarValueEntry },
            { no: 3, name: "applied_abilities", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AbilityAppliedAbility },
            { no: 4, name: "applied_modifiers", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AbilityAppliedModifier },
            { no: 5, name: "mixin_recover_infos", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AbilityMixinRecoverInfo },
            { no: 6, name: "sgv_dynamic_value_map", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AbilityScalarValueEntry }
        ]);
    }
    create(value) {
        const message = { isInited: false, dynamicValueMap: [], appliedAbilities: [], appliedModifiers: [], mixinRecoverInfos: [], sgvDynamicValueMap: [] };
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
                case /* bool is_inited */ 1:
                    message.isInited = reader.bool();
                    break;
                case /* repeated AbilityScalarValueEntry dynamic_value_map */ 2:
                    message.dynamicValueMap.push(AbilityScalarValueEntry.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated AbilityAppliedAbility applied_abilities */ 3:
                    message.appliedAbilities.push(AbilityAppliedAbility.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated AbilityAppliedModifier applied_modifiers */ 4:
                    message.appliedModifiers.push(AbilityAppliedModifier.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated AbilityMixinRecoverInfo mixin_recover_infos */ 5:
                    message.mixinRecoverInfos.push(AbilityMixinRecoverInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated AbilityScalarValueEntry sgv_dynamic_value_map */ 6:
                    message.sgvDynamicValueMap.push(AbilityScalarValueEntry.internalBinaryRead(reader, reader.uint32(), options));
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
        /* bool is_inited = 1; */
        if (message.isInited !== false)
            writer.tag(1, WireType.Varint).bool(message.isInited);
        /* repeated AbilityScalarValueEntry dynamic_value_map = 2; */
        for (let i = 0; i < message.dynamicValueMap.length; i++)
            AbilityScalarValueEntry.internalBinaryWrite(message.dynamicValueMap[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* repeated AbilityAppliedAbility applied_abilities = 3; */
        for (let i = 0; i < message.appliedAbilities.length; i++)
            AbilityAppliedAbility.internalBinaryWrite(message.appliedAbilities[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* repeated AbilityAppliedModifier applied_modifiers = 4; */
        for (let i = 0; i < message.appliedModifiers.length; i++)
            AbilityAppliedModifier.internalBinaryWrite(message.appliedModifiers[i], writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* repeated AbilityMixinRecoverInfo mixin_recover_infos = 5; */
        for (let i = 0; i < message.mixinRecoverInfos.length; i++)
            AbilityMixinRecoverInfo.internalBinaryWrite(message.mixinRecoverInfos[i], writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* repeated AbilityScalarValueEntry sgv_dynamic_value_map = 6; */
        for (let i = 0; i < message.sgvDynamicValueMap.length; i++)
            AbilityScalarValueEntry.internalBinaryWrite(message.sgvDynamicValueMap[i], writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilitySyncStateInfo
 */
export const AbilitySyncStateInfo = new AbilitySyncStateInfo$Type();
