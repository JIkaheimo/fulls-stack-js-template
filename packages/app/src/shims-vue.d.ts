import { Store } from 'vuex';
import { RootState } from '@/store/index';

declare module '*.vue' {
  import { defineComponent } from 'vue';

  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}

declare module '@vue/runtime-core' {
  // provide typings for `this.$store`
  export interface ComponentCustomProperties {
    $store: Store<RootState>;
  }
}
