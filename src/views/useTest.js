import {
  ref,
  reactive,
  computed,
  watch,
  onMounted,
  getCurrentInstance
} from 'vue'

export default function useTest() {
  const state = reactive({
    count: 1
  })

  const { ctx } = getCurrentInstance() // 获取组件实例

  const refNum = ref(2)

  const doubleCount = computed(() => state.count * 2)

  const number = computed(() => ctx.$store.state.number)

  const a = computed(() => ctx.$store.getters.aaValue)

  const increment = () => {
    state.count++
  }

  const gotoAbout = () => {
    ctx.$router.push('/about')
  }

  const updateNum = () => {
    // ctx.$store.commit('SET_NUMBER', refNum.value * 100)
    ctx.$store.dispatch('setNumber', refNum.value * 200)
  }

  const updateA = () => {
    ctx.$store.commit('SET_AA', ctx.$store.state.a.aa + 1)
  }

  watch(
    () => state.count,
    () => {
      console.log('变化')
    }
  )

  onMounted(() => {
    console.log('生命周期', refNum, ctx.$router, ctx)
  })

  return {
    state,
    doubleCount,
    increment,
    gotoAbout,
    updateNum,
    refNum,
    number,
    a,
    updateA
  }
}
