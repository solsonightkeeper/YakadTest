import { Button, Card, Container, Spacer, Row, Hr } from "@yakad/ui";

function YakadSpacer() {
  return (
    <Container maxWidth="md">
      <h2 style={{ fontSize: "23px", color: "#dc3533" }}>Spacer</h2>
      <Hr />
      <h3 style={{ fontSize: "1.8rem" }}>spacer:</h3>
      <Card>
        <Row>
          <Button>start</Button>
          <Spacer />
          <Button>end</Button>
        </Row>
      </Card>
    </Container>
  );
}

export default YakadSpacer;
