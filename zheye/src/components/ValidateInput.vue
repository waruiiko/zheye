<template>
  <div class="validate-input-container pb-3">
    <input
      type="text"
      class="form-control"
      :class="{ 'is-invalid': inputRef.error, 'is-valid': !inputRef.error }"
      v-model="inputRef.val"
      @blur="validateInput"
    />
    <span v-if="inputRef.error" class="invalid-feedback">{{
      inputRef.message
    }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType } from 'vue'
import {RulesProp} from '../hooks/RuleProp'
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export default defineComponent({
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String
  },
  setup(props) {
    const inputRef = reactive({
      val: props.modelValue ||'',
      error: false,
      message: ''
    })
    const validateInput = () => {
      if (props.rules) {
        //every函数：只有当数组中每一项都为true，才返回true，否则返回false
        const allPassed = props.rules.every(rule => {
          let passed = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = (inputRef.val.trim() !== '')
              break
            case 'email':
              passed = emailReg.test(inputRef.val)
              break
            default:
              break
          }
          return passed
        })
        inputRef.error = !allPassed
      }
    }
    return {
      inputRef,
      validateInput
    }
  }
})
</script>