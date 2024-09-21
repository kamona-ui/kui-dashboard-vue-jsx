import { defineComponent } from 'vue'
import PageWrapper from '@/components/PageWrapper'

export default defineComponent({
    setup() {
        return () => <PageWrapper title="Blank"></PageWrapper>
    },
})
