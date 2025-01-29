import { defineComponent } from 'vue'
import { sidebarState } from '@/composables'
import { RouterLink } from 'vue-router'

export default defineComponent({
    props: {
        href: {
            type: String,
            required: false,
        },
        to: {
            type: [String, Object],
            required: false,
        },
        active: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            default: 'tabler--circle',
        },
    },

    setup(props, { slots }) {
        if (props.href) {
            return () => (
                <a
                    href={props.href}
                    class={[
                        'flex items-center gap-2 rounded-md p-2 transition-colors',
                        {
                            'text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-dark-eval-2 dark:hover:text-gray-300':
                                !props.active,
                            'bg-purple-500 text-white shadow-lg hover:bg-purple-600':
                                props.active,
                        },
                    ]}
                >
                    <span
                        aria-hidden="true"
                        class={['iconify h-6 w-6 flex-shrink-0', props.icon]}
                    ></span>

                    <span
                        class="text-base font-medium"
                        v-show={sidebarState.isOpen || sidebarState.isHovered}
                    >
                        {props.title}
                    </span>
                </a>
            )
        } else if (props.to) {
            return () => (
                <RouterLink
                    to={props.to}
                    class={[
                        'flex items-center gap-2 rounded-md p-2 transition-colors',
                        {
                            'text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-dark-eval-2 dark:hover:text-gray-300':
                                !props.active,
                            'bg-purple-500 text-white shadow-lg hover:bg-purple-600':
                                props.active,
                        },
                    ]}
                >
                    <span
                        aria-hidden="true"
                        class={['iconify h-6 w-6 flex-shrink-0', props.icon]}
                    ></span>

                    <span
                        class="text-base font-medium"
                        v-show={sidebarState.isOpen || sidebarState.isHovered}
                    >
                        {props.title}
                    </span>
                </RouterLink>
            )
        } else {
            return () => (
                <button
                    type="button"
                    class={[
                        'flex w-full items-center gap-2 rounded-md p-2 transition-colors',
                        {
                            'text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-dark-eval-2 dark:hover:text-gray-300':
                                !props.active,
                            'bg-purple-500 text-white shadow-lg hover:bg-purple-600':
                                props.active,
                        },
                    ]}
                >
                    <span
                        aria-hidden="true"
                        class={['iconify h-6 w-6 flex-shrink-0', props.icon]}
                    ></span>

                    <span
                        class="text-base font-medium"
                        v-show={sidebarState.isOpen || sidebarState.isHovered}
                    >
                        {props.title}
                    </span>

                    {slots.arrow?.()}
                </button>
            )
        }
    },
})
