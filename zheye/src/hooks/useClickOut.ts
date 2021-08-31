import { Ref, ref, onMounted, onUnmounted } from "vue";

const useClickOut = (elementRef: Ref<null | HTMLElement>) => {
    const isClickOut = ref(false);
    const handler = (e: MouseEvent) => {
        if (elementRef.value) {
            if (elementRef.value.contains(e.target as HTMLElement)) {
                isClickOut.value = false
            }else {
              isClickOut.value = true;
          }
        }
    }
    //添加事件
    onMounted(() => {
        document.addEventListener("click", handler);
    }),
    //移除事件
    onUnmounted(() => {
        document.removeEventListener("click", handler);
    })
    return isClickOut
}

export default useClickOut