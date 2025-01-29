import { defineComponent, reactive, withModifiers } from 'vue'
import InputIconWrapper from '@/components/InputIconWrapper'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Label from '@/components/Label'

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
                    <div class="space-y-2">
                        <Label for="email" value="Email" />
                        <InputIconWrapper icon="tabler--mail">
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
                        <InputIconWrapper icon="tabler--lock">
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
                                v-model={
                                    resetPasswordForm.password_confirmation
                                }
                                required
                                autocomplete="new-password"
                            />
                        </InputIconWrapper>
                    </div>

                    {/* Submit button */}
                    <div>
                        <Button
                            type="submit"
                            class="w-full justify-center gap-2"
                            disabled={resetPasswordForm.processing}
                            text="Reset Password"
                        />
                    </div>
                </div>
            </form>
        )
    },
})
