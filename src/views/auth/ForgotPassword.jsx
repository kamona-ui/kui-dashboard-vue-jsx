import { defineComponent, reactive, withModifiers } from 'vue'
import InputIconWrapper from '@/components/InputIconWrapper'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Label from '@/components/Label'
import { MailIcon, PaperAirplaneIcon } from '@heroicons/vue/outline'

export default defineComponent({
  setup() {
    const forgotPasswordForm = reactive({
      email: '',
      processing: false,
    })

    const submit = () => {
      //
    }

    return () => (
      <>
        <div class="mb-4 text-sm text-gray-600 dark:text-gray-400">
          Forgot your password? No problem. Just let us know your email address and we will email you a password reset
          link that will allow you to choose a new one.
        </div>

        <form onSubmit={withModifiers(submit, ['prevent'])}>
          <div class="grid gap-6">
            {/* Email input */}
            <div class="space-y-2">
              <Label for="email" value="Email" />
              <InputIconWrapper
                v-slots={{
                  icon: () => <MailIcon aria-hidden="true" class="w-5 h-5" />,
                }}
              >
                <Input
                  withIcon
                  id="email"
                  type="email"
                  class="block w-full"
                  placeholder="Email"
                  v-model={forgotPasswordForm.email}
                  required
                  autofocus
                  autocomplete="username"
                />
              </InputIconWrapper>
            </div>

            {/* Submit button */}
            <div>
              <Button type="submit" class="justify-center gap-2 w-full" disabled={forgotPasswordForm.processing}>
                {({ iconSizeClasses }) => (
                  <>
                    <PaperAirplaneIcon aria-hidden="true" class={iconSizeClasses} />
                    <span>Email Password Reset Link</span>
                  </>
                )}
              </Button>
            </div>
          </div>
        </form>
      </>
    )
  },
})
