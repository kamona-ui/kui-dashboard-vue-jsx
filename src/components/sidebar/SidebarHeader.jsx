import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import Logo from '@/components/Logo'
import Button from '@/components/Button'
import {
    MenuFoldLineLeftIcon,
    MenuFoldLineRightIcon,
} from '@/components/icons/outline'
import { sidebarState } from '@/composables'

export default defineComponent({
    setup() {
        return () => (
            <div class="flex flex-shrink-0 items-center justify-between px-3">
                <RouterLink to={{ name: 'Dashboard' }}>
                    <span class="sr-only">K UI Dashboard</span>
                    <Logo aria-hidden="true" class="h-auto w-10" />
                </RouterLink>

                <Button
                    class="p-2"
                    variant="secondary"
                    v-show={sidebarState.isOpen || sidebarState.isHovered}
                    srText={
                        sidebarState.isOpen ? 'Close sidebar' : 'Open sidebar'
                    }
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

                            <span
                                aria-hidden="true"
                                class={[
                                    'iconify tabler--x lg:hidden',
                                    iconSizeClasses,
                                ]}
                            ></span>
                        </>
                    )}
                </Button>
            </div>
        )
    },
})
