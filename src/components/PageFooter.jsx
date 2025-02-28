import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        return () => (
            <footer class="mt-4 flex w-full flex-shrink-0 flex-col gap-2 px-6 py-4 lg:flex-row lg:justify-between">
                <p class="text-sm text-gray-500 dark:text-gray-400">
                    &#169;
                    <span>{new Date().getFullYear()}</span> K UI, All rights
                    reserved
                </p>

                <div class="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                    <span>Hand-crafted & Made with</span>
                    <div class="inline-flex">
                        <span class="sr-only">love</span>
                        <span
                            aria-hidden="true"
                            class="iconify h-5 w-5 text-red-500 tabler--heart-filled"
                        ></span>
                    </div>

                    <span>by</span>

                    <a
                        href="https://github.com/Kamona-WD"
                        target="_blank"
                        class="text-blue-600 hover:underline"
                    >
                        Ahmed Kamel
                    </a>
                </div>
            </footer>
        )
    },
})
