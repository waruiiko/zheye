<template>
  <div class="validate-input-container pb-3">
    <input
      type="text"
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      :value="inputRef.val"
      @blur="validateInput"
      @input="updateValue"
      v-bind="$attrs"
    />
    <span v-if="inputRef.error" class="invalid-feedback">{{
      inputRef.message
    }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType,onMounted } from "vue";
import { RulesProp } from "../hooks/RuleProp";
import {emitter} from "./ValidateForm.vue"
const emailReg =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const pwReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
// 长度至少为8，至少含有一个字母和一个数字
// "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"

// 长度至少为8，至少含有一个字母和一个数字和一个特殊字符
// "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"

// 长度至少为8，且至少有一个数字 并同时包含大小写字母
// "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"

// 长度至少为8,包含大小写字母、数字和特殊字符
// "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"

// 长度8到10，, 包含大小写数字和特殊字符
// "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$"

export default defineComponent({
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String,
  },
  //禁用Attribute继承
  inheritAttrs: false,
  setup(props, context) {
    const inputRef = reactive({
      val: props.modelValue || "",
      error: false,
      message: "",
    });
    //代替v-model实现双向绑定
    const updateValue = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value;
      inputRef.val = targetValue;
      context.emit("update:modelValue", targetValue);
    };
    const validateInput = () => {
      if (props.rules) {
        //every函数：只有当数组中每一项都为true，才返回true，否则返回false
        const allPassed = props.rules.every((rule) => {
          let passed = true;
          inputRef.message = rule.message;
          switch (rule.type) {
            case "required":
              passed = inputRef.val.trim() !== "";
              break;
            case "email":
              passed = emailReg.test(inputRef.val);
              break;
            case "password":
              passed = pwReg.test(inputRef.val);
              break;
            default:
              break;
          }
          return passed;
        });
        inputRef.error = !allPassed;
        return allPassed
      }
      return true
    };
    onMounted(()=>{
      emitter.emit("form-item-created",validateInput);
    })
    return {
      inputRef,
      validateInput,
      updateValue,
    };
  },
});
</script>