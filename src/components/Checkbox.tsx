
import {Checkbox} from "@nextui-org/react";

export default function App() {
  return (
    <div className="flex flex-col gap-4">
      <Checkbox isDisabled defaultSelected color="primary">
        Be organized to start your freelance business
      </Checkbox>
      <Checkbox isDisabled defaultSelected color="primary">
        Decide on what to offer as a freelancer
      </Checkbox>
      <Checkbox isDisabled defaultSelected color="primary">
        Polish your skills
      </Checkbox>
      <Checkbox isDisabled defaultSelected color="primary">
        Create your personal brand
      </Checkbox>
      <Checkbox isDisabled defaultSelected color="primary">
        Get testimonials and use them to get clients
      </Checkbox>
      <Checkbox isDisabled defaultSelected color="primary">
        Create your services
      </Checkbox>
      <Checkbox isDisabled defaultSelected color="primary">
        Price your services
      </Checkbox>
      <Checkbox isDisabled defaultSelected color="primary">
        Market your services
      </Checkbox>
      <Checkbox isDisabled defaultSelected color="primary">
        Get your first client
      </Checkbox>

    </div>  
  );
}