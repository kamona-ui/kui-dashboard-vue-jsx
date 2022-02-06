import { defineComponent } from 'vue'
import Button from '@/components/Button'
import { MenuFoldLineLeftIcon, MenuFoldLineRightIcon } from '@/components/icons/outline'
import { sidebarState } from '@/composables'

export default defineComponent({
  setup() {
    return () => (
      <div class="flex-shrink-0 px-3 lg:hidden">
        <Button
          iconOnly
          variant="secondary"
          v-show={!sidebarState.isOpen}
          srText={sidebarState.isOpen ? 'Close sidebar' : 'Open sidebar'}
          onClick={() => {
            sidebarState.isOpen = !sidebarState.isOpen
          }}
        >
          {({ iconSizeClasses }) => (
            <>
              <MenuFoldLineLeftIcon aria-hidden="true" v-show={sidebarState.isOpen} class={[iconSizeClasses]} />

              <MenuFoldLineRightIcon aria-hidden="true" v-show={!sidebarState.isOpen} class={[iconSizeClasses]} />
            </>
          )}
        </Button>
      </div>
    )
  },
})
