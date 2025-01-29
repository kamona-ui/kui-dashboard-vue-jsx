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
import Button from '@/components/Button'
import Logo from '@/components/Logo'
import Dropdown, { DropdownItem } from '@/components/Dropdown'

export const MobileBottomBar = defineComponent({
    setup() {
        return () => (
            <div
                class={[
                    'fixed inset-x-0 bottom-0 z-10 flex items-center justify-between bg-white px-4 py-4 transition-transform duration-500 dark:bg-dark-eval-1 sm:px-6 md:hidden',
                    {
                        'translate-y-full': scrolling.down,
                        'translate-y-0': scrolling.up,
                    },
                ]}
            >
                <Button
                    variant="secondary"
                    srText="Search"
                    icon="tabler--search"
                />

                <RouterLink to={{ name: 'Dashboard' }}>
                    <Logo class="h-10 w-10" />
                    <span class="sr-only">K UI</span>
                </RouterLink>

                <Button
                    variant="secondary"
                    onClick={() => {
                        sidebarState.isOpen = !sidebarState.isOpen
                    }}
                    class="p-2"
                    srText="Open navigation menu"
                    icon="tabler--menu-3"
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
                        'sticky top-0 z-10 flex items-center justify-between bg-white px-6 py-4 transition-transform duration-500 dark:bg-dark-eval-1',
                        {
                            '-translate-y-full': scrolling.down,
                            'translate-y-0': scrolling.up,
                        },
                    ]}
                >
                    <div class="flex items-center gap-2">
                        <Button
                            variant="secondary"
                            type="button"
                            onClick={toggleDarkMode}
                            class="p-2 md:hidden"
                            srText="Toggle dark mode"
                        >
                            {({ iconSizeClasses }) => (
                                <>
                                    <span
                                        v-show={!isDark.value}
                                        aria-hidden="true"
                                        class={[
                                            'iconify tabler--moon',
                                            iconSizeClasses,
                                        ]}
                                    ></span>

                                    <span
                                        v-show={isDark.value}
                                        aria-hidden="true"
                                        class={[
                                            'iconify tabler--sun',
                                            iconSizeClasses,
                                        ]}
                                    ></span>
                                </>
                            )}
                        </Button>
                    </div>

                    <div class="flex items-center gap-2">
                        <Button
                            variant="secondary"
                            type="button"
                            onClick={toggleDarkMode}
                            class="hidden p-2 md:inline-flex"
                            srText="Toggle dark mode"
                        >
                            {({ iconSizeClasses }) => (
                                <>
                                    <span
                                        v-show={!isDark.value}
                                        aria-hidden="true"
                                        class={[
                                            'iconify tabler--moon',
                                            iconSizeClasses,
                                        ]}
                                    ></span>

                                    <span
                                        v-show={isDark.value}
                                        aria-hidden="true"
                                        class={[
                                            'iconify tabler--sun',
                                            iconSizeClasses,
                                        ]}
                                    ></span>
                                </>
                            )}
                        </Button>

                        {/* User dropdown */}
                        <Dropdown
                            align="right"
                            width="48"
                            v-slots={{
                                trigger: () => (
                                    <Button class="overflow-hidden p-0">
                                        <img
                                            class="h-10 w-10 rounded-md object-cover"
                                            src="images/avatar.jpeg"
                                            alt="Ahmed Kamel"
                                        />
                                    </Button>
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
