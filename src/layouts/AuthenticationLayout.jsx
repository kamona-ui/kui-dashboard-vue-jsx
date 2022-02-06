import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Logo from '@/components/Logo'
import PageFooter from '@/components/PageFooter'

export default defineComponent({
  setup() {
    return () => (
      <div class="flex flex-col items-center justify-center min-h-screen gap-4 py-6 bg-gray-100 dark:bg-dark-bg">
        <div class="flex-shrink-0">
          <RouterLink to={{ name: 'Dashboard' }}>
            <Logo class="w-20 h-20" />
            <span class="sr-only">Dashboard</span>
          </RouterLink>
        </div>

        <main class="flex items-center flex-1 w-full sm:max-w-md">
          <div class="w-full px-6 py-4 overflow-hidden bg-white shadow-md sm:rounded-lg dark:bg-dark-eval-1">
            <RouterView />
          </div>
        </main>

        <PageFooter />
      </div>
    )
  },
})
