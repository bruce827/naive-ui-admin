import { PropType } from 'vue';

export interface BasicPropsType {
  width: string;
  height: string;
}

export const basicProps = {
  width: {
    type: String as PropType<string>,
    default: '100%',
  },
  height: {
    type: String as PropType<string>,
    default: '280px',
  },
};
