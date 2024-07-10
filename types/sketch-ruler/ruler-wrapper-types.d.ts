import { PropType } from 'vue';

export declare const wrapperProps: {
    scale: NumberConstructor;
    ratio: NumberConstructor;
    thick: NumberConstructor;
    endNumX: NumberConstructor;
    endNumY: NumberConstructor;
    palette: ObjectConstructor;
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    start: {
        type: NumberConstructor;
        default: number;
    };
    lines: {
        type: PropType<number[]>;
        default: () => never[];
    };
    selectStart: {
        type: NumberConstructor;
    };
    selectLength: {
        type: NumberConstructor;
    };
    isShowReferLine: {
        type: BooleanConstructor;
    };
};
