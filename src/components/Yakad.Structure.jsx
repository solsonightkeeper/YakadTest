import {
  AppBar,
  Button,
  Card,
  Container,
  Footer,
  GridContainer,
  GridItem,
  Hr,
  Main,
  Page,
  Row,
  Spacer,
  Product,
} from "@yakad/ui";

function YakadPage() {
  return (
    <Container maxWidth="md">
      <h2 style={{ fontSize: "23px", color: "blue" }}>Yakad</h2>
      <Hr />
      <h3 style={{ fontSize: "1.8rem" }}>PageStructure:</h3>
      <Page style={{ border: "1px solid blue" }}>
        <h2
          style={{
            textAlign: "center",
          }}
        >
          Page
        </h2>
        <AppBar style={{ border: "1px solid blue" }}>
          <h2>AppBar</h2>
        </AppBar>
        <Main style={{ border: "1px solid blue" }}>
          <Container style={{ background: "0" }} maxWidth="md">
            <h2>Container</h2>
            <GridContainer rowGap={1} columnGap={1}>
              <GridItem xl={4} sm={12}>
                <h2>GridItem</h2>
                <Card>
                  <h2>Card</h2>
                </Card>
              </GridItem>
              <GridItem xl={4} sm={12}>
                <h2>GridItem</h2>
                <Card>
                  <h2>Card</h2>
                </Card>
              </GridItem>
              <GridItem xl={4} sm={12}>
                <h2>GridItem</h2>

                <Card>
                  <h2>Card</h2>
                </Card>
              </GridItem>
            </GridContainer>
          </Container>
          <Footer style={{ border: "1px solid blue" }}>
            <h2>footer</h2>
          </Footer>
        </Main>
      </Page>
    </Container>
  );
}

export default YakadPage;
