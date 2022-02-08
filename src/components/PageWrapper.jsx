import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    mainTitle: String,
    title: String,
  },

  setup(props, { slots }) {
    return () => (
      <>
        {(slots.header || props.title) && (
          <header class="p-4 sm:p-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {slots.header ? slots.header() : <h2 class="text-xl font-semibold leading-tight">{props.title}</h2>}
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
