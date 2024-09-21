import { defineComponent, reactive, withModifiers } from 'vue'

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
                    Forgot your password? No problem. Just let us know your
                    email address and we will email you a password reset link
                    that will allow you to choose a new one.
                </div>

                <form onSubmit={withModifiers(submit, ['prevent'])}>
                    <div class="grid gap-6">
                        {/* Email input */}
                        <KuiInput
                            id="email"
                            type="email"
                            label="Email"
                            icon="tabler:mail"
                            placeholder="Email"
                            v-model={forgotPasswordForm.email}
                            required
                            autofocus
                            autocomplete="username"
                        />

                        {/* Submit button */}
                        <KuiButton
                            text="Email Password Reset Link"
                            start-icon="tabler:location"
                            disabled={forgotPasswordForm.processing}
                        />
                    </div>
                </form>
            </>
        )
    },
})
