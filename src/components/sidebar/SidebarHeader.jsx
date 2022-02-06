import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import Logo from '@/components/Logo'
import Button from '@/components/Button'
import { MenuFoldLineLeftIcon, MenuFoldLineRightIcon } from '@/components/icons/outline'
import { XIcon } from '@heroicons/vue/outline'
import { sidebarState } from '@/composables'

export default defineComponent({
  setup() {
    return () => (
      <div class="flex items-center justify-between flex-shrink-0 px-3">
        <RouterLink to={{ name: 'Dashboard' }}>
          <span class="sr-only">K UI Dashboard</span>
          <Logo aria-hidden="true" class="w-10 h-auto" />
        </RouterLink>

        <Button
          iconOnly
          variant="secondary"
          v-show={sidebarState.isOpen || sidebarState.isHovered}
          srText={sidebarState.isOpen ? 'Close sidebar' : 'Open sidebar'}
          onClick={() => {
            sidebarState.isOpen = !sidebarState.isOpen
          }}
        >
          {({ iconSizeClasses }) => (
            <>
              <MenuFoldLineLeftIcon
                aria-hidden="true"
                v-show={sidebarState.isOpen}
                class={['hidden lg:block', iconSizeClasses]}
              />

              <MenuFoldLineRightIcon
                aria-hidden="true"
                v-show={!sidebarState.isOpen}
                class={['hidden lg:block', iconSizeClasses]}
              />

              <XIcon aria-hidden="true" class={['lg:hidden', iconSizeClasses]} />
            </>
          )}
        </Button>
      </div>
    )
  },
})
