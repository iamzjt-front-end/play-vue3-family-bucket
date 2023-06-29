import {defineComponent} from "vue";

export default defineComponent({
  setup(props) {
    const TimeLine = (props) => {
      const timeline = [
        <div className={start}>111</div>,
        <div className={end}>222</div>
      ]

      if (props.reverse) {
        timeline.reverse()
      }

      return <div>{timeline}</div>
    }
  }
})
