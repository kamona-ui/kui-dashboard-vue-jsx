import { defineComponent, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useFullscreen } from '@vueuse/core'
import {
    handleScroll,
    isDark,
    scrolling,
    toggleDarkMode,
    sidebarState,
} from '@/composables'
import Logo from '@/components/Logo'
import userAvatar from '@/assets/images/avatar.jpg'

export const MobileBottomBar = defineComponent({
    setup() {
        return () => (
            <div
                class={[
                    'fixed inset-x-0 bottom-0 z-10 flex items-center justify-between px-4 py-4 sm:px-6 transition-transform duration-500 bg-white md:hidden dark:bg-dark-eval-1',
                    {
                        'translate-y-full': scrolling.down,
                        'translate-y-0': scrolling.up,
                    },
                ]}
            >
                <KuiButton
                    variant="transparent"
                    sr-text="Search"
                    icon="tabler:search"
                />

                <RouterLink to={{ name: 'Dashboard' }}>
                    <Logo class="w-10 h-10" />
                    <span class="sr-only">Home page</span>
                </RouterLink>

                <KuiButton
                    variant="transparent"
                    onClick={() => {
                        sidebarState.isOpen = !sidebarState.isOpen
                    }}
                    class="md:hidden"
                    icon={!sidebarState.isOpen ? 'tabler:menu' : 'tabler:x'}
                    sr-text="Toggle navigation"
                />
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
                        <KuiButton
                            variant="white"
                            type="button"
                            onClick={toggleDarkMode}
                            class="md:hidden"
                            sr-text="Toggle dark mode"
                            icon={!isDark.value ? 'tabler:moon' : 'tabler:sun'}
                        />
                    </div>

                    <div class="flex items-center gap-2">
                        <KuiButton
                            variant="transparent"
                            type="button"
                            onClick={toggleDarkMode}
                            class="hidden md:inline-flex"
                            sr-text="Toggle dark mode"
                            icon={!isDark.value ? 'tabler:moon' : 'tabler:sun'}
                        />

                        <KuiButton
                            variant="transparent"
                            type="button"
                            onClick={toggleFullScreen}
                            class="hidden md:inline-flex"
                            sr-text="Toggle full screen"
                            icon={
                                !isFullscreen.value
                                    ? 'tabler:arrows-maximize'
                                    : 'tabler:arrows-minimize'
                            }
                        />

                        {/* User dropdown */}
                        <KuiDropdown
                            align="right"
                            width="48"
                            v-slots={{
                                trigger: () => (
                                    <KuiButton slim>
                                        <KuiAvatar
                                            size="sm"
                                            src={userAvatar}
                                            alt="User Name"
                                        />
                                    </KuiButton>
                                ),

                                content: () => (
                                    <KuiDropdownItem to="#" title="Logout" />
                                ),
                            }}
                        />
                    </div>
                </nav>

                <MobileBottomBar />
            </>
        )
    },
})
