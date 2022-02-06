import { defineComponent } from 'vue'

export default defineComponent({
  props: {},

  setup(props, { slots }) {
    return () => (
      <div>
        <div>{slots.default?.()}</div>
      </div>
    )
  },
})
