import {
    defineComponent,
    onMounted,
    onUnmounted,
    ref,
    withModifiers,
} from 'vue'
import PerfectScrollbar from 'perfect-scrollbar'
import '@/components/perfect-scrollbar/style.css'

export default defineComponent({
    props: {
        settings: {
            type: Object,
            default: {},
        },
        tagname: {
            type: String,
            default: 'div',
        },
    },

    setup(props, { slots }) {
        const { settings, tagname } = props

        let ps = null

        const update = () => {
            if (ps) {
                ps.update()
            }
        }

        const el = ref(null)

        onMounted(() => {
            ps = new PerfectScrollbar(el.value, settings)
        })

        onUnmounted(() => {
            ps.destroy()
        })

        return () => (
            <tagname onmouseover={withModifiers(update, ['once'])} ref={el}>
                {slots.default?.()}
            </tagname>
        )
    },
})
