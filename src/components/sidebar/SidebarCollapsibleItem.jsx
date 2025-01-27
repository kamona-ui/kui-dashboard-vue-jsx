import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
    props: {
        href: String,
        to: [String, Object],
        title: String,
        active: {
            type: Boolean,
            default: false,
        },
    },

    setup(props, { attrs }) {
        return () => (
            <li
                class={[
                    'relative m-0 pl-6 leading-8',
                    'before:absolute before:left-0 before:top-4 before:-mt-0.5 before:block before:h-0 before:w-4 before:border-t-2 before:border-t-gray-200',
                    'last:before:bottom-0 last:before:top-4 last:before:h-auto last:before:bg-white',
                    'dark:before:border-t-gray-600 dark:last:before:bg-dark-eval-1',
                ]}
            >
                {props.href && (
                    <a
                        href={props.href}
                        {...attrs}
                        class={[
                            'transition-colors hover:text-gray-900 dark:hover:text-gray-100',
                            {
                                'text-gray-900 dark:text-gray-200':
                                    props.active,
                                'text-gray-500 dark:text-gray-400':
                                    !props.active,
                            },
                        ]}
                    >
                        {props.title}
                    </a>
                )}
                {props.to && (
                    <RouterLink
                        to={props.to}
                        {...attrs}
                        class={[
                            'transition-colors hover:text-gray-900 dark:hover:text-gray-100',
                            {
                                'text-gray-900 dark:text-gray-200':
                                    props.active,
                                'text-gray-500 dark:text-gray-400':
                                    !props.active,
                            },
                        ]}
                    >
                        {props.title}
                    </RouterLink>
                )}
            </li>
        )
    },
})
