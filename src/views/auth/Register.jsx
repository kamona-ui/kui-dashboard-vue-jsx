import { defineComponent, reactive, withModifiers } from 'vue'
import InputIconWrapper from '@/components/InputIconWrapper'
import Label from '@/components/Label'
import Input from '@/components/Input'
import Checkbox from '@/components/Checkbox'
import Button from '@/components/Button'
import { RouterLink } from 'vue-router'

export default defineComponent({
    setup() {
        const registerForm = reactive({
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            terms: false,
            processing: false,
        })

        const register = () => {
            //
        }

        return () => (
            <form onSubmit={withModifiers(register, ['prevent'])}>
                <div class="grid gap-6">
                    {/* Name input */}
                    <div class="space-y-2">
                        <Label for="name" value="Name" />
                        <InputIconWrapper icon="tabler--user">
                            <Input
                                withIcon
                                id="name"
                                type="text"
                                placeholder="Name"
                                class="block w-full"
                                v-model={registerForm.name}
                                required
                                autofocus
                                autocomplete="name"
                            />
                        </InputIconWrapper>
                    </div>

                    {/* Email input */}
                    <div class="space-y-2">
                        <Label for="email" value="Email" />
                        <InputIconWrapper icon="tabler--mail">
                            <Input
                                withIcon
                                id="email"
                                type="email"
                                class="block w-full"
                                placeholder="Email"
                                v-model={registerForm.email}
                                required
                                autocomplete="username"
                            />
                        </InputIconWrapper>
                    </div>

                    {/* Password input */}
                    <div class="space-y-2">
                        <Label for="password" value="Password" />
                        <InputIconWrapper icon="tabler--lock">
                            <Input
                                withIcon
                                id="password"
                                type="password"
                                class="block w-full"
                                placeholder="Password"
                                v-model={registerForm.password}
                                required
                                autocomplete="new-password"
                            />
                        </InputIconWrapper>
                    </div>

                    {/* Password confirmation input */}
                    <div class="space-y-2">
                        <Label
                            for="password_confirmation"
                            value="Confirm Password"
                        />
                        <InputIconWrapper icon="tabler--lock">
                            <Input
                                withIcon
                                id="password_confirmation"
                                type="password"
                                class="block w-full"
                                placeholder="Confirm Password"
                                v-model={registerForm.password_confirmation}
                                required
                                autocomplete="new-password"
                            />
                        </InputIconWrapper>
                    </div>

                    {/* Terms */}
                    <div>
                        <Label for="terms">
                            <div class="flex items-center">
                                <Checkbox
                                    name="terms"
                                    id="terms"
                                    v-model:checked={registerForm.terms}
                                />

                                <div class="ml-2">
                                    I agree to the{' '}
                                    <a
                                        target="_blank"
                                        href="#"
                                        class="text-sm text-blue-600 underline hover:text-blue-900"
                                    >
                                        Terms of Service
                                    </a>{' '}
                                    and{' '}
                                    <a
                                        target="_blank"
                                        href="#"
                                        class="text-sm text-blue-600 underline hover:text-blue-900"
                                    >
                                        Privacy Policy
                                    </a>
                                </div>
                            </div>
                        </Label>
                    </div>

                    {/* Register button */}
                    <div>
                        <Button
                            type="submit"
                            class="w-full justify-center gap-2"
                            disabled={registerForm.processing}
                            startIcon="tabler--user-plus"
                            text="Register"
                        />
                    </div>

                    {/* Login link */}
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                        Already have an account?{' '}
                        <RouterLink
                            to={{ name: 'Login' }}
                            class="text-blue-500 hover:underline"
                        >
                            Login
                        </RouterLink>
                    </p>
                </div>
            </form>
        )
    },
})
