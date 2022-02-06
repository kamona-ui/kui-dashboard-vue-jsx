import { defineComponent, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useFullscreen } from '@vueuse/core'
import { SunIcon, MoonIcon, SearchIcon, MenuIcon, XIcon, ArrowsExpandIcon } from '@heroicons/vue/outline'
import { handleScroll, isDark, scrolling, toggleDarkMode, sidebarState } from '@/composables'
import Button from '@/components/Button'
import Logo from '@/components/Logo'
import Dropdown, { DropdownItem } from '@/components/Dropdown'
import { ArrowsInnerIcon } from '@/components/icons/outline'
import userAvatar from '@/assets/images/avatar.jpg'

export const MobileBottomBar = defineComponent({
  setup() {
    return () => (
      <div
        class={[
          'fixed inset-x-0 bottom-0 flex items-center justify-between px-4 py-4 sm:px-6 transition-transform duration-500 bg-white md:hidden dark:bg-dark-eval-1',
          {
            'translate-y-full': scrolling.down,
            'translate-y-0': scrolling.up,
          },
        ]}
      >
        <Button iconOnly variant="secondary" srText="Search">
          {({ iconSizeClasses }) => <SearchIcon aria-hidden="true" class={iconSizeClasses} />}
        </Button>

        <RouterLink to={{ name: 'Dashboard' }}>
          <Logo class="w-10 h-10" />
          <span class="sr-only">K UI</span>
        </RouterLink>

        <Button
          iconOnly
          variant="secondary"
          onClick={() => {
            sidebarState.isOpen = !sidebarState.isOpen
          }}
          class="md:hidden"
          srText="Search"
        >
          {({ iconSizeClasses }) => (
            <>
              <MenuIcon v-show={!sidebarState.isOpen} aria-hidden="true" class={iconSizeClasses} />
              <XIcon v-show={sidebarState.isOpen} aria-hidden="true" class={iconSizeClasses} />
            </>
          )}
        </Button>
      </div>
    )
  },
})

export default defineComponent({
  setup() {
    const { isFullscreen, toggle: toggleFullScreen } = useFullscreen()

    onMounted(() => {
      document.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      document.removeEventListener('scroll', handleScroll)
    })

    return () => (
      <>
        <nav
          aria-label="secondary"
          class={[
            'sticky top-0 z-10 px-6 py-4 bg-white flex items-center justify-between transition-transform duration-500 dark:bg-dark-eval-1',
            {
              '-translate-y-full': scrolling.down,
              'translate-y-0': scrolling.up,
            },
          ]}
        >
          <div class="flex items-center gap-2">
            <Button
              iconOnly
              variant="secondary"
              type="button"
              onClick={toggleDarkMode}
              class="md:hidden"
              srText="Toggle dark mode"
            >
              {({ iconSizeClasses }) => (
                <>
                  <MoonIcon v-show={!isDark.value} aria-hidden="true" class={iconSizeClasses} />
                  <SunIcon v-show={isDark.value} aria-hidden="true" class={iconSizeClasses} />
                </>
              )}
            </Button>
          </div>

          <div class="flex items-center gap-2">
            <Button
              iconOnly
              variant="secondary"
              type="button"
              onClick={toggleDarkMode}
              class="hidden md:inline-flex"
              srText="Toggle dark mode"
            >
              {({ iconSizeClasses }) => (
                <>
                  <MoonIcon v-show={!isDark.value} aria-hidden="true" class={iconSizeClasses} />
                  <SunIcon v-show={isDark.value} aria-hidden="true" class={iconSizeClasses} />
                </>
              )}
            </Button>

            <Button
              iconOnly
              variant="secondary"
              type="button"
              onClick={toggleFullScreen}
              class="hidden md:inline-flex"
              srText="Toggle full screen"
            >
              {({ iconSizeClasses }) => (
                <>
                  <ArrowsExpandIcon v-show={!isFullscreen.value} aria-hidden="true" class={iconSizeClasses} />
                  <ArrowsInnerIcon v-show={isFullscreen.value} aria-hidden="true" class={iconSizeClasses} />
                </>
              )}
            </Button>

            {/* User dropdown */}
            <Dropdown
              align="right"
              width="48"
              v-slots={{
                trigger: () => (
                  <button class="flex text-sm border-2 border-transparent rounded-md transition focus:outline-none focus:ring focus:ring-purple-500 focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-dark-eval-1">
                    <img class="h-8 w-8 rounded-md object-cover" src={userAvatar} alt="User Name" />
                  </button>
                ),
              }}
            >
              <DropdownItem to="#" title="Logout" />
            </Dropdown>
          </div>
        </nav>

        <MobileBottomBar />
      </>
    )
  },
})
