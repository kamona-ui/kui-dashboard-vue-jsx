import { defineComponent, reactive, withModifiers } from 'vue'
import InputIconWrapper from '@/components/InputIconWrapper'
import Label from '@/components/Label'
import Input from '@/components/Input'
import Checkbox from '@/components/Checkbox'
import Button from '@/components/Button'
import { MailIcon, LockClosedIcon, LoginIcon } from '@heroicons/vue/outline'
import { RouterLink } from 'vue-router'

export default defineComponent({
  setup() {
    const loginForm = reactive({
      email: '',
      password: '',
      remember: false,
      processing: false,
    })

    const login = () => {
      //
    }

    return () => (
      <form onSubmit={withModifiers(login, ['prevent'])}>
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
                v-model={loginForm.email}
                required
                autofocus
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
                v-model={loginForm.password}
                required
                autocomplete="current-password"
              />
            </InputIconWrapper>
          </div>

          {/* Remember me */}
          <div class="flex items-center justify-between">
            <label class="flex items-center">
              <Checkbox name="remember" v-model:checked={loginForm.remember} />
              <span class="ml-2 text-sm text-gray-600">Remember me</span>
            </label>

            <RouterLink to={{ name: 'ForgotPassword' }} class="text-sm text-blue-500 hover:underline">
              Forgot your password?
            </RouterLink>
          </div>

          {/* Login button */}
          <div>
            <Button type="submit" class="justify-center gap-2 w-full" disabled={loginForm.processing}>
              {({ iconSizeClasses }) => (
                <>
                  <LoginIcon aria-hidden="true" class={iconSizeClasses} />
                  <span>Log in</span>
                </>
              )}
            </Button>
          </div>

          {/* Register link */}
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Don't have an account?{' '}
            <RouterLink to={{ name: 'Register' }} class="text-blue-500 hover:underline">
              Register
            </RouterLink>
          </p>
        </div>
      </form>
    )
  },
})
