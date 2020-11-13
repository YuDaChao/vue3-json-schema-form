import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup(props) {
    return () => {
      return <h1>{props.msg}</h1>
    }
  }
})
