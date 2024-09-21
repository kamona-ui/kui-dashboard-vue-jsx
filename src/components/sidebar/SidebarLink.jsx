import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { sidebarState } from '@/composables'
import { Icon } from '@iconify/vue'

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
            required: 'tabler:circle',
        },
    },

    setup(props, { slots }) {
        const linkDefaultClasses = [
            'text-gray-500',
            'hover:text-gray-700',
            'hover:bg-gray-100',
            'dark:text-gray-400',
            'dark:hover:text-gray-100',
            'dark:hover:bg-dark-eval-2',
        ]

        const linkActiveClasses = [
            'text-white',
            'bg-purple-500',
            'shadow-lg',
            'hover:bg-purple-600',
        ]

        if (props.href) {
            return () => (
                <a
                    href={props.href}
                    class={[
                        'p-2 flex items-center gap-2 rounded-md transition-colors',
                        !props.active ? linkDefaultClasses : linkActiveClasses,
                    ]}
                >
                    <Icon
                        icon={props.icon}
                        aria-hidden="true"
                        class="flex-shrink-0 w-6 h-6"
                    />

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
                        'p-2 flex items-center gap-2 rounded-md transition-colors',
                        !props.active ? linkDefaultClasses : linkActiveClasses,
                    ]}
                >
                    <Icon
                        icon={props.icon}
                        aria-hidden="true"
                        class="flex-shrink-0 w-6 h-6"
                    />

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
                        'p-2 w-full flex items-center gap-2 rounded-md transition-colors',
                        !props.active ? linkDefaultClasses : linkActiveClasses,
                    ]}
                >
                    <Icon
                        icon={props.icon}
                        aria-hidden="true"
                        class="flex-shrink-0 w-6 h-6"
                    />

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
