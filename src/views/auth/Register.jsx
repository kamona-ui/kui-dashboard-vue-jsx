import { defineComponent, reactive, withModifiers } from 'vue'
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
                    <KuiInput
                        id="name"
                        type="text"
                        label="Name"
                        icon="tabler:user"
                        placeholder="Name"
                        v-model={registerForm.name}
                        required
                        autofocus
                        autocomplete="name"
                    />

                    {/* Email input */}
                    <KuiInput
                        id="email"
                        type="email"
                        label="Email"
                        icon="tabler:mail"
                        placeholder="Email"
                        v-model={registerForm.email}
                        required
                        autocomplete="username"
                    />

                    {/* Password input */}
                    <KuiInput
                        id="password"
                        type="password"
                        label="Password"
                        icon="tabler:lock"
                        placeholder="Password"
                        v-model={registerForm.password}
                        required
                        autocomplete="new-password"
                    />

                    {/* Password confirmation input */}
                    <KuiInput
                        id="password_confirmation"
                        type="password"
                        label="Confirm Password"
                        icon="tabler:lock"
                        placeholder="Confirm Password"
                        v-model={registerForm.password_confirmation}
                        required
                        autocomplete="new-password"
                    />

                    {/* Terms */}
                    <KuiCheckbox
                        name="terms"
                        id="terms"
                        v-model:checked={registerForm.terms}
                    >
                        <div>
                            I agree to the{' '}
                            <a
                                target="_blank"
                                href="#"
                                class="underline text-sm text-blue-600 hover:text-blue-900"
                            >
                                Terms of Service
                            </a>{' '}
                            and{' '}
                            <a
                                target="_blank"
                                href="#"
                                class="underline text-sm text-blue-600 hover:text-blue-900"
                            >
                                Privacy Policy
                            </a>
                        </div>
                    </KuiCheckbox>

                    {/* Register button */}
                    <KuiButton
                        text="Register"
                        icon="tabler:user-plus"
                        disabled={registerForm.processing}
                    />

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
