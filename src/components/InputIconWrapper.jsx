import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        icon: {
            type: String,
        },
    },
    setup(props, { slots }) {
        return () => (
            <div class="relative text-gray-500 focus-within:text-gray-900 dark:focus-within:text-gray-400">
                <div
                    aria-hidden="true"
                    class="pointer-events-none absolute inset-y-0 flex items-center px-4"
                >
                    <span class={['iconify h-5 w-5', props.icon]}></span>
                </div>

                {slots.default?.()}
            </div>
        )
    },
})
