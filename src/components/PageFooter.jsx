import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue'

export default defineComponent({
    setup() {
        return () => (
            <footer class="mt-4 w-full flex flex-col flex-shrink-0 gap-2 px-6 py-4 lg:flex-row lg:justify-between">
                <p class="text-sm text-gray-500 dark:text-gray-400">
                    &#169;
                    <span>{new Date().getFullYear()}</span> K UI, All rights
                    reserved
                </p>

                <p class="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                    <span>Hand-crafted & Made with</span>
                    <span>
                        <span class="sr-only">love</span>
                        <Icon
                            icon="tabler:heart-filled"
                            class="w-6 h-6 text-red-500"
                            aria-hidden="true"
                        />
                    </span>
                    <span>by</span>
                    <a
                        href="https://github.com/Kamona-WD"
                        target="_blank"
                        class="text-blue-600 hover:underline"
                    >
                        Ahmed Kamel
                    </a>
                </p>
            </footer>
        )
    },
})
