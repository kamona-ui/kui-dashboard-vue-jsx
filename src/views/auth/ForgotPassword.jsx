import { defineComponent, reactive, withModifiers } from 'vue'
import InputIconWrapper from '@/components/InputIconWrapper'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Label from '@/components/Label'

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
                        <div class="space-y-2">
                            <Label for="email" value="Email" />
                            <InputIconWrapper icon="tabler--mail">
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
                            <Button
                                type="submit"
                                class="w-full justify-center gap-2"
                                disabled={forgotPasswordForm.processing}
                                text="Email Password Reset Link"
                            />
                        </div>
                    </div>
                </form>
            </>
        )
    },
})
