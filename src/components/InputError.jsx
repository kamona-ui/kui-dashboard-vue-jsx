import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        message: String,
    },

    setup(props) {
        return () => (
            <div v-show={props.message}>
                <p class="text-sm text-red-600">{props.message}</p>
            </div>
        )
    },
})
