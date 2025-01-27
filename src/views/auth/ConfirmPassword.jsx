import { defineComponent, reactive, withModifiers } from 'vue'
import InputIconWrapper from '@/components/InputIconWrapper'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Label from '@/components/Label'

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

                {/* Password input */}
                <div class="grid gap-4">
                    <div class="space-y-2">
                        <Label for="password" value="Password" />
                        <InputIconWrapper icon="tabler--lock">
                            <Input
                                withIcon
                                id="password"
                                type="password"
                                class="block w-full"
                                placeholder="Password"
                                v-model={confirmPasswordForm.password}
                                required
                                autocomplete="current-password"
                                autofocus
                            />
                        </InputIconWrapper>
                    </div>

                    {/* Submit button */}
                    <div>
                        <Button
                            type="submit"
                            class="w-full justify-center"
                            disabled={confirmPasswordForm.processing}
                        >
                            Confirm
                        </Button>
                    </div>
                </div>
            </form>
        )
    },
})
