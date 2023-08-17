import { Container, Stack, Row, Button, Hr, Spacer, Card } from "@yakad/ui";
import { ReactComponent as SearchIcon } from "../assets/svg/search.svg";

function YakadButtons() {
  return (
    <Container maxWidth="md">
      <h2 style={{ fontSize: "23px", color: "#dc3545" }}>Yakad Buttons</h2>
      <Hr />
      <h3 style={{ fontSize: "1.8rem" }}>Size:</h3>
      <Card
        style={{
          maxWidth: "60rem",
          margin: "auto",
        }}
      >
        <Row
          style={{
            justifyContent: "center",
          }}
        >
          <Button variant="outlined" size="small">
            SMALL
          </Button>
          <Button variant="outlined" size="medium">
            MEDIUM
          </Button>
          <Button variant="outlined" size="large">
            LARGE
          </Button>
        </Row>
      </Card>
      <h3 style={{ fontSize: "1.8rem" }}>Variants:</h3>
      <Card
        style={{
          maxWidth: "60rem",
          margin: "auto",
        }}
      >
        <Stack>
          <Row
            style={{
              justifyContent: "center",
            }}
          >
            <Button variant="link">link</Button>
            <Button variant="text">text</Button>
            <Button variant="outlined">outlined</Button>
            <Button variant="elevated">elevated</Button>
          </Row>
          <Row
            style={{
              justifyContent: "center",
            }}
          >
            <Button variant="filledtonal">filledtonal:</Button>
            <Button variant="tonal">tonal</Button>
            <Button variant="fab">fab</Button>
            <Button variant="filled">filled</Button>
          </Row>
        </Stack>
      </Card>
      <h3 style={{ fontSize: "1.8rem" }}>icon:</h3>
      <Card
        style={{
          maxWidth: "60rem",
          margin: "auto",
        }}
      >
        <Row
          style={{
            justifyContent: "center",
          }}
        >
          <Button variant="outlined" icon={<SearchIcon />} />
          <Button variant="outlined" icon={<SearchIcon />}>
            Search
          </Button>
          <Button variant="outlined" icon={<SearchIcon />} iconPosition="end">
            Search
          </Button>
        </Row>
      </Card>
      <h3 style={{ fontSize: "1.8rem" }}>borderStyle:</h3>
      <Card
        style={{
          maxWidth: "60rem",
          margin: "auto",
        }}
      >
        <Row
          style={{
            justifyContent: "center",
          }}
        >
          <Button variant="filled" borderStyle="none">
            none
          </Button>
          <Button variant="filled" borderStyle="semi">
            semi
          </Button>
          <Button variant="filled" borderStyle="rounded">
            rounded
          </Button>
        </Row>
      </Card>
      <h3 style={{ fontSize: "1.8rem" }}>loading:</h3>
      <Card
        style={{
          maxWidth: "60rem",
          margin: "auto",
        }}
      >
        <Stack>
          <Row
            style={{
              justifyContent: "center",
            }}
          >
            <Button
              variant="outlined"
              loading={true}
              loadingVariant="scaleOut"
              icon={<SearchIcon />}
              disabled
            >
              loading
            </Button>
            <Button
              variant="outlined"
              loading={true}
              loadingVariant="scaleOut"
              iconPosition="end"
              icon={<SearchIcon />}
              disabled
            >
              loading
            </Button>

            <Button
              variant="outlined"
              loading={true}
              loadingPosition="center"
              loadingVariant="scaleOut"
              icon={<SearchIcon />}
              disabled
            >
              loading
            </Button>

            <Button
              variant="outlined"
              loading={true}
              loadingPosition=""
              loadingVariant="scaleOut"
              icon={<SearchIcon />}
              disabled
            ></Button>
          </Row>
          <Row
            style={{
              justifyContent: "center",
            }}
          >
            <Button
              variant="outlined"
              loading={true}
              loadingVariant="spinner"
              icon={<SearchIcon />}
              disabled
            >
              loading
            </Button>

            <Button
              variant="outlined"
              loading={true}
              loadingVariant="spinner"
              iconPosition="end"
              icon={<SearchIcon />}
              disabled
            >
              loading
            </Button>
            <Button
              variant="outlined"
              loading={true}
              loadingPosition="center"
              loadingVariant="spinner"
              icon={<SearchIcon />}
              disabled
            >
              loading
            </Button>

            <Button
              variant="outlined"
              loading={true}
              loadingVariant="spinner"
              icon={<SearchIcon />}
              disabled
            ></Button>
          </Row>
          <Row
            style={{
              justifyContent: "center",
              Button: "50%",
            }}
          >
            <Button
              variant="outlined"
              loading={true}
              loadingVariant="dots"
              icon={<SearchIcon />}
              disabled
            >
              loading
            </Button>
            <Button
              variant="outlined"
              loading={true}
              loadingVariant="dots"
              icon={<SearchIcon />}
              iconPosition="end"
              disabled
            >
              loading
            </Button>
            <Button
              variant="outlined"
              loading={true}
              loadingVariant="dots"
              loadingPosition="center"
              icon={<SearchIcon />}
              disabled
            >
              loading
            </Button>
            <Button
              variant="outlined"
              loading={true}
              loadingVariant="dots"
              icon={<SearchIcon />}
              disabled
            ></Button>
          </Row>
        </Stack>
      </Card>
      <Hr
        style={{
          marginTop: "5%",
          marginBottom: "9%",
        }}
      />
    </Container>
  );
}

export default YakadButtons;
