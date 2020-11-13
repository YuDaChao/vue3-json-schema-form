import { defineComponent } from 'vue'

import HelloWorld from '@/components/HelloWorld'

export default defineComponent({
  setup() {
    return () => {
      return (
        <div>
          <HelloWorld msg="Hello" />
        </div>
      )
    }
  }
})
