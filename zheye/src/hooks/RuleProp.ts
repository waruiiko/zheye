interface RuleProp {
    type: 'required' | 'email' | 'password' |'title' | 'content';
    message: string;
  }

// export default RuleProp;
export type RulesProp = RuleProp[]