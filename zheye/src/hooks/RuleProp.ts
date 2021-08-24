interface RuleProp {
    type: 'required' | 'email';
    message: string;
  }

// export default RuleProp;
export type RulesProp = RuleProp[]