interface RuleProp {
    type: 'required' | 'email' | 'password';
    message: string;
  }

// export default RuleProp;
export type RulesProp = RuleProp[]