import { defineComponent, reactive, withModifiers } from 'vue'

export default defineComponent({
    props: {
        email: String,
        token: String,
    },

    setup(props) {
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
                    <KuiInput
                        id="email"
                        type="email"
                        label="Email"
                        icon="tabler:mail"
                        placeholder="Email"
                        v-model={resetPasswordForm.email}
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
                        v-model={resetPasswordForm.password}
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
                        v-model={resetPasswordForm.password_confirmation}
                        required
                        autocomplete="new-password"
                    />

                    {/* Submit button */}
                    <KuiButton
                        text="Reset Password"
                        disabled={resetPasswordForm.processing}
                    />
                </div>
            </form>
        )
    },
})
