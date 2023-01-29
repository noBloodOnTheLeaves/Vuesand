import {defineRule} from "vee-validate";
// @ts-ignore
import {min, email, required} from "@vee-validate/rules";

//-> Define the rule globally
defineRule('required', required);
defineRule('min', min);
defineRule('email', email);


