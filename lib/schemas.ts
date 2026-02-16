import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(1, "I'm gonna need that name. Give me SOMETHING.").max(50, "I said a name, not a novel. Let's cut that down to less than 50 characters."),
  lastName: z.string().min(1, "Even Beyoncé has Knowles. I need the last name too.").max(50, "...I'm not reading all that. Keep it under 50 characters, please."),
  email: z.email().min(1, "I promise I won't spam you. I just need a way to get back to you.").max(100, "Now, you KNOW that should get flagged. Let's try again with something less than 100 characters."),
  message: z.string().min(1, "Don't be shy, I won't judge. Let me hear you!").max(1000, "OKAY, okay, chill. Let's start smaller. Try to keep it under 1000 characters, please. Ipromise you I'll read it AND get back to you"),
});