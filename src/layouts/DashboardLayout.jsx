import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import { sidebarState } from '@/composables'
import Sidebar from '@/components/sidebar/Sidebar'
import Navbar from '@/components/Navbar'
import PageFooter from '@/components/PageFooter'

export default defineComponent({
    setup() {
        return () => (
            <div class="dark:bg-dark-bg min-h-screen bg-gray-100 text-gray-900 dark:text-gray-100">
                <Sidebar />

                <div
                    style="transition-property: margin; transition-duration: 150ms"
                    class={[
                        'flex min-h-screen flex-col',
                        {
                            'lg:ml-64': sidebarState.isOpen,
                            'md:ml-16': !sidebarState.isOpen,
                        },
                    ]}
                >
                    <Navbar />

                    <RouterView />

                    <PageFooter />
                </div>
            </div>
        )
    },
})
