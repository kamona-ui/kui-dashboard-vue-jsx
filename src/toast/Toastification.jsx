import { defineComponent } from 'vue'
import {
    CheckIcon,
    XIcon,
    ExclamationCircleIcon,
    QuestionMarkCircleIcon,
} from '@heroicons/vue/outline'
import '@/toast/style.css'
import Button from '@/components/Button'

export default defineComponent({
    props: {
        variant: {
            type: String,
            default: 'primary',
            validator(value) {
                return [
                    'primary',
                    'success',
                    'warning',
                    'error',
                    'info',
                ].includes(value)
            },
        },
        title: {
            type: String,
            default: 'Notification',
        },
        text: {
            type: String,
            default: null,
        },
        hideClose: {
            type: Boolean,
            default: false,
        },
    },

    emits: ['close-toast'],

    setup(props, { emit }) {
        const { variant, title, text, hideClose } = props

        const toastBackgroundClass = [
            {
                'bg-white': variant == 'primary',
                'bg-green-100': variant == 'success',
                'bg-yellow-100': variant == 'warning',
                'bg-red-100': variant == 'error',
                'bg-cyan-100': variant == 'info',
            },
        ]

        const iconBackgroundClass = [
            {
                'bg-purple-400': variant == 'primary',
                'bg-green-400': variant == 'success',
                'bg-yellow-400': variant == 'warning',
                'bg-red-400': variant == 'error',
                'bg-cyan-400': variant == 'info',
            },
        ]

        const textVariantClass = [
            {
                'text-purple-500': variant == 'primary',
                'text-green-500': variant == 'success',
                'text-yellow-500': variant == 'warning',
                'text-red-500': variant == 'error',
                'text-cyan-500': variant == 'info',
            },
        ]

        let Icon

        switch (variant) {
            case 'primary':
                Icon = CheckIcon
                break
            case 'success':
                Icon = CheckIcon
                break
            case 'warning':
                Icon = ExclamationCircleIcon
                break
            case 'error':
                Icon = XIcon
                break
            case 'info':
                Icon = QuestionMarkCircleIcon
                break
        }

        const handleClose = () => {
            emit('close-toast')
        }

        return () => (
            <div class="p-6">
                <div
                    class={[
                        'relative rounded-md p-4 shadow-lg dark:bg-dark-eval-3',
                        toastBackgroundClass,
                    ]}
                >
                    <div class="flex items-start gap-4">
                        <span
                            class={[
                                'inline-flex rounded-full p-1',
                                iconBackgroundClass,
                            ]}
                        >
                            <Icon
                                aria-hidden="true"
                                class="h-6 w-6 text-white"
                            />
                        </span>

                        <Button
                            onClick={handleClose}
                            iconOnly
                            size="sm"
                            variant="secondary"
                            class="absolute right-2 top-2"
                        >
                            {({ iconSizeClasses }) => (
                                <>
                                    <XIcon
                                        aria-hidden="true"
                                        class={iconSizeClasses}
                                    />
                                </>
                            )}
                        </Button>

                        <div class="space-y-2">
                            <div class={textVariantClass}>{title}</div>
                            <p class="text-gray-600 dark:text-gray-400">
                                {text}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
})
