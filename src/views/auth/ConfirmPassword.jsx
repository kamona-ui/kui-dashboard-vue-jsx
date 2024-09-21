import { defineComponent, reactive, withModifiers } from 'vue'

export default defineComponent({
    setup() {
        const confirmPasswordForm = reactive({
            password: '',
            processing: false,
        })

        const submit = () => {
            //
        }

        return () => (
            <form onSubmit={withModifiers(submit, ['prevent'])}>
                <div class="mb-4 text-sm text-gray-600 dark:text-gray-400">
                    This is a secure area of the application. Please confirm
                    your password before continuing.
                </div>

                <div class="grid gap-4">
                    <KuiInput
                        id="password"
                        type="password"
                        label="Password"
                        icon="tabler:lock"
                        placeholder="Password"
                        v-model={confirmPasswordForm.password}
                        required
                        autocomplete="current-password"
                        autofocus
                    />

                    <KuiButton
                        text="Confirm"
                        disabled={confirmPasswordForm.processing}
                    >
                        Confirm
                    </KuiButton>
                </div>
            </form>
        )
    },
})
