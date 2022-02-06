import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    mainTitle: String,
  },

  setup(props, { slots }) {
    return () => (
      <>
        {slots.header && (
          <header class="p-4 sm:p-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {slots.header?.()}
          </header>
        )}

        <main class={['flex-1', { 'mt-6': !slots.header }]}>
          {props.mainTitle && <h1 class="sr-only">{props.mainTitle}</h1>}
          <div class="grid gap-6 px-4 sm:px-6">{slots.default?.()}</div>
        </main>
      </>
    )
  },
})
