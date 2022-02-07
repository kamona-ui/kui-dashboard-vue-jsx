import { defineComponent, Transition } from 'vue'
import { RouterLink } from 'vue-router'
import Button from '@/components/Button'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { DotsHorizontalIcon } from '@heroicons/vue/outline'

export default defineComponent({
  props: {
    noHeader: {
      type: Boolean,
      default: false,
    },

    bgClasses: {
      type: String,
      default: 'bg-white dark:bg-dark-eval-1',
    },

    title: String,

    actions: {
      type: Array,
      default: [],
    },
  },

  setup(props, { slots }) {
    return () => (
      <div class={['p-4 rounded-md shadow-md', props.bgClasses]}>
        {/* Card header */}
        {!props.noHeader && (
          <div class="flex items-center justify-between">
            {slots.header ? slots.header() : <h4 class="text-lg font-medium">{props.title}</h4>}

            {/* Card action */}
            {props.actions.length && (
              <Menu as="div" class="relative">
                <MenuButton as="span">
                  <Button iconOnly size="sm" variant="secondary">
                    {({ iconSizeClasses }) => (
                      <>
                        <span class="sr-only">Card Actions</span>
                        <DotsHorizontalIcon aria-hidden="true" class={iconSizeClasses} />
                      </>
                    )}
                  </Button>
                </MenuButton>

                <Transition
                  enterActiveClass="transition duration-100 ease-out"
                  enterFromClass="transform scale-95 opacity-0"
                  enterToClass="transform scale-100 opacity-100"
                  leaveActiveClass="transition duration-75 ease-in"
                  leaveFromClass="transform scale-100 opacity-100"
                  leaveToClass="transform scale-95 opacity-0"
                >
                  <MenuItems class="absolute z-30 right-0 w-40 mt-2 origin-top-right bg-white dark:bg-dark-eval-1 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div class="px-1 py-1">
                      {props.actions.map(({ to, title }, i) => (
                        <MenuItem key={i}>
                          {({ active }) => (
                            <RouterLink
                              to={to}
                              class={[
                                'block w-full px-4 py-2 text-sm leading-5 text-left  transition duration-150 ease-in-out',
                                'focus:outline-none',
                                {
                                  'bg-gray-100 dark:text-white dark:bg-dark-eval-3': active,
                                  'text-gray-700 dark:text-gray-400': !active,
                                },
                              ]}
                            >
                              {title}
                            </RouterLink>
                          )}
                        </MenuItem>
                      ))}
                    </div>
                  </MenuItems>
                </Transition>
              </Menu>
            )}
          </div>
        )}

        {/* Card body */}
        {slots.default?.()}
      </div>
    )
  },
})
