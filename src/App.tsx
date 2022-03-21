import { ReactElement } from "react";
import { Container } from "@material-ui/core";
import { ContactForm } from "./form";

export const App = (): ReactElement => {
  return (
    <Container className="App">
      <ContactForm />
    </Container>
  );
};
