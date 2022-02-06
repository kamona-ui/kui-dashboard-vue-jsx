import { defineComponent, reactive, withModifiers } from 'vue'
import { RouterLink } from 'vue-router'
import InputIconWrapper from '@/components/InputIconWrapper'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Label from '@/components/Label'
import { MailIcon, LockClosedIcon } from '@heroicons/vue/outline'

export default defineComponent({
  props: {
    email: String,
    token: String,
  },

  setup(props, { slots }) {
    const resetPasswordForm = reactive({
      token: props.token,
      email: props.email,
      password: '',
      password_confirmation: '',
      processing: false,
    })

    const submit = () => {
      //
    }

    return () => (
      <form onSubmit={withModifiers(submit, ['prevent'])}>
        <div class="grid gap-4">
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
                v-model={resetPasswordForm.email}
                required
                autocomplete="username"
              />
            </InputIconWrapper>
          </div>

          {/* Password input */}
          <div class="space-y-2">
            <Label for="password" value="Password" />
            <InputIconWrapper
              v-slots={{
                icon: () => <LockClosedIcon aria-hidden="true" class="w-5 h-5" />,
              }}
            >
              <Input
                withIcon
                id="password"
                type="password"
                class="block w-full"
                placeholder="Password"
                v-model={resetPasswordForm.password}
                required
                autocomplete="new-password"
              />
            </InputIconWrapper>
          </div>

          {/* Password confirmation input */}
          <div class="space-y-2">
            <Label for="password_confirmation" value="Confirm Password" />
            <InputIconWrapper
              v-slots={{
                icon: () => <LockClosedIcon aria-hidden="true" class="w-5 h-5" />,
              }}
            >
              <Input
                withIcon
                id="password_confirmation"
                type="password"
                class="block w-full"
                placeholder="Confirm Password"
                v-model={resetPasswordForm.password_confirmation}
                required
                autocomplete="new-password"
              />
            </InputIconWrapper>
          </div>

          {/* Submit button */}
          <div>
            <Button type="submit" class="justify-center gap-2 w-full" disabled={resetPasswordForm.processing}>
              <span>Reset Password</span>
            </Button>
          </div>
        </div>
      </form>
    )
  },
})
