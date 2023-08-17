import {
  Label,
  Input,
  InputField,
  Form,
  Stack,
  Card,
  Container,
  Row,
  Hr,
} from "@yakad/ui";
import { inpuField } from "@yakad/ui";

function YakadField() {
  return (
    <Container maxWidth="md">
      <h2 style={{ fontSize: "23px", color: "#dc3445" }}>InputField</h2>
      <Hr />
      <h3 style={{ fontSize: "1.8rem" }}>Variant:</h3>
      <Card
        style={{
          maxWidth: "60rem",
          margin: "auto",
          marginBottom: "2rem",
        }}
      >
        <Form>
          <InputField placeholder="outlined" variant="outlined" />
        </Form>{" "}
      </Card>
      <Card
        style={{
          maxWidth: "60rem",
          margin: "auto",
          marginBottom: "2rem",
        }}
      >
        <Form>
          <InputField placeholder="filled" variant="filled" />
        </Form>{" "}
      </Card>
      <Card
        style={{
          maxWidth: "60rem",
          margin: "auto",
        }}
      >
        <Form>
          <InputField placeholder="standard" variant="standard" />
        </Form>
        {" standard"}
      </Card>
    </Container>
  );
}

export default YakadField;
